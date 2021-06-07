---
title: 加密测试
description: >
  加密测试
hide_description: true
sitemap: false
permalink: /docs/
---


<div class="staticrypt-page">
 <div class="staticrypt-form">
  <div class="staticrypt-instructions">
<p class="staticrypt-title">受保护的页面</p>
<p><p>输入 &quot;2333&quot; 即可解锁</p>
</p>
  </div>

<hr class="staticrypt-hr">

<form id="staticrypt-form" action="#">
<input id="staticrypt-password" type="password" name="password" placeholder="输入密码" autofocus/>

<input type="submit"  value="解锁"/>
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
encryptedMsg = '1b30d6fbc58ae19dcb355dcde548f1d4eef3b0a22854014a9a99cf91a90bbf759ea2bcf4b5f3dd6b807cdbe4494f9496cd16f2ea5da77523c1c5d21360ddbf6A6KXWfG6J1aFt2rX77b6npU1zDoMhrgXLzUx5Zjw1KisCbls1AbNzD4TMUaDun71H2v6KozRvvpycTJTYmuMwlAIRayqjw15cG0tuVBjImIB34oV6j2iKzU/qb1nSuHo+CX/5urkZuFYCMLtCrOcccwuSI1Dq4RVTQUnRCdDv/OKxzlAfBtFpnXyCQneI3G2X9G2y4MQiavnWXN+EWIblRkVtjZ4i2zLoriV/SBY9wflOBzDj2n/EjWSayD38lGk8cItli60JJEbWjp5hNgRpW3lA9wkPJ8jUSj2J8mP7Sg=',
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
</script>

