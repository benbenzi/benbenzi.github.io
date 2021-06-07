---
title: 加密测试
description: >
  加密测试
hide_description: true
sitemap: false
permalink: /docs/
---

<div id="pwinput">请输入密码<br>
   <input id="inputkey" type="password"> <button onclick="onbtnDecrypto()">解密</button>
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
            encryptedMsg = '5f691ada99e7424273e64691857deae9bad75b347ef66b9a2d68f315f555a27c3ada455447d1295e41e93465c5562fc53113b831bb87f8b85937c753ce814205w4pqCm239rmGWWQnBqc32PHkQ5E1We0NXqOD3LXJQRqhyp/0W973uIEWfpp/YEdYefY/i018hYfpcwokzsHuozq463R+i131IPO58tXTX1aBOpAHrBevp/h4B+bsHqyEE2ZrkIoCd66w2ZeyFDJpUoAqWFFYhWNJF3xUdG38hM5LhA+lTseFLPTWndCBw+M9mCQlVc3gypbLnDhRDIEmlWaYpMGjf/SQmSX+jVmzFNoAo7Q+yd42R+AGDXzu3uU2HmTNn8V+0O4oK88BW3KWinR/3JXDHHVrZjkecDJLkS8=',
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
