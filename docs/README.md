---
title: 测试
description: >
  测试
hide_description: true
sitemap: false
permalink: /docs/
---

<!--## 堵塞式
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
~~~-->

<script type="text/javascript" src="/assets/highlight.js"></script>
<script> hljs.initHighlightingOnLoad() </script>
<script>
var content = '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';
    var keySize = 256;
    var iterations = 1000;
    function decrypt (encryptedMsg, pass) {
        var salt = CryptoJS.enc.Hex.parse(encryptedMsg.substr(0, 32));
        var iv = CryptoJS.enc.Hex.parse(encryptedMsg.substr(32, 32));
        var encrypted = encryptedMsg.substring(64);
        var key = CryptoJS.PBKDF2(pass, salt, {
            keySize: keySize/32,
            iterations: iterations
        });
        var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        }).toString(CryptoJS.enc.Utf8);
        return decrypted;
    }
    function onbtnDecrypto(){
        var passphrase = document.getElementById('inputkey').value,
            encryptedMsg = content,
            encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
            console.log(decryptedHMAC);
            console.log(encryptedHMAC);
        if (decryptedHMAC !== encryptedHMAC) {
            alert('密码错误！');
            return;
        }
        var plainHTML = decrypt(encryptedHTML, passphrase);
    document.getElementById("output").innerHTML = plainHTML;
    document.getElementById("pwinput").style.display = "none";
    }
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" integrity="sha384-lp4k1VRKPU9eBnPePjnJ9M2RF3i7PC30gXs70+elCVfgwLwx1tv5+ctxdtwxqZa7" crossorigin="anonymous"></script>

## ！这是一篇加密文档！

**除正文内特殊允许外，任何加密内容禁止复制、转载，谢谢！**

---

<br>
<div id="output"></div>
<div id="pwinput">
    <div class="form-group">
        <label for="inputkey">请输入密码</label>
        <input type="password" class="form-control" id="inputkey" placeholder="请输入密码">
    </div>
    <button class="btn btn-primary" onclick="onbtnDecrypto()">解密</button>
</div>