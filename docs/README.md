---
title: encrypt
description: >
  Here you should be able to find everything you need to know to accomplish the most common tasks when blogging with Hydejack.
hide_description: true
sitemap: false
permalink: /docs/
---
<div class="staticrypt-form">
                        <div class="staticrypt-instructions">
                            <p class="staticrypt-title">受保护的文章 | Protected Post</p>
                            <p>输入正确密钥以解锁文章 | Enter passphrase to unlock the page</p>
                        </div>
                        <hr>
                        <form id="staticrypt-form" action="#" method="post">
                            <input id="staticrypt-password" type="password" name="password" placeholder="密钥 | Passphrase">
                            <input type="submit" class="staticrypt-decrypt-button" value="解密 | DECRYPT">
                        </form>
                    </div>
                    
<script src="//cdn.jsdelivr.net/npm/crypto-js@3.1.9-1/crypto-js.min.js"></script>

<script>
    var input = document.getElementById("staticrypt-password");
    function resetborder() {
        if (theme_value === "dark"){
            input.style.border = "2px solid #363636";
        } else {
            input.style.border = "2px solid #f2f2f2";
        }
    }
    (function(){
        input.oninput = resetborder;
        document.getElementById('staticrypt-form').addEventListener('submit', function(e) {
            e.preventDefault();
            let payload = "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".split("|"),
                iv = payload[0], hmac = payload[1], cipherText = payload[2],
                passphraseDgst = CryptoJS.SHA256(document.getElementById('staticrypt-password').value).toString(),
                decryptedhmac = CryptoJS.HmacSHA256(cipherText, CryptoJS.enc.Hex.parse(passphraseDgst)).toString().trim();
            if (CryptoJS.enc.Base64.parse(hmac).toString() !== decryptedhmac) {
                input.style.border = "2px solid #ed1c24";
                createSnackbar({
                    message: 'Bad Passphrase',
                    actionText:"ok",
                    duration: 3000,
                    mode: 'error'
                });
                return;
            }
            //back to top
            scrollToY(0, 500, 'easeInOutQuint');
            createSnackbar({
                message: 'Access Granted',
                actionText:"ok",
                duration: 3000,
                mode: 'success'
            });

            var decrypted = CryptoJS.AES.decrypt(
                {ciphertext:CryptoJS.enc.Base64.parse(cipherText)},
                CryptoJS.enc.Hex.parse(passphraseDgst),
                {iv:CryptoJS.enc.Base64.parse(iv)}
            );
            let plainHTML = CryptoJS.enc.Utf8.stringify(decrypted);

            setTimeout(function () {
                document.getElementsByClassName("post-content")[0].innerHTML = plainHTML;
                document.getElementsByClassName("catalog-container")[0].classList.toggle('hidden');
                document.getElementsByClassName("mobile-toc")[0].classList.toggle('hidden');
                document.getElementsByClassName("side-progress")[0].classList.toggle('hidden');async("/js/jquery.nav.js", function () {
                    $('.catalog-body, .mobile-catalog-body').onePageNav({
                        currentClass: "active",
                        changeHash: !1,
                        easing: "swing",
                        filter: "",
                        scrollSpeed: 700,
                        scrollOffset: 0,
                        scrollThreshold: .2,
                        begin: null,
                        end: null,
                        scrollChange: null,
                        padding: 80
                    });
                });if (document.getElementsByClassName('mermaid').length > 0) {mermaid_d3_init();}
                initProgressBar();anchors.add().remove('.intro-header h1').remove('.subheading').remove('.sidebar-container h5');}, 700);
        });
    })();
</script>
