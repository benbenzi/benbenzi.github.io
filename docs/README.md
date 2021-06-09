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


<script>
var content = '8bf8962c642d1d3fd6373ff6b3c264498805dee6e0bef85f988efa8b5aafc9025f881846a2e8f48c98bfdaed5e440ea8d2ff05f12cd307426acf7fd64df10681fLNP0eX/9tqFj9QIIHNPtrGSYG5L6fh3RJQY44eDX5x4MYqdvGXfxvEMn2alyY0lf6aDt0IVdI1Vijxn1eCnTKn4tpFb+XPGqFDToqljWYCbDrRvcctvgEvJMgvynjKF7cCFdwghFPOqJqm4gwErtUnMeO2lWSrtMX4c48A/PFfOAliDJHRcH4xFKXnrTSSYHsPwryJYEr9yMH+HD8k7mlGy64C4pUhvBE0njGKV9AOUxKkKDcf7FkQqGBd0flycquv8hd3upifNneLRdmykl9aGZNLz+HUCARzjtHCWVUCb8LH3YpYub5n+rx7W1xhaZWwH0nBn0A23BaZeiPE9UOalr89rlp9MTziljPGkuEalwPMTonArV/lT4b18saYGqapHvz+acizvkVlR+d2gmndK4ENJcAH6/s2vW6v/Xp4=';
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