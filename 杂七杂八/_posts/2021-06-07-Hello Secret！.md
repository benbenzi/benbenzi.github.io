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

<script>
var content = '8bf8962c642d1d3fd6373ff6b3c264498805dee6e0bef85f988efa8b5aafc9025f881846a2e8f48c98bfdaed5e440ea8d2ff05f12cd307426acf7fd64df10681fLNP0eX/9tqFj9QIIHNPtrGSYG5L6fh3RJQY44eDX5x4MYqdvGXfxvEMn2alyY0lf6aDt0IVdI1Vijxn1eCnTKn4tpFb+XPGqFDToqljWYCbDrRvcctvgEvJMgvynjKF7cCFdwghFPOqJqm4gwErtUnMeO2lWSrtMX4c48A/PFfOAliDJHRcH4xFKXnrTSSYHsPwryJYEr9yMH+HD8k7mlGy64C4pUhvBE0njGKV9AOUxKkKDcf7FkQqGBd0flycquv8hd3upifNneLRdmykl9aGZNLz+HUCARzjtHCWVUCb8LH3YpYub5n+rx7W1xhaZWwH0nBn0A23BaZeiPE9UOalr89rlp9MTziljPGkuEalwPMTonArV/lT4b18saYGqapHvz+acizvkVlR+d2gmndK4ENJcAH6/s2vW6v/Xp4=';
</script>
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
        content = content.substr(1);
        content = content..substring(0, str.length-1);
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
<div id="output"></div>
<div id="pwinput">
    <div class="form-group">
        <label for="inputkey">请输入密码</label>
        <input type="password" class="form-control" id="inputkey" placeholder="请输入密码">
    </div>
    <button class="btn btn-primary" onclick="onbtnDecrypto()">解密</button>
</div>