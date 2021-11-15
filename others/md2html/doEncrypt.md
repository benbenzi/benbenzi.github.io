---
layout: post
title: Markdown转HTML及加密
---

<!-- Page Content -->
<div class="container">
<div class="row">

<div class="col-md-5">
<ul class="nav nav-tabs" role="tablist">
<li role="presentation" class="active">
<a href="#mdInputPanel" aria-controls="mdInputPanel" role="tab" data-toggle="tab">输入 Markdown</a>
</li>
<li role="presentation">
<a href="#cssInputPanel" aria-controls="cssInputPanel" role="tab" data-toggle="tab">自定义 CSS</a>
</li>
</ul>

<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="mdInputPanel">
<textarea id="sourceMarkdown">
# 示例标题
    
在这里输入Markdown文本。
</textarea>
</div><!-- /.tab-pane -->
<div role="tabpanel" class="tab-pane" id="cssInputPanel">
<textarea id="sourceCSS">
    body {
     color: black;
 }
</textarea>
</div><!-- /.tab-pane -->
</div><!-- /.tab-content -->
</div><!-- / source column -->

<div class="col-md-1 verticalButtonList">
<a type="button" class="doConvert btn btn-default" aria-label="Convert markdown to HTML">
<span class="glyphicon glyphicon-chevron-right"></span>
</a>
</div><!-- / button column -->
<form id="encrypt_form">
<div class="col-md-6">
<ul class="nav nav-tabs" role="tablist">
<li role="presentation" class="active">
<a href="#htmlPreviewPane" aria-controls="htmlPreviewPane" role="tab" data-toggle="tab">预览</a>
</li>
<li role="presentation">
<a href="#rawhtml" aria-controls="rawhtml" role="tab" data-toggle="tab">HTML</a>
</li>
</ul>

<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="htmlPreviewPane">
<iframe id="htmlPreviewFrame" src="javascript:;"></iframe>
</div>
<div role="tabpanel" class="tab-pane" id="rawhtml">
<textarea id="unencrypted_html" readonly="readonly"></textarea>
</div>
</div><br>
</div><!-- / dest column -->



<div class="form-group">
<label for="passphrase">密钥</label>
<input type="password" class="form-control" id="passphrase"
    placeholder="请输入密钥（尽量长一点）">
</div>
<!--<div class="form-group">
<label for="unencrypted_html">加密内容</label>
<textarea class="form-control" id="unencrypted_html" placeholder="HTML或String"
                              rows="5"></textarea>
</div> -->
<p>
<a href="#" id="toggle-extra-option">+ 更多设置</a>
</p>
<div id="extra-options" class="hidden">
<div class="form-group">
<label for="title">页面标题</label>
<input type="text" class="form-control" id="title" placeholder="默认'">
</div>
<div class="form-group">
<label for="instructions">显示用户说明</label>
<textarea class="form-control" id="instructions" placeholder="Default: nothing."></textarea>
</div>
</div>

<div class="form-group">
<label class="no-style">
<input type="checkbox" id="embed-crypto" checked>
                                将加密用js嵌入文件
