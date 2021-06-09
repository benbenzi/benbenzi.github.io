---
title: 测试
description: >
  测试
hide_description: true
sitemap: false
permalink: /docs/
---

## 堵塞式
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
~~~


<script>
var content = '9c2ae89eff222ebefb35a987f2cee7927dbb28dbbf6e49aa95bb1fe29fcfe5784021969c665bc8e6cd36a65fd4fc21dd6febd6759181ed1f55a307dbb8d85d1aQRlM4pihfESX5Hwk0K+53PpZaa2D22kGP2IJSukxn4LbQshAnnx2ztuTKGm4erIes8XxWcQs4Smo0KZLcgjDcgr8D+m4D7ALfrUiRxcVRuXcvotdjSw1Hgrl8BRcLZSdpM2V9zjz4Rh0Z20B+S0TpFil1rSTLmDog8XyTZ4SbQwQ+r1Tlj2alUxUHcpHOSjGMVTARLQZRrDO30WOX1Z7t6T8KyLlUbhYIY/sxQe9d9pzxWeMu8oY+Is9nWtJnlnCsYY8v9dwC+g+A09susEbm0QBLLpRvVI2jTWQNYQv+SwNVRQj86WCArRBX+AWtSk+jcrkeRGX5OahnwiNo0D7bFbctmAZL1spZK5vyP6FA5zoullh/HoCEV+ZlJGQJ1/CfMdVoTtNQbfR6xL6vQVC1REMpNsLFluZJYJ/OaMM7xIVh+9cagJG5sTQ3ZhdenVGBAYDemaktCKR+5/wQhcaXt6lUxIsbs2Zrbuzr931B8LCBa5SEWyb73alaOliOsYB69YYZNOBxJVc3Kp14wXVc27VmKRJMcayMAcVNHP6TmoBuPCdooNVgWVWa3EL7Tq+gx1bsFg5TPpg2zK7QJbjh1Pp5Zxn29/sHzAmPrhcS80MdLdNyLm/m+cP+2TPJ9hp0/a9ejkJ+2Py3w0ILisnnsspW9YLa5xytCoImeuaS3H9mXPF0XWyVtddPY1aCPrWxstVc/6w+MR3EfO6o+W2Jq3u3EBtu+bUqLP8HgCgIIuGJjQT/eB6NPVTp2QhNSeCc2DN8U3Ss6oZjWwgUNjf4eKrjjYHxZKOepFHmmbTxbYGOSopFNH+cZGKZjtsx+dfaXxGTOSsaPKxtB7XsHdACy1z2KTo6oB1ErnnJUyza/AJAcn7H2lES07M+MulA5AC3BrW+A6+DY3T9N/nD+Kagu+e6Os5G5jyXCt9cdpZ4laY4M1jEU3bakrF3odZJUZbnz34OhMr2wazDY/Emi/+TCTnpO2QVQyvzNXq6j3/ao3zXLpFQakZUq8/ItOVg7ugchoZz9jQk0RagFPPUA5xS3c47vLiPAXEtnU2dlfbPjeN3Zo/PirYAacowuJNPWfO2NeDZynIruTst6SR5pysyBorM3zvLUoe9LPl67yMI9S3BnVxl4qbtfzarsiwFaViQpgDBb3zykrmxw6nHbYvwTAE4iVcrXqSTLL/D6EE/taec+GABoP7F/3ZOrU1kNyWXIps/d8rlSGQqnbs5aSyulkJOGZZzq9DqBWXY01LBCcQxi6USHH8doi+qxg8TqqD4AcrgE6WsrFMnyFxsZMpqWn+IEMXZz7twxJJsiJ8+94B90yr2T+ojowxOow5zSZlJKzZ0v0HX78Gja2PRbvQM1hL62BxQSswxqwdThzy3SLxqhxHnDKvvkYSNF6GB0kHEsktD2/EEnWuh+PGTaP4RGwj6daII3ThtNSCB4+fJQg0n6PqcLG4CL8Z7tMepW2+sQ5O+xfcVr2PGkGqSSh9BzhmGx5mGqz7D7npjPYpgvb+65VT8QkNdmKbTX0ejRjSPxwfg9nToC+N9xwPOOpgy62V4Drj7towHk6Kl1BDh2kkZ51hFvDMl10Y86Nexg8kK9HaZFKXr8mNqcr1o1Q9Pp0aM1/Cz6/qRZFHm0nlfhin1t7GoF5dcdsLQP36m4xs15S53Dkct0UWZS0c7UGQ4rdBBVYDl9M1lhdb2Hs1uBNwOSbJDGncCb+ANtrHE+zjkFzxwanhxhAYkkGXyc54nQ==';
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