---
layout: post
title: Hello Secret！
image: /assets/img/blog/2019-01-18/cover.jpg
accent_image: 
  background: url('/assets/img/blog/2021-06-04/bg.jpg') center/cover
  overlay: false
accent_color: '#ccc'
theme_color: '#ccc'
description: >
  这是第一个秘密哦～
invert_sidebar: true
encrypt: true
---

<div id="output"></div>
<div id="pwinput">
    <div class="form-group">
        <label for="inputkey">请输入密码</label>
        <input type="password" class="form-control" id="inputkey" placeholder="请输入密码">
    </div>
    <button class="btn btn-primary" onclick="onbtnDecrypto()">解密</button>
</div>
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
        var content = '{{ post.content }}',
            passphrase = document.getElementById('inputkey').value,
            encryptedMsg = content.substr(3),
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
