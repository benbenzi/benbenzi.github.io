---
layout: post
title: 【转载】Github Pages 添加密码保护
image: /assets/img/blog/2019-01-18/cover.jpg
accent_color: '#ccc'
theme_color: '#ccc'
description: >
  转载自：<https://soptq.me/2019/01/18/add-pswd/><br>如何对一篇静态博文做密码保护, 查看密码为 testpassword
invert_sidebar: true
category: 写点代码
---

# 【转载】Github Pages 添加密码保护

## 引

由于我的博客架设在 Github 服务器上，所以整个博客的源代码是公开的，这让我不可能在这个博客上写一些私人的东西。有时候一些自己的感悟被其他人看到了，会觉得很尴尬。所以很久之前就想给博客做一个这样的功能，即某些文章，某些页面可以由一个密码来保护。前几天期末考试结束，我也终于有时间开始研究这个问题，也终于在今天完全做完了。趁着对整个流程的记忆还比较清晰，赶紧来写个博客压压惊。

## 前期： 如何实现？
对于静态博客，没有服务器加持，最理想的服务器验证解密是行不通了（其实也可以行得通，但是要使用 Bmob 啊这些第三方数据库来进行处理）。我冥思苦想，大概想出了以下的方法。

## 堵塞式
Html 代码是完全透明的，而显示一个部分的前提条件是这个部分会加载进 html 源码中。也就是说，只要这个部分最终会显示出来，那么用户就一定可以在源代码中找到这个部分的代码。静态网页的加密难点就主要在对这部分代码的隐藏。另一方面，网页的代码又是解释性的，即运行到哪里才编译哪里。那么我们就很容易想到，有没有代码可以让网页“卡”在那条代码上，后面的都先不解释，也就无法展现在源代码中，这样就解决了加密部分的源代码隐藏了。这就是我们的 `prompt` 方法。

> `prompt()` 方法用于显示可提示用户进行输入的对话框。
> `prompt(text,defaultText)`
> 如果用户单击提示框的取消按钮，则返回 null。如果用户单击确认按钮，则返回输入字段当前显示的文本。
> *在用户点击确定按钮或取消按钮把对话框关闭之前，它将阻止用户对浏览器的所有输入。在调用 prompt() 时，将暂停对 JavaScript 代码的执行，在用户作出响应之前，不会执行下一条语句。*

于是，很简单的代码逻辑就出来了。

~~~js
if (prompt('input','') == YOURPASSWORD){
	  unlock();
}else {
    alert('bad password');
}
~~~

但是这个方法有一个致命的问题，就是我的博客是架设在 Github 上的，也就是说，访问者只要进入我的 Github 仓库，找到这篇文章的 `post` 文件，这个加密就形同虚设了。为了真正做到加密，我们不能这样做。

## 全文加密

想到全文加密也是非常自然的事情，因为既然我的全部文档都公开，那么真正的加密只能对文章源码加密。但是这个方法的劣势也很明显，即我不能在网页中做加密，加密必须是“非对称”的。

## 全文加密的原理

假设我现在有一个未加密的文本 `unencrypt` 和我准备设置的密码 `password`。那么我最终得到的 `encrypt` 一定包含两个部分。一个部分用来验证输入密码的正确性，一个部分用来用正确的密码解密得到原文档 `unencrypt`。整个过程就是：

1. 用 `password` 加密 `unencrypt` 得到 `tempencrypt`
2. 用 `tempencrypt` 加密 `password` 得到 `enpassword`
3. 最终的 `encrypt` 为 `tempencrypt` 和 `enpassword` 的某种组合。

这样的话，当用户输入一个密码后，先可以用 `tempencrypt` 验证密码是不是正确的，如果正确，再用用户输入的密码解密 `tempencrypt`。

<https://github.com/robinmoisson/staticrypt>

## 善后

善后就很简单了，比如在 post 的头部文件中加入 `password` 来判断这篇博文是否经过了加密，还比如写一个加密的情况下展示的页面。另外每一次加密都到专门的 AES 加密网站加密是很麻烦的，索性又写了一个 CMS 网页来包含这些转换啊，加密功能。当然由于是静态网站，CMS的作用是非常有限的，在线更新博文就是不可能的了。于是现在写一篇加密的文章步骤如下

1. 正常的写完一篇使用 `markdown` 作为语法的文章。
2. 将 `markdown` 文本输入 CMS 的 `Markdown 转 Html`输入框，将 `markdown` 文本转换为 `Html` 代码。
3. 将 `Html` 代码复制进 CMS 下面的 `源文件` 输入框，并在 `密钥` 输入框中输入您的加密密码后，点击 加密 生产加密后的文本。
4. 在 `_posts` 目录下按照一般情况创建一个 `*.markdown` 文件，头部信息与其他普通的一样。
5. 在正文中粘贴刚才加密后的文本，在头部信息中加入 `password:true`。
6. 应该可以在预览中查看到加密后的效果。

## Mathjax

用户解密后，如果页面需要 mathjax，则一定要记得重新调用 mathjax，否则公式会无法显示。

~~~js
if (typeof MathJax !== 'undefined') {
     try {
        MathJax.Hub.Queue(
            ['resetEquationNumbers', MathJax.InputJax.TeX, ],
            ['PreProcess', MathJax.Hub, ],
            ['Reprocess', MathJax.Hub, ]
        );
    }  catch (e) {
        console.log('Can\'t render with MathJax');
    }
}
~~~

## Catalog

如果页面通过文本生成目录的话，解密后也要重新根据文本生成。因为一开始揭秘前源代码中根本没有文章，所以目录是无法生成的。