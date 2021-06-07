---
layout: page
title: 加密测试文档
description: >
  加密测试文档
sitemap: false
---
<div class="staticrypt-page">
    <div class="staticrypt-form">
        <div class="staticrypt-instructions">
            <p class="staticrypt-title">受保护的页面</p>
            <p><p>输入 &quot;2333&quot; 即可解锁</p>
</p>
        </div>

        <hr class="staticrypt-hr">

        <form id="staticrypt-form" action="#" method="post">
            <input id="staticrypt-password"
                   type="password"
                   name="password"
                   placeholder="输入密码"
                   autofocus/>

            <input type="submit" class="staticrypt-decrypt-button" value="解锁"/>
        </form>
    </div>

</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" integrity="sha384-lp4k1VRKPU9eBnPePjnJ9M2RF3i7PC30gXs70+elCVfgwLwx1tv5+ctxdtwxqZa7" crossorigin="anonymous"></script>

<script>
    var keySize = 256;
    var iterations = 1000;
    function decrypt (encryptedMsg, pass) {
        var salt = CryptoJS.enc.Hex.parse(encryptedMsg.substr(0, 32));
        var iv = CryptoJS.enc.Hex.parse(encryptedMsg.substr(32, 32))
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

    document.getElementById('staticrypt-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var passphrase = document.getElementById('staticrypt-password').value,
            encryptedMsg = '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', 
            encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();

        if (decryptedHMAC !== encryptedHMAC) {
            alert('密码错误！');
            return;
        }

        var plainHTML = decrypt(encryptedHTML, passphrase);

        document.write(plainHTML);
        document.close();
    });
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
