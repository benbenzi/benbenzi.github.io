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
function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null) len += 3;
        else len += 1;
    }
    return len;
}

function onbtnDecrypto() {
    var encryptedData = "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";
    var keyword = document.getElementById("inputkey").value;

    if (keyword.replace(/(^\s*)|(\s*$)/g, "") == '') {
        alert("请输入密码！");
        return;
    }
    while (getByteLen(keyword) % 8 != 0) {
        keyword = keyword + "\0";
    }

    var key = CryptoJS.enc.Utf8.parse(keyword);
    var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedData);
    var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);

    var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    if (decryptedData.sigBytes < 0) {
        document.getElementById("output").innerHTML = "解密失败！密文或者key错误!";
        return;
    }
    try {
        decryptedData.toString(CryptoJS.enc.Utf8)
    } catch(e) {
        document.getElementById("output").innerHTML = "解密失败！密文或者key错误!";
        return;
    }
    var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
    document.getElementById("output").innerHTML = decryptedStr;
    document.getElementById("pwinput").style.display = "none";
}
</script>

<script src="/assets/js/aes.js"></script>