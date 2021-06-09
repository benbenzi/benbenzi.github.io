---
title: 代码高亮测试！
description: >
  密码2333
hide_description: true
sitemap: false
permalink: /docs/
---

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
<script type="text/javascript" src="/assets/highlight.js"></script>
<script>hljs.highlightAll();</script>
<link rel="stylesheet" href="/assets/styles/default.min.css">

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
