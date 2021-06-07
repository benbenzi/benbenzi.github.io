---
title: 加密测试
description: >
  加密测试
hide_description: true
sitemap: false
permalink: /docs/
---


<div id="pwinput">
  <div class="form-group">
    <label for="inputkey">请输入密码</label>
    <input type="password" class="form-control" id="inputkey" placeholder="请输入密码">
  </div>
  <button class="btn btn-primary" onclick="onbtnDecrypto()">解密</button>
</div>
<div id="output"></div>


<script>

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
            encryptedMsg = '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',
            encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();

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