<abbr title="Leave checked to include crypto-js into your file so you can decrypt it offline.
                                Uncheck to load crypto-js from a CDN (some adblockers might think it's a crypto miner).">?</abbr>
</label>
</div>

<button class="btn btn-primary pull-right" type="submit">生成！</button>
</form>
<div class="row">
<div class="col-xs-12">
<h2>加密后的HTML</h2>
<pre id="encrypted_html_display">加密后的字符串</pre>
</div>
</div>
<a href="javascript:history.go(-1);">返回上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://benbenzi.games">返回主页</a>
</div><!-- /.row (actual converter) -->


</div>
<!-- /.container -->

<script src="js/thirdparty.js"></script>
<script src="js/main.js"></script>
<div class="container">
<br>
            



</div>

<script src="kryptojs-3.1.9-1-lib.js"></script>

<script src="https://cdn.ckeditor.com/4.7.0/standard/ckeditor.js"></script>

<script>
    // enable CKEDIRTOR
    CKEDITOR.replace( 'instructions' );

    var htmlToDownload;

    var renderTemplate = function (tpl, data) {
        return tpl.replace(/{(.*?)}/g, function (_, key) {
            return data && data[key] || '';
        });
    };

    /**
     * Fill the password prompt template with data provided.
     * @param data
     */
     var setFileToDownload = function (data) {
        var request = new XMLHttpRequest();
        request.open('GET', 'password_template.html', true);
        request.onload = function() {
            var renderedTmpl = renderTemplate(request.responseText, data);

            var downloadLink = document.querySelector('a.download');
            downloadLink.href = 'data:text/html,' + encodeURIComponent(renderedTmpl);
            downloadLink.removeAttribute('disabled');

            htmlToDownload = renderedTmpl;
        };
        request.send();
    };

    /**
     * Download crypto-js lib to embed it in the generated file, update the file when done.
     * @param data
     */
     var setFileToDownloadWithEmbeddedCrypto = function (data) {
        var request = new XMLHttpRequest();
        request.open('GET', 'kryptojs-3.1.9-1-lib.js', true);
        request.onload = function() {
            data['crypto_tag'] = '<script>' + request.responseText + '</scr' + 'ipt>';
            setFileToDownload(data);
        };
        request.send();
    };

    /**
     * Salt and encrypt a msg with a password.
     * Inspired by https://github.com/adonespitogo
     */
     var keySize = 256;
     var iterations = 1000;
     function encrypt (msg, password) {
        var salt = CryptoJS.lib.WordArray.random(128/8);

        var key = CryptoJS.PBKDF2(password, salt, {
            keySize: keySize/32,
            iterations: iterations
        });

        var iv = CryptoJS.lib.WordArray.random(128/8);

        var encrypted = CryptoJS.AES.encrypt(msg, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        });

        // salt, iv will be hex 32 in length
        // append them to the ciphertext for use  in decryption
        var encryptedMsg = salt.toString()+ iv.toString() + encrypted.toString();
        return encryptedMsg;
    }

    /**
     * Handle form submission.
     */
     document.getElementById('encrypt_form').addEventListener('submit', function (e) {
        e.preventDefault();

        // update instruction textarea value with CKEDITOR content
        // (see https://stackoverflow.com/questions/3147670/ckeditor-update-textarea)
        CKEDITOR.instances['instructions'].updateElement();

        var unencrypted = document.getElementById('unencrypted_html').value;
        var passphrase = document.getElementById('passphrase').value;

        var encrypted = encrypt(unencrypted, passphrase);
        var hmac = CryptoJS.HmacSHA256(encrypted, CryptoJS.SHA256(passphrase).toString()).toString();
        var encryptedMsg = hmac + encrypted;

        var pageTitle = document.getElementById('title').value.trim();
        var instructions = document.getElementById('instructions').value;
        var data = {
            title: pageTitle ? pageTitle : 'Protected Page',
            instructions: instructions ? instructions : '',
            encrypted: encryptedMsg,
            crypto_tag: '<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" integrity="sha384-lp4k1VRKPU9eBnPePjnJ9M2RF3i7PC30gXs70+elCVfgwLwx1tv5+ctxdtwxqZa7" crossorigin="anonymous"></scr' + 'ipt>'
        };

        document.getElementById('encrypted_html_display').textContent = encryptedMsg;

        if (document.getElementById("embed-crypto").checked) {
            setFileToDownloadWithEmbeddedCrypto(data);
        }
        else {
            setFileToDownload(data);
        }

    });

     document.getElementById('toggle-extra-option')
     .addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('extra-options').classList.toggle('hidden');
    });

     document.getElementById('toggle-concept')
     .addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('concept').classList.toggle('hidden');
    });


    /**
     * Browser specific download code.
     */
     document.getElementById('download-link')
     .addEventListener('click', function (e) {

        var isIE = (navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true ); // >= 10
        var isEdge = navigator.userAgent.indexOf("Edge") !== -1;

        // download with MS specific feature
        if (htmlToDownload && (isIE || isEdge)) {
            e.preventDefault();
            var blobObject = new Blob([htmlToDownload]);
            window.navigator.msSaveOrOpenBlob(blobObject, 'encrypted.html');
        }

        return true;
    })
</script>


<link rel="manifest" href="manifest.json">
<link rel="stylesheet" href="css/thirdparty.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="js/modernizr-3.2.0.min.js"></script>
<script>
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

   ga('create', 'UA-88828167-1', 'auto');
   ga('send', 'pageview');
</script>