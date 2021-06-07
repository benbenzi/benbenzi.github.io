---
layout: page
title: encrypt
description: >
  Here you should be able to find everything you need to know to accomplish the most common tasks when blogging with Hydejack.
hide_description: true
sitemap: false
---
<script>
"use strict";
let alert = (...params) => console.error(...params);
const hasNativePrefersColorScheme =
window.matchMedia('(prefers-color-scheme)').media !== 'not all';
let theme_value = localStorage.getItem('theme'),
theme_remember_value = localStorage.getItem('theme_remember'),
daily_theme_list = [], dark_theme_list = [];
daily_theme_list.push(document.getElementById('daily-theme'));
dark_theme_list.push(document.getElementById('dark-theme'));
let loadMode = function(mode, skipAnimation = false) {
if (mode !== "daily" && mode !== "dark") return;
if (!skipAnimation) {
document.getElementsByTagName('body')[0].classList.add('global-transition');
}
daily_theme_list.forEach((obj) => {
if (mode === "daily") {
if (obj.hasAttribute('disabled')) {
obj.removeAttribute('disabled');
}
obj.setAttribute('media', 'all');
} else {
obj.setAttribute('disabled', '');
obj.setAttribute('media', obj.getAttribute('data-original-media'));
}
});
dark_theme_list.forEach((obj) => {
if (mode === "daily") {
obj.setAttribute('disabled', '');
obj.setAttribute('media', obj.getAttribute('data-original-media'));
} else {
if (obj.hasAttribute('disabled')) {
obj.removeAttribute('disabled');
}
obj.setAttribute('media', 'all');
}
});
localStorage.setItem('theme', mode);
theme_value = mode;
dispatchEvent(new CustomEvent("themeloadend", {
detail: {mode: mode}
}));
setTimeout(function () {
if (!skipAnimation) {
document.getElementsByTagName('body')[0].classList.remove('global-transition');
}
}, 300);
};
if (hasNativePrefersColorScheme) {
window.matchMedia('(prefers-color-scheme: dark)').addListener(({matches}) => {
console.log(matches);
if (localStorage.getItem('theme_remember') === "false") {
dispatchEvent(new CustomEvent("colorschemechange", {
detail: {colorScheme: (matches ? "dark" : "daily")}
}));
}
});
if (!!theme_remember_value && theme_remember_value === "true") {
loadMode(theme_value, true);
} else {
if ((window.matchMedia('(prefers-color-scheme: light)').matches) ||
(window.matchMedia('(prefers-color-scheme: no-preference)').matches)) {
loadMode('daily', true);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
loadMode('dark', true);
}
}
} else {
if (!!theme_remember_value && !!theme_value && theme_remember_value === "true") {
loadMode(theme_value, true);
} else {
let time = new Date();
if (time.getHours() <= 6 || time.getHours() >= 23){
loadMode("dark", true);
} else {
loadMode("daily", true);
}
}
}
NProgress.configure({ showSpinner: false });
NProgress.start();
const nprogress_interval = setInterval(function() { NProgress.inc(); }, 1000);
</script>

<!-- Navigation -->

<nav class="navbar navbar-default navbar-custom navbar-fixed-top">

<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header page-scroll">
<button type="button" class="navbar-toggle">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>

<a href="javascript:history.back()" style="font-size:28px" class="fa fa-angle-left navbar-brand" aria-label="Back To Previous Page"></a>

<a class="navbar-brand" href="https://soptq.me/" aria-label="Soptlog">Soptlog</a>

<a href="javascript:void(0)" class="fa fa-search navbar-brand search-icon" id="search-ic" aria-label="Search"></a>

</div>

<!-- Collect the nav links, forms, and other content for toggling -->
<div id="huxblog_navbar">
<div class="navbar-collapse">
<ul class="nav navbar-nav navbar-right">
<li>
<a href="https://soptq.me/" aria-label="Home">Home</a>
</li>




<li>
<a href="https://soptq.me/about/" aria-label="About">About</a>
</li>



<li>
<a href="https://soptq.me/archive/" aria-label="Archive">Archive</a>
</li>





















<li>
<a href="https://soptq.me/playground/" aria-label="Playground">Playground</a>
</li>



<li>
<a href="https://soptq.me/portfolio/" aria-label="Portfolio">Portfolio</a>
</li>






























</ul>
</div>
</div>
<!-- /.navbar-collapse -->
</div>
<!-- /.container -->
</nav>
<!-- Search Box -->
<div class="search-box hidden">
  <div class="wrapper">
<div class="search-grid">
  <form class="search-form">
<div id="search-container">
  <input type="text" autocomplete="off" id="search-input" style="caret-color: #0085a1" class="search" placeholder="Quick Search" maxlength="20" onkeypress="return onKeyPress(event)">
</div>
  </form>
  <ul id="results-container" class="results-search">
  <i class="fa fa-5x text-center fa-ellipsis-h" aria-hidden="true"></i>
  </ul>
  <div class="icon-close-container">
<span class="search-icon-close"><i class="fa fa-times" aria-hidden="true"></i></span>
  </div>
</div>
  </div>
</div>

<script>
// Drop Bootstarp low-performance Navbar
// Use customize navbar with high-quality material design animation
// in high-perf jank-free CSS3 implementation
var $body   = document.body;
var $toggle = document.querySelector('.navbar-toggle');
var $navbar = document.querySelector('#huxblog_navbar');
var $collapse = document.querySelector('.navbar-collapse');

var __HuxNav__ = {
close: function(){
$navbar.className = " ";
// wait until animation end.
setTimeout(function(){
// prevent frequently toggle
if($navbar.className.indexOf('in') < 0) {
$collapse.style.height = "0px"
}
},400)
},
open: function(){
$collapse.style.height = "auto"
$navbar.className += " in";
}
}

// Bind Event
$toggle.addEventListener('click', function(e){
if ($navbar.className.indexOf('in') > 0) {
__HuxNav__.close()
}else{
__HuxNav__.open()
}
})

document.addEventListener('click', function(e){
if(e.target == $toggle) return;
if(e.target.className == 'icon-bar') return;
__HuxNav__.close();
})
</script>






<script>
const isReproduce = false;
</script>


<!-- Post Header -->







<style type="text/css">header.intro-header{
position: relative;
}

header.intro-header .wrap{
width: 100%;
height: 100%;
position: absolute;
background: no-repeat center center;
background-color: transparent;
background-attachment: scroll;
-webkit-background-size: cover;
-moz-background-size: cover;
background-size: cover;
-o-background-size: cover;
margin-bottom: 0px;
overflow: hidden;
}


</style>

<header class="intro-header" id="main-header" style="background-color: rgb(4,4,4)">
<div class="wrap vertical-parallax">
<img class="intro-img lazyload" alt="" data-original="/img/post_add_password.jpg">
</div>

<div class="header-mask"></div>

<div class="container">
<div class="row">
<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

<div class="post-heading vertical-parallax">

<div class="tags">

<a class="tag" aria-label="jekyll" href="https://soptq.me/archive/?tag=jekyll" title="jekyll">jekyll</a>

<a class="tag" aria-label="Github" href="https://soptq.me/archive/?tag=Github" title="Github">Github</a>

<a class="tag" aria-label="🔒" href="https://soptq.me/archive/?tag=%F0%9F%94%92" title="🔒">🔒</a>

</div>
<h1>“Github Pages 添加密码保护”</h1>

<h2 class="subheading">“如何对一篇静态博文做密码保护, 查看密码为 <strong>testpassword</strong>”</h2>
<span class="meta">Posted by “Soptq” on January 18, 2019</span>
<br>


</div>
</div>
</div>
</div>
</header>







<link rel="stylesheet" href="https://soptq.me/css/iDisqus.min.css">
<script src="https://soptq.me/js/iDisqus.min.js"></script>

<style>.post-content:not(.staticrypt-form) > p:first-of-type:first-letter {
font-family: 'Noto Serif SC','Lora','Times New Roman',serif;
font-weight: bold;
font-size: 48px;
line-height: 1;
float: left;
padding-right: 7px;
color: #0085a1;
}
</style>

<!-- Post Content -->
<article xmlns:display="http://www.w3.org/1999/xhtml">
<div class="container">
<div class="row">
<div class="
col-lg-1 col-lg-offset-0
visible-lg-block ">
<div class="side-progress hidden">
<div class="progress vertical" onclick="progressBarClicked(event)">
<div role="progressbar" style="height: 100%;" id="progressid" class="progress-bar progress-bar-secondary"></div>
</div>
<p style="font-size: 10px; margin: 0 0 0 0;" id="progress-num">100%</p>
</div>
</div>

<!-- Post Container -->
<div class="
col-lg-8 col-lg-offset-1
col-md-10 col-md-offset-1
post-container">

<!-- Multi-Lingual --><div class="reproduce-block hidden last-modify-block">
<p><strong>警告 Warning：</strong></p>
<p>本文最后更新于<strong class="last-modify"></strong>天前，文章所述情况可能已经有所改变!</p>
<p>This article was last modified <strong class="last-modify"></strong> days ago, contents described in the article may have changed!</p>
</div>
<script>
"use strict";
let date_diff = Math.round((Math.round(new Date().getTime() / 1000) - 1593160205) / 86400);
if (date_diff > 90) {
document.querySelectorAll('.last-modify-block .last-modify')[0].innerHTML = date_diff.toString();
document.querySelectorAll('.last-modify-block .last-modify')[1].innerHTML = date_diff.toString();
document.querySelector('.last-modify-block').classList.remove('hidden');
}
</script><div class="mobile-toc hidden">
<div class="mobile-catalog">
<strong>
<a class="mobile-catalog-toggle" href="#" style="text-decoration:none;" aria-label="Catalog">CATALOG</a>
</strong>
<ul class="mobile-catalog-body">
<li class="h3_nav"><a href="#%E5%BC%95" rel="nofollow" aria-label="引">引</a></li>
<li class="h3_nav"><a href="#%E5%89%8D%E6%9C%9F-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" rel="nofollow" aria-label="前期： 如何实现？">前期： 如何实现？</a></li>
<li class="h4_nav"><a href="#%E5%A0%B5%E5%A1%9E%E5%BC%8F" rel="nofollow" aria-label="堵塞式">堵塞式</a></li>
<li class="h4_nav"><a href="#%E5%85%A8%E6%96%87%E5%8A%A0%E5%AF%86" rel="nofollow" aria-label="全文加密">全文加密</a></li>
<li class="h3_nav"><a href="#%E5%85%A8%E6%96%87%E5%8A%A0%E5%AF%86%E7%9A%84%E5%8E%9F%E7%90%86" rel="nofollow" aria-label="全文加密的原理">全文加密的原理</a></li>
<li class="h3_nav"><a href="#%E5%96%84%E5%90%8E" rel="nofollow" aria-label="善后">善后</a></li>
<li class="h4_nav"><a href="#mathjax" rel="nofollow" aria-label="Mathjax">Mathjax</a></li>
<li class="h4_nav"><a href="#catalog" rel="nofollow" aria-label="Catalog">Catalog</a></li>
</ul>
</div>
</div>
<div class="post-content">
<!-- password protection -->
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
<hr style="visibility: hidden;">

<centerquote>

<div class="copyright-block">
<p><strong>本文作者 Auther：</strong><a href="https://soptq.me/about.html" aria-label="本文作者 Auther">Soptq</a></p>
<p><strong>本文链接 Link：</strong> <a href="index.html" aria-label="本文链接 Link">https://soptq.me/2019/01/18/add-pswd/</a>
<i class="fa fa-qrcode" style="padding-left: 20px; cursor: pointer" aria-hidden="true" onclick="showqr()"></i></p>
<p><strong>版权声明 Copyright：</strong> 本博客所有文章除特别声明外，均采用 <a href="https://soptq.me/go/?target=aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC8=" aria-label="CC BY-NC-SA 4.0" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>
许可协议。转载请注明出处。 Content on this site is licensed under the <a href="https://soptq.me/go/?target=aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC8=" aria-label="CC BY-NC-SA 4.0" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>
license agreement unless otherwise noted. Attribution required.</p>
</div>

<br>
<div class="text-center">
<p>发现存在<strong>错别字</strong>或者<strong>事实错误</strong>？请麻烦您点击
<strong>
<a href="https://soptq.me/go/?target=aHR0cHM6Ly9naXRodWIuY29tL1NvcHRxL1NvcHRsb2dCdWdSZXBvcnQvaXNzdWVz" target="_blank" rel="noopener noreferrer">
<i class="fa fa-link" aria-hidden="true" aria-label="报告错别字"></i>这里
</a>
</strong>
汇报。谢谢您！
</p>
</div>
<br>
</centerquote>
</div>

<br>

<ul class="pager" style="padding: 0">

<li class="previous">
<a rel="prefetch" aria-label="Previous Post" href="https://soptq.me/2019/01/08/import-d3js/" data-toggle="tooltip" data-placement="top" title="“Introducing D3.js”">
Previous<br>
<span>“Introducing D3.js”</span>
</a>
</li>


<li class="next">
<a rel="prefetch" aria-label="Next Post" href="https://soptq.me/2019/02/22/essay/" data-toggle="tooltip" data-placement="top" title="“水文”">
Next<br>
<span>“水文”</span>
</a>
</li>

</ul>

<hr style="visibility: hidden;">


<div id="comment"></div>

</div>

<!-- Side Catalog Container --><div class="
col-lg-2 col-lg-offset-0
visible-lg-block
sidebar-container
catalog-container hidden">
<div class="side-catalog">
<hr class="hidden-sm hidden-xs">
<h5>
<a class="catalog-toggle" href="#" aria-label="Catalog">CATALOG</a>
</h5>
<ul class="catalog-body">
<li class="h3_nav"><a href="#%E5%BC%95" rel="nofollow" aria-label="引">引</a></li>
<li class="h3_nav"><a href="#%E5%89%8D%E6%9C%9F-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" rel="nofollow" aria-label="前期： 如何实现？">前期： 如何实现？</a></li>
<li class="h4_nav"><a href="#%E5%A0%B5%E5%A1%9E%E5%BC%8F" rel="nofollow" aria-label="堵塞式">堵塞式</a></li>
<li class="h4_nav"><a href="#%E5%85%A8%E6%96%87%E5%8A%A0%E5%AF%86" rel="nofollow" aria-label="全文加密">全文加密</a></li>
<li class="h3_nav"><a href="#%E5%85%A8%E6%96%87%E5%8A%A0%E5%AF%86%E7%9A%84%E5%8E%9F%E7%90%86" rel="nofollow" aria-label="全文加密的原理">全文加密的原理</a></li>
<li class="h3_nav"><a href="#%E5%96%84%E5%90%8E" rel="nofollow" aria-label="善后">善后</a></li>
<li class="h4_nav"><a href="#mathjax" rel="nofollow" aria-label="Mathjax">Mathjax</a></li>
<li class="h4_nav"><a href="#catalog" rel="nofollow" aria-label="Catalog">Catalog</a></li>
</ul>
</div>
</div>
<!-- Sidebar Container -->
<div class="
col-lg-8 col-lg-offset-2
col-md-10 col-md-offset-1
sidebar-container">

<!-- Related Post-->

<section>
  <hr>
  <h5>RELATED POSTS</h5>
  <div class="related-section"></div>
</section>


<!-- Featured Tags -->



<section>
<hr>
<h5><a href="https://soptq.me/archive/" aria-label="Featured Tags">FEATURED TAGS</a></h5>
<div class="tags">




<a data-sort="0065" href="https://soptq.me/archive/?tag=%E6%99%AE%E9%80%9A%E3%81%AE%E8%A8%98%E4%BA%8B" title="普通の記事" rel="14" aria-label="">普通の記事</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=remembered+day" title="remembered day" rel="2" aria-label="">remembered day</a>

<a data-sort="0076" href="https://soptq.me/archive/?tag=summary" title="summary" rel="3" aria-label="">summary</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=raspberry" title="raspberry" rel="2" aria-label="">raspberry</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=%E7%94%B7%E9%BB%98%E5%A5%B3%E6%B3%AA" title="男默女泪" rel="2" aria-label="">男默女泪</a>

<a data-sort="0075" href="https://soptq.me/archive/?tag=reproduce" title="reproduce" rel="4" aria-label="">reproduce</a>

<a data-sort="0069" href="https://soptq.me/archive/?tag=leetcode" title="leetcode" rel="10" aria-label="">leetcode</a>

<a data-sort="0068" href="https://soptq.me/archive/?tag=java" title="java" rel="11" aria-label="">java</a>

<a data-sort="0065" href="https://soptq.me/archive/?tag=algorithm" title="algorithm" rel="14" aria-label="">algorithm</a>

<a data-sort="0073" href="https://soptq.me/archive/?tag=C%26C%2B%2B" title="C&amp;C++" rel="6" aria-label="">C&amp;C++</a>

<a data-sort="0073" href="https://soptq.me/archive/?tag=python" title="python" rel="6" aria-label="">python</a>

<a data-sort="0076" href="https://soptq.me/archive/?tag=CV" title="CV" rel="3" aria-label="">CV</a>

<a data-sort="0072" href="https://soptq.me/archive/?tag=jekyll" title="jekyll" rel="7" aria-label="">jekyll</a>

<a data-sort="0076" href="https://soptq.me/archive/?tag=Github" title="Github" rel="3" aria-label="">Github</a>

<a data-sort="0072" href="https://soptq.me/archive/?tag=%F0%9F%94%92" title="🔒" rel="7" aria-label="">🔒</a>

<a data-sort="0076" href="https://soptq.me/archive/?tag=tensorflow" title="tensorflow" rel="3" aria-label="">tensorflow</a>

<a data-sort="0071" href="https://soptq.me/archive/?tag=deep+learning" title="deep learning" rel="8" aria-label="">deep learning</a>

<a data-sort="0075" href="https://soptq.me/archive/?tag=js" title="js" rel="4" aria-label="">js</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=swift" title="swift" rel="2" aria-label="">swift</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=games" title="games" rel="2" aria-label="">games</a>

<a data-sort="0076" href="https://soptq.me/archive/?tag=CVE" title="CVE" rel="3" aria-label="">CVE</a>

<a data-sort="0075" href="https://soptq.me/archive/?tag=CS" title="CS" rel="4" aria-label="">CS</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=%F0%9F%94%A7" title="🔧" rel="2" aria-label="">🔧</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=Unity" title="Unity" rel="2" aria-label="">Unity</a>

<a data-sort="0074" href="https://soptq.me/archive/?tag=math" title="math" rel="5" aria-label="">math</a>

<a data-sort="0073" href="https://soptq.me/archive/?tag=tcs" title="tcs" rel="6" aria-label="">tcs</a>

<a data-sort="0077" href="https://soptq.me/archive/?tag=OS" title="OS" rel="2" aria-label="">OS</a>


</div>
</section>


<!-- Friends Blog -->

<hr>
<h5>FRIENDS</h5>
<ul class="list-inline">
  
  <li><a rel="noopener noreferrer" style="text-decoration: none" href="https://soptq.me/go/?target=aHR0cDovL2FrYW5lcXdxLmNvbS8=" aria-label="AkaneQwQ" target="_blank">AkaneQwQ</a></li>
  
  <li><a rel="noopener noreferrer" style="text-decoration: none" href="https://soptq.me/go/?target=aHR0cHM6Ly93ZWliby5jb20vdS81MDk5NTUwOTI4" aria-label="Tamakoko" target="_blank">Tamakoko</a></li>
  
  <li><a rel="noopener noreferrer" style="text-decoration: none" href="https://soptq.me/go/?target=aHR0cHM6Ly9saWtlbHZpbi5jb20=" aria-label="Kelvin Li" target="_blank">Kelvin Li</a></li>
  
  <li><a rel="noopener noreferrer" style="text-decoration: none" href="https://soptq.me/go/?target=aHR0cHM6Ly9taWlyby5saXZl" aria-label="Umilver" target="_blank">Umilver</a></li>
  
</ul>

</div>

</div>
</div>
</article>


<script>
function initProgressBar() {
"use strict";
let scheduledAnimationFrame = false,
act = 0,
per = 1;
const progressbar = document.getElementById('progressid'),
progress_num = document.getElementById('progress-num');

function updateProgress() {
act = (document.documentElement.scrollTop || document.body.scrollTop) / (document.body.offsetHeight - window.innerHeight);
per = 1 - act;
progressbar.style.height = Math.round(per * 100) + '%';
progress_num.innerText = Math.round(act * 100) + '%';
scheduledAnimationFrame = false;
}

window.addEventListener('scroll', function() {
if (scheduledAnimationFrame){
return;
}
scheduledAnimationFrame = true;
requestAnimationFrame(updateProgress);
}, {passive: true});

window.progressBarClicked = function (event) {
let top, target, parent, offsety;
target = document.getElementsByClassName("progress")[0];
parent = document.getElementsByClassName("side-progress")[0];
top=getY(target);
if (parent.classList.contains('fixed')) {
offsety = event.clientY - top;
}else {
offsety = event.clientY - top+ (document.documentElement.scrollTop || document.body.scrollTop);
}
offsety = (offsety / target.offsetHeight) * (document.body.offsetHeight - window.innerHeight);
scrollToY(offsety, 500, 'easeInOutQuint');
updateProgress();
}
}
</script>


<!-- add support for mermaid -->
<script src="https://cdn.jsdelivr.net/npm/crypto-js@3.1.9-1/crypto-js.min.js"></script>
<!-- password protection -->
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
let payload = "pvNR+IE+rLH6ktPhdBzhFA==|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".split("|"),
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




<script>
var disq = new iDisqus('comment', {
forum: 'soptlog',
api: 'https://api.soptq.me/disqus/api',
site: 'https://soptq.me',
identifier: window.location.href.split('?')[0],
url: window.location.href.split('?')[0],
mode: 1,
timeout: 3000,
init: true,
emojiPreview: true
});
</script>




<!-- async load function -->
<script>
function async(u, c) {
  var d = document, t = 'script',
  o = d.createElement(t),
  s = d.getElementsByTagName(t)[0];
  o.src = u;
  if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
  s.parentNode.insertBefore(o, s);
}
</script>
<!-- anchor-js, Doc:http://bryanbraun.github.io/anchorjs/ -->
<script>
async("//cdn.jsdelivr.net/npm/anchor-js@4.2.0/anchor.min.js",function(){
anchors.options = {
  visible: 'always',
  placement: 'right',
  icon: '#'
};
anchors.add().remove('.intro-header h1').remove('.subheading').remove('.sidebar-container h5');
})
</script>
<style>/* place left on bigger screen */
@media all and (min-width: 800px) {
.anchorjs-link{
position: absolute;
left: -0.75em;
font-size: 1.1em;
margin-top : -0.1em;
}
}
</style>

<script>
function getY(obj){
var parObj=obj;
var top=obj.offsetTop;
while(parObj = parObj.offsetParent){
top+=parObj.offsetTop;
}
return top;
}
function showqr() {
if (localStorage.getItem("theme") === "daily"){
$.fancybox.open('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="242" height="242" shape-rendering="crispEdges"><rect width="242" height="242" x="0" y="0" style="fill:#ffffff"/><rect width="6" height="6" x="10" y="10" style="fill:#000000"/><rect width="6" height="6" x="16" y="10" style="fill:#000000"/><rect width="6" height="6" x="22" y="10" style="fill:#000000"/><rect width="6" height="6" x="28" y="10" style="fill:#000000"/><rect width="6" height="6" x="34" y="10" style="fill:#000000"/><rect width="6" height="6" x="40" y="10" style="fill:#000000"/><rect width="6" height="6" x="46" y="10" style="fill:#000000"/><rect width="6" height="6" x="64" y="10" style="fill:#000000"/><rect width="6" height="6" x="100" y="10" style="fill:#000000"/><rect width="6" height="6" x="106" y="10" style="fill:#000000"/><rect width="6" height="6" x="112" y="10" style="fill:#000000"/><rect width="6" height="6" x="118" y="10" style="fill:#000000"/><rect width="6" height="6" x="124" y="10" style="fill:#000000"/><rect width="6" height="6" x="130" y="10" style="fill:#000000"/><rect width="6" height="6" x="142" y="10" style="fill:#000000"/><rect width="6" height="6" x="166" y="10" style="fill:#000000"/><rect width="6" height="6" x="190" y="10" style="fill:#000000"/><rect width="6" height="6" x="196" y="10" style="fill:#000000"/><rect width="6" height="6" x="202" y="10" style="fill:#000000"/><rect width="6" height="6" x="208" y="10" style="fill:#000000"/><rect width="6" height="6" x="214" y="10" style="fill:#000000"/><rect width="6" height="6" x="220" y="10" style="fill:#000000"/><rect width="6" height="6" x="226" y="10" style="fill:#000000"/><rect width="6" height="6" x="10" y="16" style="fill:#000000"/><rect width="6" height="6" x="46" y="16" style="fill:#000000"/><rect width="6" height="6" x="70" y="16" style="fill:#000000"/><rect width="6" height="6" x="76" y="16" style="fill:#000000"/><rect width="6" height="6" x="88" y="16" style="fill:#000000"/><rect width="6" height="6" x="94" y="16" style="fill:#000000"/><rect width="6" height="6" x="106" y="16" style="fill:#000000"/><rect width="6" height="6" x="112" y="16" style="fill:#000000"/><rect width="6" height="6" x="124" y="16" style="fill:#000000"/><rect width="6" height="6" x="130" y="16" style="fill:#000000"/><rect width="6" height="6" x="136" y="16" style="fill:#000000"/><rect width="6" height="6" x="148" y="16" style="fill:#000000"/><rect width="6" height="6" x="166" y="16" style="fill:#000000"/><rect width="6" height="6" x="190" y="16" style="fill:#000000"/><rect width="6" height="6" x="226" y="16" style="fill:#000000"/><rect width="6" height="6" x="10" y="22" style="fill:#000000"/><rect width="6" height="6" x="22" y="22" style="fill:#000000"/><rect width="6" height="6" x="28" y="22" style="fill:#000000"/><rect width="6" height="6" x="34" y="22" style="fill:#000000"/><rect width="6" height="6" x="46" y="22" style="fill:#000000"/><rect width="6" height="6" x="76" y="22" style="fill:#000000"/><rect width="6" height="6" x="82" y="22" style="fill:#000000"/><rect width="6" height="6" x="94" y="22" style="fill:#000000"/><rect width="6" height="6" x="100" y="22" style="fill:#000000"/><rect width="6" height="6" x="106" y="22" style="fill:#000000"/><rect width="6" height="6" x="112" y="22" style="fill:#000000"/><rect width="6" height="6" x="118" y="22" style="fill:#000000"/><rect width="6" height="6" x="148" y="22" style="fill:#000000"/><rect width="6" height="6" x="160" y="22" style="fill:#000000"/><rect width="6" height="6" x="166" y="22" style="fill:#000000"/><rect width="6" height="6" x="172" y="22" style="fill:#000000"/><rect width="6" height="6" x="178" y="22" style="fill:#000000"/><rect width="6" height="6" x="190" y="22" style="fill:#000000"/><rect width="6" height="6" x="202" y="22" style="fill:#000000"/><rect width="6" height="6" x="208" y="22" style="fill:#000000"/><rect width="6" height="6" x="214" y="22" style="fill:#000000"/><rect width="6" height="6" x="226" y="22" style="fill:#000000"/><rect width="6" height="6" x="10" y="28" style="fill:#000000"/><rect width="6" height="6" x="22" y="28" style="fill:#000000"/><rect width="6" height="6" x="28" y="28" style="fill:#000000"/><rect width="6" height="6" x="34" y="28" style="fill:#000000"/><rect width="6" height="6" x="46" y="28" style="fill:#000000"/><rect width="6" height="6" x="64" y="28" style="fill:#000000"/><rect width="6" height="6" x="70" y="28" style="fill:#000000"/><rect width="6" height="6" x="82" y="28" style="fill:#000000"/><rect width="6" height="6" x="88" y="28" style="fill:#000000"/><rect width="6" height="6" x="100" y="28" style="fill:#000000"/><rect width="6" height="6" x="106" y="28" style="fill:#000000"/><rect width="6" height="6" x="130" y="28" style="fill:#000000"/><rect width="6" height="6" x="154" y="28" style="fill:#000000"/><rect width="6" height="6" x="160" y="28" style="fill:#000000"/><rect width="6" height="6" x="166" y="28" style="fill:#000000"/><rect width="6" height="6" x="172" y="28" style="fill:#000000"/><rect width="6" height="6" x="190" y="28" style="fill:#000000"/><rect width="6" height="6" x="202" y="28" style="fill:#000000"/><rect width="6" height="6" x="208" y="28" style="fill:#000000"/><rect width="6" height="6" x="214" y="28" style="fill:#000000"/><rect width="6" height="6" x="226" y="28" style="fill:#000000"/><rect width="6" height="6" x="10" y="34" style="fill:#000000"/><rect width="6" height="6" x="22" y="34" style="fill:#000000"/><rect width="6" height="6" x="28" y="34" style="fill:#000000"/><rect width="6" height="6" x="34" y="34" style="fill:#000000"/><rect width="6" height="6" x="46" y="34" style="fill:#000000"/><rect width="6" height="6" x="58" y="34" style="fill:#000000"/><rect width="6" height="6" x="64" y="34" style="fill:#000000"/><rect width="6" height="6" x="70" y="34" style="fill:#000000"/><rect width="6" height="6" x="76" y="34" style="fill:#000000"/><rect width="6" height="6" x="82" y="34" style="fill:#000000"/><rect width="6" height="6" x="118" y="34" style="fill:#000000"/><rect width="6" height="6" x="124" y="34" style="fill:#000000"/><rect width="6" height="6" x="130" y="34" style="fill:#000000"/><rect width="6" height="6" x="142" y="34" style="fill:#000000"/><rect width="6" height="6" x="154" y="34" style="fill:#000000"/><rect width="6" height="6" x="166" y="34" style="fill:#000000"/><rect width="6" height="6" x="172" y="34" style="fill:#000000"/><rect width="6" height="6" x="190" y="34" style="fill:#000000"/><rect width="6" height="6" x="202" y="34" style="fill:#000000"/><rect width="6" height="6" x="208" y="34" style="fill:#000000"/><rect width="6" height="6" x="214" y="34" style="fill:#000000"/><rect width="6" height="6" x="226" y="34" style="fill:#000000"/><rect width="6" height="6" x="10" y="40" style="fill:#000000"/><rect width="6" height="6" x="46" y="40" style="fill:#000000"/><rect width="6" height="6" x="64" y="40" style="fill:#000000"/><rect width="6" height="6" x="76" y="40" style="fill:#000000"/><rect width="6" height="6" x="88" y="40" style="fill:#000000"/><rect width="6" height="6" x="106" y="40" style="fill:#000000"/><rect width="6" height="6" x="112" y="40" style="fill:#000000"/><rect width="6" height="6" x="118" y="40" style="fill:#000000"/><rect width="6" height="6" x="124" y="40" style="fill:#000000"/><rect width="6" height="6" x="142" y="40" style="fill:#000000"/><rect width="6" height="6" x="160" y="40" style="fill:#000000"/><rect width="6" height="6" x="190" y="40" style="fill:#000000"/><rect width="6" height="6" x="226" y="40" style="fill:#000000"/><rect width="6" height="6" x="10" y="46" style="fill:#000000"/><rect width="6" height="6" x="16" y="46" style="fill:#000000"/><rect width="6" height="6" x="22" y="46" style="fill:#000000"/><rect width="6" height="6" x="28" y="46" style="fill:#000000"/><rect width="6" height="6" x="34" y="46" style="fill:#000000"/><rect width="6" height="6" x="40" y="46" style="fill:#000000"/><rect width="6" height="6" x="46" y="46" style="fill:#000000"/><rect width="6" height="6" x="58" y="46" style="fill:#000000"/><rect width="6" height="6" x="70" y="46" style="fill:#000000"/><rect width="6" height="6" x="82" y="46" style="fill:#000000"/><rect width="6" height="6" x="94" y="46" style="fill:#000000"/><rect width="6" height="6" x="106" y="46" style="fill:#000000"/><rect width="6" height="6" x="118" y="46" style="fill:#000000"/><rect width="6" height="6" x="130" y="46" style="fill:#000000"/><rect width="6" height="6" x="142" y="46" style="fill:#000000"/><rect width="6" height="6" x="154" y="46" style="fill:#000000"/><rect width="6" height="6" x="166" y="46" style="fill:#000000"/><rect width="6" height="6" x="178" y="46" style="fill:#000000"/><rect width="6" height="6" x="190" y="46" style="fill:#000000"/><rect width="6" height="6" x="196" y="46" style="fill:#000000"/><rect width="6" height="6" x="202" y="46" style="fill:#000000"/><rect width="6" height="6" x="208" y="46" style="fill:#000000"/><rect width="6" height="6" x="214" y="46" style="fill:#000000"/><rect width="6" height="6" x="220" y="46" style="fill:#000000"/><rect width="6" height="6" x="226" y="46" style="fill:#000000"/><rect width="6" height="6" x="58" y="52" style="fill:#000000"/><rect width="6" height="6" x="64" y="52" style="fill:#000000"/><rect width="6" height="6" x="70" y="52" style="fill:#000000"/><rect width="6" height="6" x="82" y="52" style="fill:#000000"/><rect width="6" height="6" x="88" y="52" style="fill:#000000"/><rect width="6" height="6" x="130" y="52" style="fill:#000000"/><rect width="6" height="6" x="136" y="52" style="fill:#000000"/><rect width="6" height="6" x="148" y="52" style="fill:#000000"/><rect width="6" height="6" x="154" y="52" style="fill:#000000"/><rect width="6" height="6" x="172" y="52" style="fill:#000000"/><rect width="6" height="6" x="178" y="52" style="fill:#000000"/><rect width="6" height="6" x="22" y="58" style="fill:#000000"/><rect width="6" height="6" x="28" y="58" style="fill:#000000"/><rect width="6" height="6" x="46" y="58" style="fill:#000000"/><rect width="6" height="6" x="52" y="58" style="fill:#000000"/><rect width="6" height="6" x="58" y="58" style="fill:#000000"/><rect width="6" height="6" x="64" y="58" style="fill:#000000"/><rect width="6" height="6" x="76" y="58" style="fill:#000000"/><rect width="6" height="6" x="82" y="58" style="fill:#000000"/><rect width="6" height="6" x="100" y="58" style="fill:#000000"/><rect width="6" height="6" x="130" y="58" style="fill:#000000"/><rect width="6" height="6" x="136" y="58" style="fill:#000000"/><rect width="6" height="6" x="142" y="58" style="fill:#000000"/><rect width="6" height="6" x="148" y="58" style="fill:#000000"/><rect width="6" height="6" x="160" y="58" style="fill:#000000"/><rect width="6" height="6" x="172" y="58" style="fill:#000000"/><rect width="6" height="6" x="178" y="58" style="fill:#000000"/><rect width="6" height="6" x="184" y="58" style="fill:#000000"/><rect width="6" height="6" x="190" y="58" style="fill:#000000"/><rect width="6" height="6" x="202" y="58" style="fill:#000000"/><rect width="6" height="6" x="10" y="64" style="fill:#000000"/><rect width="6" height="6" x="16" y="64" style="fill:#000000"/><rect width="6" height="6" x="22" y="64" style="fill:#000000"/><rect width="6" height="6" x="34" y="64" style="fill:#000000"/><rect width="6" height="6" x="64" y="64" style="fill:#000000"/><rect width="6" height="6" x="70" y="64" style="fill:#000000"/><rect width="6" height="6" x="76" y="64" style="fill:#000000"/><rect width="6" height="6" x="88" y="64" style="fill:#000000"/><rect width="6" height="6" x="100" y="64" style="fill:#000000"/><rect width="6" height="6" x="112" y="64" style="fill:#000000"/><rect width="6" height="6" x="118" y="64" style="fill:#000000"/><rect width="6" height="6" x="124" y="64" style="fill:#000000"/><rect width="6" height="6" x="136" y="64" style="fill:#000000"/><rect width="6" height="6" x="160" y="64" style="fill:#000000"/><rect width="6" height="6" x="166" y="64" style="fill:#000000"/><rect width="6" height="6" x="172" y="64" style="fill:#000000"/><rect width="6" height="6" x="178" y="64" style="fill:#000000"/><rect width="6" height="6" x="190" y="64" style="fill:#000000"/><rect width="6" height="6" x="208" y="64" style="fill:#000000"/><rect width="6" height="6" x="220" y="64" style="fill:#000000"/><rect width="6" height="6" x="22" y="70" style="fill:#000000"/><rect width="6" height="6" x="34" y="70" style="fill:#000000"/><rect width="6" height="6" x="46" y="70" style="fill:#000000"/><rect width="6" height="6" x="52" y="70" style="fill:#000000"/><rect width="6" height="6" x="64" y="70" style="fill:#000000"/><rect width="6" height="6" x="76" y="70" style="fill:#000000"/><rect width="6" height="6" x="82" y="70" style="fill:#000000"/><rect width="6" height="6" x="100" y="70" style="fill:#000000"/><rect width="6" height="6" x="106" y="70" style="fill:#000000"/><rect width="6" height="6" x="112" y="70" style="fill:#000000"/><rect width="6" height="6" x="124" y="70" style="fill:#000000"/><rect width="6" height="6" x="130" y="70" style="fill:#000000"/><rect width="6" height="6" x="136" y="70" style="fill:#000000"/><rect width="6" height="6" x="142" y="70" style="fill:#000000"/><rect width="6" height="6" x="148" y="70" style="fill:#000000"/><rect width="6" height="6" x="154" y="70" style="fill:#000000"/><rect width="6" height="6" x="160" y="70" style="fill:#000000"/><rect width="6" height="6" x="172" y="70" style="fill:#000000"/><rect width="6" height="6" x="184" y="70" style="fill:#000000"/><rect width="6" height="6" x="196" y="70" style="fill:#000000"/><rect width="6" height="6" x="208" y="70" style="fill:#000000"/><rect width="6" height="6" x="214" y="70" style="fill:#000000"/><rect width="6" height="6" x="220" y="70" style="fill:#000000"/><rect width="6" height="6" x="10" y="76" style="fill:#000000"/><rect width="6" height="6" x="22" y="76" style="fill:#000000"/><rect width="6" height="6" x="82" y="76" style="fill:#000000"/><rect width="6" height="6" x="88" y="76" style="fill:#000000"/><rect width="6" height="6" x="124" y="76" style="fill:#000000"/><rect width="6" height="6" x="136" y="76" style="fill:#000000"/><rect width="6" height="6" x="142" y="76" style="fill:#000000"/><rect width="6" height="6" x="148" y="76" style="fill:#000000"/><rect width="6" height="6" x="160" y="76" style="fill:#000000"/><rect width="6" height="6" x="166" y="76" style="fill:#000000"/><rect width="6" height="6" x="172" y="76" style="fill:#000000"/><rect width="6" height="6" x="202" y="76" style="fill:#000000"/><rect width="6" height="6" x="208" y="76" style="fill:#000000"/><rect width="6" height="6" x="214" y="76" style="fill:#000000"/><rect width="6" height="6" x="220" y="76" style="fill:#000000"/><rect width="6" height="6" x="226" y="76" style="fill:#000000"/><rect width="6" height="6" x="10" y="82" style="fill:#000000"/><rect width="6" height="6" x="16" y="82" style="fill:#000000"/><rect width="6" height="6" x="40" y="82" style="fill:#000000"/><rect width="6" height="6" x="46" y="82" style="fill:#000000"/><rect width="6" height="6" x="52" y="82" style="fill:#000000"/><rect width="6" height="6" x="58" y="82" style="fill:#000000"/><rect width="6" height="6" x="64" y="82" style="fill:#000000"/><rect width="6" height="6" x="70" y="82" style="fill:#000000"/><rect width="6" height="6" x="112" y="82" style="fill:#000000"/><rect width="6" height="6" x="118" y="82" style="fill:#000000"/><rect width="6" height="6" x="124" y="82" style="fill:#000000"/><rect width="6" height="6" x="130" y="82" style="fill:#000000"/><rect width="6" height="6" x="136" y="82" style="fill:#000000"/><rect width="6" height="6" x="142" y="82" style="fill:#000000"/><rect width="6" height="6" x="160" y="82" style="fill:#000000"/><rect width="6" height="6" x="166" y="82" style="fill:#000000"/><rect width="6" height="6" x="184" y="82" style="fill:#000000"/><rect width="6" height="6" x="190" y="82" style="fill:#000000"/><rect width="6" height="6" x="196" y="82" style="fill:#000000"/><rect width="6" height="6" x="202" y="82" style="fill:#000000"/><rect width="6" height="6" x="214" y="82" style="fill:#000000"/><rect width="6" height="6" x="220" y="82" style="fill:#000000"/><rect width="6" height="6" x="10" y="88" style="fill:#000000"/><rect width="6" height="6" x="28" y="88" style="fill:#000000"/><rect width="6" height="6" x="40" y="88" style="fill:#000000"/><rect width="6" height="6" x="52" y="88" style="fill:#000000"/><rect width="6" height="6" x="58" y="88" style="fill:#000000"/><rect width="6" height="6" x="64" y="88" style="fill:#000000"/><rect width="6" height="6" x="70" y="88" style="fill:#000000"/><rect width="6" height="6" x="76" y="88" style="fill:#000000"/><rect width="6" height="6" x="88" y="88" style="fill:#000000"/><rect width="6" height="6" x="100" y="88" style="fill:#000000"/><rect width="6" height="6" x="112" y="88" style="fill:#000000"/><rect width="6" height="6" x="118" y="88" style="fill:#000000"/><rect width="6" height="6" x="130" y="88" style="fill:#000000"/><rect width="6" height="6" x="136" y="88" style="fill:#000000"/><rect width="6" height="6" x="148" y="88" style="fill:#000000"/><rect width="6" height="6" x="172" y="88" style="fill:#000000"/><rect width="6" height="6" x="178" y="88" style="fill:#000000"/><rect width="6" height="6" x="190" y="88" style="fill:#000000"/><rect width="6" height="6" x="202" y="88" style="fill:#000000"/><rect width="6" height="6" x="214" y="88" style="fill:#000000"/><rect width="6" height="6" x="226" y="88" style="fill:#000000"/><rect width="6" height="6" x="10" y="94" style="fill:#000000"/><rect width="6" height="6" x="46" y="94" style="fill:#000000"/><rect width="6" height="6" x="70" y="94" style="fill:#000000"/><rect width="6" height="6" x="76" y="94" style="fill:#000000"/><rect width="6" height="6" x="88" y="94" style="fill:#000000"/><rect width="6" height="6" x="94" y="94" style="fill:#000000"/><rect width="6" height="6" x="118" y="94" style="fill:#000000"/><rect width="6" height="6" x="136" y="94" style="fill:#000000"/><rect width="6" height="6" x="142" y="94" style="fill:#000000"/><rect width="6" height="6" x="154" y="94" style="fill:#000000"/><rect width="6" height="6" x="160" y="94" style="fill:#000000"/><rect width="6" height="6" x="184" y="94" style="fill:#000000"/><rect width="6" height="6" x="190" y="94" style="fill:#000000"/><rect width="6" height="6" x="202" y="94" style="fill:#000000"/><rect width="6" height="6" x="214" y="94" style="fill:#000000"/><rect width="6" height="6" x="220" y="94" style="fill:#000000"/><rect width="6" height="6" x="16" y="100" style="fill:#000000"/><rect width="6" height="6" x="22" y="100" style="fill:#000000"/><rect width="6" height="6" x="28" y="100" style="fill:#000000"/><rect width="6" height="6" x="40" y="100" style="fill:#000000"/><rect width="6" height="6" x="52" y="100" style="fill:#000000"/><rect width="6" height="6" x="58" y="100" style="fill:#000000"/><rect width="6" height="6" x="82" y="100" style="fill:#000000"/><rect width="6" height="6" x="94" y="100" style="fill:#000000"/><rect width="6" height="6" x="100" y="100" style="fill:#000000"/><rect width="6" height="6" x="118" y="100" style="fill:#000000"/><rect width="6" height="6" x="130" y="100" style="fill:#000000"/><rect width="6" height="6" x="136" y="100" style="fill:#000000"/><rect width="6" height="6" x="142" y="100" style="fill:#000000"/><rect width="6" height="6" x="154" y="100" style="fill:#000000"/><rect width="6" height="6" x="178" y="100" style="fill:#000000"/><rect width="6" height="6" x="184" y="100" style="fill:#000000"/><rect width="6" height="6" x="190" y="100" style="fill:#000000"/><rect width="6" height="6" x="196" y="100" style="fill:#000000"/><rect width="6" height="6" x="202" y="100" style="fill:#000000"/><rect width="6" height="6" x="226" y="100" style="fill:#000000"/><rect width="6" height="6" x="22" y="106" style="fill:#000000"/><rect width="6" height="6" x="40" y="106" style="fill:#000000"/><rect width="6" height="6" x="46" y="106" style="fill:#000000"/><rect width="6" height="6" x="58" y="106" style="fill:#000000"/><rect width="6" height="6" x="70" y="106" style="fill:#000000"/><rect width="6" height="6" x="76" y="106" style="fill:#000000"/><rect width="6" height="6" x="82" y="106" style="fill:#000000"/><rect width="6" height="6" x="88" y="106" style="fill:#000000"/><rect width="6" height="6" x="118" y="106" style="fill:#000000"/><rect width="6" height="6" x="136" y="106" style="fill:#000000"/><rect width="6" height="6" x="148" y="106" style="fill:#000000"/><rect width="6" height="6" x="160" y="106" style="fill:#000000"/><rect width="6" height="6" x="166" y="106" style="fill:#000000"/><rect width="6" height="6" x="172" y="106" style="fill:#000000"/><rect width="6" height="6" x="178" y="106" style="fill:#000000"/><rect width="6" height="6" x="208" y="106" style="fill:#000000"/><rect width="6" height="6" x="214" y="106" style="fill:#000000"/><rect width="6" height="6" x="220" y="106" style="fill:#000000"/><rect width="6" height="6" x="10" y="112" style="fill:#000000"/><rect width="6" height="6" x="28" y="112" style="fill:#000000"/><rect width="6" height="6" x="52" y="112" style="fill:#000000"/><rect width="6" height="6" x="70" y="112" style="fill:#000000"/><rect width="6" height="6" x="94" y="112" style="fill:#000000"/><rect width="6" height="6" x="100" y="112" style="fill:#000000"/><rect width="6" height="6" x="106" y="112" style="fill:#000000"/><rect width="6" height="6" x="112" y="112" style="fill:#000000"/><rect width="6" height="6" x="130" y="112" style="fill:#000000"/><rect width="6" height="6" x="148" y="112" style="fill:#000000"/><rect width="6" height="6" x="160" y="112" style="fill:#000000"/><rect width="6" height="6" x="166" y="112" style="fill:#000000"/><rect width="6" height="6" x="172" y="112" style="fill:#000000"/><rect width="6" height="6" x="178" y="112" style="fill:#000000"/><rect width="6" height="6" x="190" y="112" style="fill:#000000"/><rect width="6" height="6" x="208" y="112" style="fill:#000000"/><rect width="6" height="6" x="214" y="112" style="fill:#000000"/><rect width="6" height="6" x="226" y="112" style="fill:#000000"/><rect width="6" height="6" x="10" y="118" style="fill:#000000"/><rect width="6" height="6" x="16" y="118" style="fill:#000000"/><rect width="6" height="6" x="22" y="118" style="fill:#000000"/><rect width="6" height="6" x="28" y="118" style="fill:#000000"/><rect width="6" height="6" x="34" y="118" style="fill:#000000"/><rect width="6" height="6" x="40" y="118" style="fill:#000000"/><rect width="6" height="6" x="46" y="118" style="fill:#000000"/><rect width="6" height="6" x="52" y="118" style="fill:#000000"/><rect width="6" height="6" x="64" y="118" style="fill:#000000"/><rect width="6" height="6" x="82" y="118" style="fill:#000000"/><rect width="6" height="6" x="106" y="118" style="fill:#000000"/><rect width="6" height="6" x="118" y="118" style="fill:#000000"/><rect width="6" height="6" x="124" y="118" style="fill:#000000"/><rect width="6" height="6" x="148" y="118" style="fill:#000000"/><rect width="6" height="6" x="166" y="118" style="fill:#000000"/><rect width="6" height="6" x="172" y="118" style="fill:#000000"/><rect width="6" height="6" x="178" y="118" style="fill:#000000"/><rect width="6" height="6" x="190" y="118" style="fill:#000000"/><rect width="6" height="6" x="202" y="118" style="fill:#000000"/><rect width="6" height="6" x="208" y="118" style="fill:#000000"/><rect width="6" height="6" x="220" y="118" style="fill:#000000"/><rect width="6" height="6" x="226" y="118" style="fill:#000000"/><rect width="6" height="6" x="10" y="124" style="fill:#000000"/><rect width="6" height="6" x="16" y="124" style="fill:#000000"/><rect width="6" height="6" x="22" y="124" style="fill:#000000"/><rect width="6" height="6" x="34" y="124" style="fill:#000000"/><rect width="6" height="6" x="40" y="124" style="fill:#000000"/><rect width="6" height="6" x="58" y="124" style="fill:#000000"/><rect width="6" height="6" x="70" y="124" style="fill:#000000"/><rect width="6" height="6" x="88" y="124" style="fill:#000000"/><rect width="6" height="6" x="94" y="124" style="fill:#000000"/><rect width="6" height="6" x="100" y="124" style="fill:#000000"/><rect width="6" height="6" x="118" y="124" style="fill:#000000"/><rect width="6" height="6" x="124" y="124" style="fill:#000000"/><rect width="6" height="6" x="136" y="124" style="fill:#000000"/><rect width="6" height="6" x="148" y="124" style="fill:#000000"/><rect width="6" height="6" x="154" y="124" style="fill:#000000"/><rect width="6" height="6" x="166" y="124" style="fill:#000000"/><rect width="6" height="6" x="172" y="124" style="fill:#000000"/><rect width="6" height="6" x="178" y="124" style="fill:#000000"/><rect width="6" height="6" x="196" y="124" style="fill:#000000"/><rect width="6" height="6" x="208" y="124" style="fill:#000000"/><rect width="6" height="6" x="16" y="130" style="fill:#000000"/><rect width="6" height="6" x="28" y="130" style="fill:#000000"/><rect width="6" height="6" x="34" y="130" style="fill:#000000"/><rect width="6" height="6" x="40" y="130" style="fill:#000000"/><rect width="6" height="6" x="46" y="130" style="fill:#000000"/><rect width="6" height="6" x="58" y="130" style="fill:#000000"/><rect width="6" height="6" x="64" y="130" style="fill:#000000"/><rect width="6" height="6" x="82" y="130" style="fill:#000000"/><rect width="6" height="6" x="94" y="130" style="fill:#000000"/><rect width="6" height="6" x="112" y="130" style="fill:#000000"/><rect width="6" height="6" x="142" y="130" style="fill:#000000"/><rect width="6" height="6" x="154" y="130" style="fill:#000000"/><rect width="6" height="6" x="166" y="130" style="fill:#000000"/><rect width="6" height="6" x="172" y="130" style="fill:#000000"/><rect width="6" height="6" x="178" y="130" style="fill:#000000"/><rect width="6" height="6" x="202" y="130" style="fill:#000000"/><rect width="6" height="6" x="208" y="130" style="fill:#000000"/><rect width="6" height="6" x="220" y="130" style="fill:#000000"/><rect width="6" height="6" x="10" y="136" style="fill:#000000"/><rect width="6" height="6" x="16" y="136" style="fill:#000000"/><rect width="6" height="6" x="22" y="136" style="fill:#000000"/><rect width="6" height="6" x="28" y="136" style="fill:#000000"/><rect width="6" height="6" x="52" y="136" style="fill:#000000"/><rect width="6" height="6" x="64" y="136" style="fill:#000000"/><rect width="6" height="6" x="70" y="136" style="fill:#000000"/><rect width="6" height="6" x="82" y="136" style="fill:#000000"/><rect width="6" height="6" x="88" y="136" style="fill:#000000"/><rect width="6" height="6" x="106" y="136" style="fill:#000000"/><rect width="6" height="6" x="118" y="136" style="fill:#000000"/><rect width="6" height="6" x="124" y="136" style="fill:#000000"/><rect width="6" height="6" x="154" y="136" style="fill:#000000"/><rect width="6" height="6" x="160" y="136" style="fill:#000000"/><rect width="6" height="6" x="184" y="136" style="fill:#000000"/><rect width="6" height="6" x="196" y="136" style="fill:#000000"/><rect width="6" height="6" x="208" y="136" style="fill:#000000"/><rect width="6" height="6" x="220" y="136" style="fill:#000000"/><rect width="6" height="6" x="16" y="142" style="fill:#000000"/><rect width="6" height="6" x="34" y="142" style="fill:#000000"/><rect width="6" height="6" x="46" y="142" style="fill:#000000"/><rect width="6" height="6" x="52" y="142" style="fill:#000000"/><rect width="6" height="6" x="58" y="142" style="fill:#000000"/><rect width="6" height="6" x="76" y="142" style="fill:#000000"/><rect width="6" height="6" x="100" y="142" style="fill:#000000"/><rect width="6" height="6" x="106" y="142" style="fill:#000000"/><rect width="6" height="6" x="118" y="142" style="fill:#000000"/><rect width="6" height="6" x="136" y="142" style="fill:#000000"/><rect width="6" height="6" x="142" y="142" style="fill:#000000"/><rect width="6" height="6" x="160" y="142" style="fill:#000000"/><rect width="6" height="6" x="190" y="142" style="fill:#000000"/><rect width="6" height="6" x="202" y="142" style="fill:#000000"/><rect width="6" height="6" x="16" y="148" style="fill:#000000"/><rect width="6" height="6" x="34" y="148" style="fill:#000000"/><rect width="6" height="6" x="40" y="148" style="fill:#000000"/><rect width="6" height="6" x="52" y="148" style="fill:#000000"/><rect width="6" height="6" x="58" y="148" style="fill:#000000"/><rect width="6" height="6" x="106" y="148" style="fill:#000000"/><rect width="6" height="6" x="118" y="148" style="fill:#000000"/><rect width="6" height="6" x="124" y="148" style="fill:#000000"/><rect width="6" height="6" x="136" y="148" style="fill:#000000"/><rect width="6" height="6" x="172" y="148" style="fill:#000000"/><rect width="6" height="6" x="178" y="148" style="fill:#000000"/><rect width="6" height="6" x="190" y="148" style="fill:#000000"/><rect width="6" height="6" x="214" y="148" style="fill:#000000"/><rect width="6" height="6" x="22" y="154" style="fill:#000000"/><rect width="6" height="6" x="34" y="154" style="fill:#000000"/><rect width="6" height="6" x="46" y="154" style="fill:#000000"/><rect width="6" height="6" x="70" y="154" style="fill:#000000"/><rect width="6" height="6" x="76" y="154" style="fill:#000000"/><rect width="6" height="6" x="82" y="154" style="fill:#000000"/><rect width="6" height="6" x="94" y="154" style="fill:#000000"/><rect width="6" height="6" x="118" y="154" style="fill:#000000"/><rect width="6" height="6" x="124" y="154" style="fill:#000000"/><rect width="6" height="6" x="130" y="154" style="fill:#000000"/><rect width="6" height="6" x="136" y="154" style="fill:#000000"/><rect width="6" height="6" x="154" y="154" style="fill:#000000"/><rect width="6" height="6" x="166" y="154" style="fill:#000000"/><rect width="6" height="6" x="178" y="154" style="fill:#000000"/><rect width="6" height="6" x="184" y="154" style="fill:#000000"/><rect width="6" height="6" x="202" y="154" style="fill:#000000"/><rect width="6" height="6" x="214" y="154" style="fill:#000000"/><rect width="6" height="6" x="226" y="154" style="fill:#000000"/><rect width="6" height="6" x="34" y="160" style="fill:#000000"/><rect width="6" height="6" x="58" y="160" style="fill:#000000"/><rect width="6" height="6" x="64" y="160" style="fill:#000000"/><rect width="6" height="6" x="70" y="160" style="fill:#000000"/><rect width="6" height="6" x="88" y="160" style="fill:#000000"/><rect width="6" height="6" x="94" y="160" style="fill:#000000"/><rect width="6" height="6" x="112" y="160" style="fill:#000000"/><rect width="6" height="6" x="142" y="160" style="fill:#000000"/><rect width="6" height="6" x="148" y="160" style="fill:#000000"/><rect width="6" height="6" x="154" y="160" style="fill:#000000"/><rect width="6" height="6" x="166" y="160" style="fill:#000000"/><rect width="6" height="6" x="184" y="160" style="fill:#000000"/><rect width="6" height="6" x="202" y="160" style="fill:#000000"/><rect width="6" height="6" x="208" y="160" style="fill:#000000"/><rect width="6" height="6" x="220" y="160" style="fill:#000000"/><rect width="6" height="6" x="226" y="160" style="fill:#000000"/><rect width="6" height="6" x="16" y="166" style="fill:#000000"/><rect width="6" height="6" x="40" y="166" style="fill:#000000"/><rect width="6" height="6" x="46" y="166" style="fill:#000000"/><rect width="6" height="6" x="70" y="166" style="fill:#000000"/><rect width="6" height="6" x="76" y="166" style="fill:#000000"/><rect width="6" height="6" x="82" y="166" style="fill:#000000"/><rect width="6" height="6" x="88" y="166" style="fill:#000000"/><rect width="6" height="6" x="94" y="166" style="fill:#000000"/><rect width="6" height="6" x="106" y="166" style="fill:#000000"/><rect width="6" height="6" x="136" y="166" style="fill:#000000"/><rect width="6" height="6" x="148" y="166" style="fill:#000000"/><rect width="6" height="6" x="196" y="166" style="fill:#000000"/><rect width="6" height="6" x="208" y="166" style="fill:#000000"/><rect width="6" height="6" x="10" y="172" style="fill:#000000"/><rect width="6" height="6" x="22" y="172" style="fill:#000000"/><rect width="6" height="6" x="40" y="172" style="fill:#000000"/><rect width="6" height="6" x="52" y="172" style="fill:#000000"/><rect width="6" height="6" x="70" y="172" style="fill:#000000"/><rect width="6" height="6" x="76" y="172" style="fill:#000000"/><rect width="6" height="6" x="82" y="172" style="fill:#000000"/><rect width="6" height="6" x="88" y="172" style="fill:#000000"/><rect width="6" height="6" x="94" y="172" style="fill:#000000"/><rect width="6" height="6" x="112" y="172" style="fill:#000000"/><rect width="6" height="6" x="148" y="172" style="fill:#000000"/><rect width="6" height="6" x="166" y="172" style="fill:#000000"/><rect width="6" height="6" x="172" y="172" style="fill:#000000"/><rect width="6" height="6" x="184" y="172" style="fill:#000000"/><rect width="6" height="6" x="196" y="172" style="fill:#000000"/><rect width="6" height="6" x="220" y="172" style="fill:#000000"/><rect width="6" height="6" x="226" y="172" style="fill:#000000"/><rect width="6" height="6" x="22" y="178" style="fill:#000000"/><rect width="6" height="6" x="46" y="178" style="fill:#000000"/><rect width="6" height="6" x="88" y="178" style="fill:#000000"/><rect width="6" height="6" x="100" y="178" style="fill:#000000"/><rect width="6" height="6" x="112" y="178" style="fill:#000000"/><rect width="6" height="6" x="130" y="178" style="fill:#000000"/><rect width="6" height="6" x="136" y="178" style="fill:#000000"/><rect width="6" height="6" x="142" y="178" style="fill:#000000"/><rect width="6" height="6" x="154" y="178" style="fill:#000000"/><rect width="6" height="6" x="160" y="178" style="fill:#000000"/><rect width="6" height="6" x="178" y="178" style="fill:#000000"/><rect width="6" height="6" x="184" y="178" style="fill:#000000"/><rect width="6" height="6" x="190" y="178" style="fill:#000000"/><rect width="6" height="6" x="196" y="178" style="fill:#000000"/><rect width="6" height="6" x="202" y="178" style="fill:#000000"/><rect width="6" height="6" x="214" y="178" style="fill:#000000"/><rect width="6" height="6" x="220" y="178" style="fill:#000000"/><rect width="6" height="6" x="226" y="178" style="fill:#000000"/><rect width="6" height="6" x="58" y="184" style="fill:#000000"/><rect width="6" height="6" x="70" y="184" style="fill:#000000"/><rect width="6" height="6" x="76" y="184" style="fill:#000000"/><rect width="6" height="6" x="82" y="184" style="fill:#000000"/><rect width="6" height="6" x="88" y="184" style="fill:#000000"/><rect width="6" height="6" x="94" y="184" style="fill:#000000"/><rect width="6" height="6" x="124" y="184" style="fill:#000000"/><rect width="6" height="6" x="148" y="184" style="fill:#000000"/><rect width="6" height="6" x="154" y="184" style="fill:#000000"/><rect width="6" height="6" x="160" y="184" style="fill:#000000"/><rect width="6" height="6" x="178" y="184" style="fill:#000000"/><rect width="6" height="6" x="202" y="184" style="fill:#000000"/><rect width="6" height="6" x="208" y="184" style="fill:#000000"/><rect width="6" height="6" x="214" y="184" style="fill:#000000"/><rect width="6" height="6" x="220" y="184" style="fill:#000000"/><rect width="6" height="6" x="226" y="184" style="fill:#000000"/><rect width="6" height="6" x="10" y="190" style="fill:#000000"/><rect width="6" height="6" x="16" y="190" style="fill:#000000"/><rect width="6" height="6" x="22" y="190" style="fill:#000000"/><rect width="6" height="6" x="28" y="190" style="fill:#000000"/><rect width="6" height="6" x="34" y="190" style="fill:#000000"/><rect width="6" height="6" x="40" y="190" style="fill:#000000"/><rect width="6" height="6" x="46" y="190" style="fill:#000000"/><rect width="6" height="6" x="58" y="190" style="fill:#000000"/><rect width="6" height="6" x="70" y="190" style="fill:#000000"/><rect width="6" height="6" x="76" y="190" style="fill:#000000"/><rect width="6" height="6" x="112" y="190" style="fill:#000000"/><rect width="6" height="6" x="118" y="190" style="fill:#000000"/><rect width="6" height="6" x="142" y="190" style="fill:#000000"/><rect width="6" height="6" x="178" y="190" style="fill:#000000"/><rect width="6" height="6" x="190" y="190" style="fill:#000000"/><rect width="6" height="6" x="202" y="190" style="fill:#000000"/><rect width="6" height="6" x="208" y="190" style="fill:#000000"/><rect width="6" height="6" x="220" y="190" style="fill:#000000"/><rect width="6" height="6" x="226" y="190" style="fill:#000000"/><rect width="6" height="6" x="10" y="196" style="fill:#000000"/><rect width="6" height="6" x="46" y="196" style="fill:#000000"/><rect width="6" height="6" x="76" y="196" style="fill:#000000"/><rect width="6" height="6" x="88" y="196" style="fill:#000000"/><rect width="6" height="6" x="94" y="196" style="fill:#000000"/><rect width="6" height="6" x="100" y="196" style="fill:#000000"/><rect width="6" height="6" x="106" y="196" style="fill:#000000"/><rect width="6" height="6" x="112" y="196" style="fill:#000000"/><rect width="6" height="6" x="118" y="196" style="fill:#000000"/><rect width="6" height="6" x="124" y="196" style="fill:#000000"/><rect width="6" height="6" x="130" y="196" style="fill:#000000"/><rect width="6" height="6" x="142" y="196" style="fill:#000000"/><rect width="6" height="6" x="148" y="196" style="fill:#000000"/><rect width="6" height="6" x="154" y="196" style="fill:#000000"/><rect width="6" height="6" x="178" y="196" style="fill:#000000"/><rect width="6" height="6" x="202" y="196" style="fill:#000000"/><rect width="6" height="6" x="208" y="196" style="fill:#000000"/><rect width="6" height="6" x="226" y="196" style="fill:#000000"/><rect width="6" height="6" x="10" y="202" style="fill:#000000"/><rect width="6" height="6" x="22" y="202" style="fill:#000000"/><rect width="6" height="6" x="28" y="202" style="fill:#000000"/><rect width="6" height="6" x="34" y="202" style="fill:#000000"/><rect width="6" height="6" x="46" y="202" style="fill:#000000"/><rect width="6" height="6" x="64" y="202" style="fill:#000000"/><rect width="6" height="6" x="70" y="202" style="fill:#000000"/><rect width="6" height="6" x="76" y="202" style="fill:#000000"/><rect width="6" height="6" x="88" y="202" style="fill:#000000"/><rect width="6" height="6" x="94" y="202" style="fill:#000000"/><rect width="6" height="6" x="100" y="202" style="fill:#000000"/><rect width="6" height="6" x="106" y="202" style="fill:#000000"/><rect width="6" height="6" x="112" y="202" style="fill:#000000"/><rect width="6" height="6" x="130" y="202" style="fill:#000000"/><rect width="6" height="6" x="142" y="202" style="fill:#000000"/><rect width="6" height="6" x="148" y="202" style="fill:#000000"/><rect width="6" height="6" x="154" y="202" style="fill:#000000"/><rect width="6" height="6" x="178" y="202" style="fill:#000000"/><rect width="6" height="6" x="184" y="202" style="fill:#000000"/><rect width="6" height="6" x="190" y="202" style="fill:#000000"/><rect width="6" height="6" x="196" y="202" style="fill:#000000"/><rect width="6" height="6" x="202" y="202" style="fill:#000000"/><rect width="6" height="6" x="208" y="202" style="fill:#000000"/><rect width="6" height="6" x="220" y="202" style="fill:#000000"/><rect width="6" height="6" x="226" y="202" style="fill:#000000"/><rect width="6" height="6" x="10" y="208" style="fill:#000000"/><rect width="6" height="6" x="22" y="208" style="fill:#000000"/><rect width="6" height="6" x="28" y="208" style="fill:#000000"/><rect width="6" height="6" x="34" y="208" style="fill:#000000"/><rect width="6" height="6" x="46" y="208" style="fill:#000000"/><rect width="6" height="6" x="58" y="208" style="fill:#000000"/><rect width="6" height="6" x="64" y="208" style="fill:#000000"/><rect width="6" height="6" x="70" y="208" style="fill:#000000"/><rect width="6" height="6" x="82" y="208" style="fill:#000000"/><rect width="6" height="6" x="88" y="208" style="fill:#000000"/><rect width="6" height="6" x="112" y="208" style="fill:#000000"/><rect width="6" height="6" x="130" y="208" style="fill:#000000"/><rect width="6" height="6" x="142" y="208" style="fill:#000000"/><rect width="6" height="6" x="154" y="208" style="fill:#000000"/><rect width="6" height="6" x="166" y="208" style="fill:#000000"/><rect width="6" height="6" x="172" y="208" style="fill:#000000"/><rect width="6" height="6" x="190" y="208" style="fill:#000000"/><rect width="6" height="6" x="202" y="208" style="fill:#000000"/><rect width="6" height="6" x="208" y="208" style="fill:#000000"/><rect width="6" height="6" x="10" y="214" style="fill:#000000"/><rect width="6" height="6" x="22" y="214" style="fill:#000000"/><rect width="6" height="6" x="28" y="214" style="fill:#000000"/><rect width="6" height="6" x="34" y="214" style="fill:#000000"/><rect width="6" height="6" x="46" y="214" style="fill:#000000"/><rect width="6" height="6" x="58" y="214" style="fill:#000000"/><rect width="6" height="6" x="76" y="214" style="fill:#000000"/><rect width="6" height="6" x="82" y="214" style="fill:#000000"/><rect width="6" height="6" x="88" y="214" style="fill:#000000"/><rect width="6" height="6" x="112" y="214" style="fill:#000000"/><rect width="6" height="6" x="118" y="214" style="fill:#000000"/><rect width="6" height="6" x="124" y="214" style="fill:#000000"/><rect width="6" height="6" x="136" y="214" style="fill:#000000"/><rect width="6" height="6" x="142" y="214" style="fill:#000000"/><rect width="6" height="6" x="148" y="214" style="fill:#000000"/><rect width="6" height="6" x="154" y="214" style="fill:#000000"/><rect width="6" height="6" x="178" y="214" style="fill:#000000"/><rect width="6" height="6" x="190" y="214" style="fill:#000000"/><rect width="6" height="6" x="202" y="214" style="fill:#000000"/><rect width="6" height="6" x="208" y="214" style="fill:#000000"/><rect width="6" height="6" x="220" y="214" style="fill:#000000"/><rect width="6" height="6" x="10" y="220" style="fill:#000000"/><rect width="6" height="6" x="46" y="220" style="fill:#000000"/><rect width="6" height="6" x="70" y="220" style="fill:#000000"/><rect width="6" height="6" x="82" y="220" style="fill:#000000"/><rect width="6" height="6" x="88" y="220" style="fill:#000000"/><rect width="6" height="6" x="100" y="220" style="fill:#000000"/><rect width="6" height="6" x="118" y="220" style="fill:#000000"/><rect width="6" height="6" x="130" y="220" style="fill:#000000"/><rect width="6" height="6" x="142" y="220" style="fill:#000000"/><rect width="6" height="6" x="160" y="220" style="fill:#000000"/><rect width="6" height="6" x="184" y="220" style="fill:#000000"/><rect width="6" height="6" x="214" y="220" style="fill:#000000"/><rect width="6" height="6" x="10" y="226" style="fill:#000000"/><rect width="6" height="6" x="16" y="226" style="fill:#000000"/><rect width="6" height="6" x="22" y="226" style="fill:#000000"/><rect width="6" height="6" x="28" y="226" style="fill:#000000"/><rect width="6" height="6" x="34" y="226" style="fill:#000000"/><rect width="6" height="6" x="40" y="226" style="fill:#000000"/><rect width="6" height="6" x="46" y="226" style="fill:#000000"/><rect width="6" height="6" x="70" y="226" style="fill:#000000"/><rect width="6" height="6" x="82" y="226" style="fill:#000000"/><rect width="6" height="6" x="100" y="226" style="fill:#000000"/><rect width="6" height="6" x="112" y="226" style="fill:#000000"/><rect width="6" height="6" x="130" y="226" style="fill:#000000"/><rect width="6" height="6" x="142" y="226" style="fill:#000000"/><rect width="6" height="6" x="154" y="226" style="fill:#000000"/><rect width="6" height="6" x="160" y="226" style="fill:#000000"/><rect width="6" height="6" x="172" y="226" style="fill:#000000"/><rect width="6" height="6" x="184" y="226" style="fill:#000000"/><rect width="6" height="6" x="190" y="226" style="fill:#000000"/><rect width="6" height="6" x="208" y="226" style="fill:#000000"/><rect width="6" height="6" x="214" y="226" style="fill:#000000"/><rect width="6" height="6" x="220" y="226" style="fill:#000000"/><rect width="6" height="6" x="226" y="226" style="fill:#000000"/></svg>');
} else {
$.fancybox.open('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="242" height="242" shape-rendering="crispEdges"><rect width="242" height="242" x="0" y="0" style="fill:#282b2e"/><rect width="6" height="6" x="10" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="10" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="16" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="22" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="28" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="34" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="40" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="46" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="52" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="58" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="64" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="70" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="76" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="82" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="88" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="94" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="100" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="106" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="112" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="118" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="124" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="130" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="136" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="142" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="148" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="154" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="160" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="166" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="52" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="172" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="178" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="184" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="190" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="196" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="94" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="106" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="196" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="202" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="64" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="166" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="208" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="58" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="76" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="124" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="136" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="148" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="178" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="202" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="214" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="88" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="118" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="220" style="fill:#d0cec8"/><rect width="6" height="6" x="10" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="16" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="22" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="28" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="34" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="40" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="46" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="70" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="82" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="100" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="112" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="130" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="142" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="154" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="160" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="172" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="184" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="190" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="208" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="214" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="220" y="226" style="fill:#d0cec8"/><rect width="6" height="6" x="226" y="226" style="fill:#d0cec8"/></svg>');
}
}
</script>




<!-- Footer -->
<footer><div class="visible-sm visible-xs short-about" style="position: absolute; left: calc(50% - 50px); top: -50px;">
<div class="avatar" style="background-color: rgb(208,164,164)">
<a href="https://soptq.me/about/" aria-label="About Me"><img alt="" style="width: 100%; height: 100%; border-radius: 50%" class="lazyload" data-original="/img/avatar.jpg"></a>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 footer-flex">

<div class="theme-container">
<p>Dark Mode</p>
<div class="theme-toggle">
<div class="line"></div>
<div class="circle">
<div class="rays"></div>
</div>
<div class="shadow"></div>
</div>
<div style="width: 100%; display: flex; justify-content: center; align-items: center">
<input type="checkbox" id="check" name="check" value="">
<label for="check">
<span><!-- This span is needed to create the "checkbox" element --></span>Remember
</label>
</div>
</div>

<div class="cp-container">
<!-- SNS Link -->



<ul class="list-inline text-center">


  
  <li>
<a aria-label="RSS" href="https://soptq.me/feed.xml">
  <span class="fa-stack fa-lg">
<i class="fa fa-circle fa-stack-2x"></i>
<i class="fa fa-rss fa-stack-1x fa-inverse"></i>
  </span>
</a>
  </li>
  
  
  
  <li>
<a aria-label="Zhihu" target="_blank" href="https://soptq.me/go/?target=aHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9zb3B0cQ==" rel="noopener noreferrer">
  <span class="fa-stack fa-lg">
<i class="fa fa-circle fa-stack-2x"></i>
<i class="fa  fa-stack-1x fa-inverse">知</i>
  </span>
</a>
  </li>
  
  
  
<li>
  <a aria-label="Bilibili" target="_blank" href="https://soptq.me/go/?target=aHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vMTM5NDI1OTYvIy8=" rel="noopener noreferrer">
<span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa  fa-stack-1x fa-inverse">哔</i>
</span>
  </a>
</li>
  
  
  
  <li>
<a aria-label="Github" target="_blank" href="https://soptq.me/go/?target=aHR0cHM6Ly9naXRodWIuY29tL1NvcHRx" rel="noopener noreferrer">
  <span class="fa-stack fa-lg">
<i class="fa fa-circle fa-stack-2x"></i>
<i class="fa fa-github fa-stack-1x fa-inverse"></i>
  </span>
</a>
  </li>
  
  
  <li>
<a aria-label="LinkedIn" target="_blank" href="https://soptq.me/go/?target=aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL29saXZlci1zb3B0cS1hMDE2NTcxNzI=" rel="noopener noreferrer">
  <span class="fa-stack fa-lg">
<i class="fa fa-circle fa-stack-2x"></i>
<i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
  </span>
</a>
  </li>
  
</ul>
<p class="copyright text-muted" style="line-height: 1.8">
Copyright © 2018 - 2021 Soptlog.
<br>
All rights reserved

<br>
<a rel="noopener noreferrer" style="text-decoration: none;" href="https://soptq.me/go/?target=aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0Lw==" aria-label="JS Provider" target="_blank">
<img class="lazyload" alt="Jsdelivr" style="border-width:0; margin-left: 10px; height: 30px; border-radius: 5px" data-original="/img/jsdelivr.svg">
</a>
<a rel="noopener noreferrer" style="text-decoration: none;" href="https://soptq.me/go/?target=aHR0cHM6Ly93d3cuY2xvdWRmbGFyZS5jb20v" aria-label="DNS Provider" target="_blank">
<img class="lazyload" alt="CloudFlare" style="border-width:0; margin-left: 10px; height: 30px; border-radius: 5px" data-original="/img/cf-logo-h.svg">
</a>
<a rel="noopener noreferrer" style="text-decoration: none;" href="https://soptq.me/go/?target=aHR0cHM6Ly9hbmFseXRpY3MuZ29vZ2xlLmNvbS9hbmFseXRpY3Mvd2ViLw==" aria-label="Google Analytics" target="_blank">
<img class="lazyload" alt="Google Analytics" style="border-width:0; margin-left: 10px; height: 30px; border-radius: 5px" data-original="/img/google.svg">
</a>
<a rel="noopener noreferrer" style="text-decoration: none;" href="https://soptq.me/go/?target=aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC8=" aria-label="License" target="_blank">
<img class="lazyload" alt="知识共享许可协议" style="border-width:0; margin-left: 10px; padding: 5px; height: 30px; border-radius: 5px" data-original="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png">
</a>
<br>
Powered by Jekyll
<br>
<a target="_blank" rel="noopener noreferrer" href="https://soptq.me/go/?target=aHR0cHM6Ly91cHRpbWUuc29wdHEubWU=" aria-label="Status">Status</a>
| <a target="_blank" rel="noopener noreferrer" href="https://soptq.me/go/?target=aHR0cHM6Ly9zZXJ2ZXIuc29wdHEubWUvc29wdGRyaXZl" aria-label="Files">Files</a>
| <a target="_blank" rel="noopener noreferrer" href="https://soptq.me/go/?target=aHR0cHM6Ly9zZXJ2ZXIuc29wdHEubWUvYXJpYQ==" aria-label="Aria">Aria</a>

<br>
<style>@keyframes beatHeart{0%{transform:scale(1)}25%{transform:scale(1.1)}40%{transform:scale(1)}100%{transform:scale(1)}}.cp-container .fa-heart:hover{animation:.8s infinite beatHeart;cursor: pointer}</style>
Made with <i class="fa fa-heart throb" style="color:#d43f57;padding:0 5px"></i> by <a rel="noopener noreferrer" href="https://soptq.me/go/?target=aHR0cHM6Ly9naXRodWIuY29tL1NvcHRx" target="_blank" style="text-decoration: none;font-weight: bold">Soptq</a>
</p>

<div id="gh-copyright">
<p class="copyright text-muted" style="line-height: 1.8">
Proudly hosted by
<a rel="noopener noreferrer" href="https://soptq.me/go/?target=aHR0cHM6Ly96ZWl0LmNv" aria-label="ZEIT" style="margin-left: 10px" target="_blank">
<img class="lazyload" data-original="/img/zeit.svg" width="100" height="21" alt="ZEIT">
</a>
</p>
</div>

</div>
</div>
</div>
</div>
</footer>

<!-- jQuery -->
<script src="https://soptq.me/js/jquery.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="https://soptq.me/js/bootstrap.min.js"></script>
<!-- Custom Theme JavaScript -->
<script src="https://soptq.me/js/hux-blog.min.js"></script>
<script>var createSnackbar=function(){var previous=null;return function(config){var message=config.message,message_cn=config.message_cn,actionText=config.actionText,actionText_cn=config.actionText_cn,action=config.action,duration=config.duration,mode=config.mode;previous&&previous.dismiss(),message_cn&&"zh-cn"===(navigator.language||navigator.userLanguage).toLowerCase()&&(message=message_cn,actionText=actionText_cn);var snackbar=document.createElement("div");snackbar.className="paper-snackbar","error"===mode&&snackbar.classList.add("snackbar-error"),"warning"===mode&&snackbar.classList.add("snackbar-warning"),"success"===mode&&snackbar.classList.add("snackbar-suc"),snackbar.dismiss=function(){this.style.opacity=0};var text=document.createTextNode(message);if(snackbar.appendChild(text),actionText){action||(action=snackbar.dismiss.bind(snackbar));var actionButton=document.createElement("button");actionButton.className="rkmd-btn btn-flat ripple-effect",actionButton.innerHTML=actionText,actionButton.addEventListener("click",action),snackbar.appendChild(actionButton)}setTimeout(function(){previous===this&&previous.dismiss()}.bind(snackbar),duration||5e3),snackbar.addEventListener("transitionend",function(event,elapsed){"opacity"===event.propertyName&&0==this.style.opacity&&(this.parentElement.removeChild(this),previous===this&&(previous=null))}.bind(snackbar)),previous=snackbar,document.body.appendChild(snackbar),getComputedStyle(snackbar).bottom,snackbar.style.bottom="0px",snackbar.style.opacity=1}}();</script>
<!-- Service Worker -->

<script>function handleRegistration(registration){console.log("Service Worker Registered. ",registration),registration.onupdatefound=e=>{const installingWorker=registration.installing;installingWorker.onstatechange=e=>{"installed"===installingWorker.state&&(navigator.serviceWorker.controller?console.log("SW is updated"):(console.log("A Visit without previous SW"),createSnackbar({message:"Ready For Offline Use.",message_cn:"页面已可以在离线时使用",actionText:"OK",actionText_cn:"明白",duration:6e3})))}}}navigator.serviceWorker&&(navigator.serviceWorker.register("/sw.js").then(registration=>handleRegistration(registration)).catch(error=>{console.log("ServiceWorker registration failed: ",error)}),navigator.serviceWorker.onmessage=e=>{console.log("SW: SW Broadcasting:",event),"UPDATE_FOUND"==e.data.command&&setTimeout((function(){switch(navigator.language||navigator.userLanguage){case"zh-CN":createSnackbar({message:"内容已更新",actionText:"刷新",action:function(e){location.reload()}});break;default:createSnackbar({message:"Content Updated.",actionText:"refresh",action:function(e){location.reload()}})}}),3e3)});</script>


<!--Assume Fancybox will only be used in post page-->
<link rel="stylesheet" href="https://soptq.me/css/jquery.fancybox.min.css" media="none" onload="if(media!='all')media='all'">
<script async type="text/javascript" src="https://soptq.me/js/jquery.fancybox.min.js"></script>

<!-- async load function -->
<script>
function showSpoiler(obj){
obj.classList.toggle('show');
obj.classList.toggle('noselect');
}

function async(u, c) {
var d = document, t = 'script',
o = d.createElement(t),
s = d.getElementsByTagName(t)[0];
o.src = u;
o.async = true;
if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
s.parentNode.insertBefore(o, s);
}

function asyncs(us, c) {
let l = 0;
let m = () => {
l++;
if (l >= us.length) {
c.call(this, arguments)
}
};
for (let u of us) {
async(u, m);
}
}
</script><script>
"use strict";$('.theme-container #check').on('change', () => {
localStorage.setItem('autoremember', 'false');
if (document.querySelector('.theme-container #check').checked) {
localStorage.setItem('theme_remember', 'true');
} else {
localStorage.setItem('theme_remember', 'false');
}
});
$('.theme-toggle').on('click',() => {
if (theme_value === "dark"){
loadMode("daily");
setTimeout(function () {
createSnackbar({
message: 'Light Mode Activated Manually.',
message_cn: '手动启动日间模式',
actionText:"ok",
duration: 1000
});
}, 500);
} else {
loadMode("dark");
setTimeout(function () {
createSnackbar({
message: 'Dark Mode Activated Manually.',
message_cn: '手动启动夜间模式',
actionText:"ok",
duration: 1000
});
}, 500);
}
if (localStorage.getItem('autoremember') !== "false") {
if (!document.querySelector('.theme-container #check').checked) {
$('.theme-container #check').click();
}
}

if (typeof(disq) !== "undefined" && disq.stat.current == "disqus") {
disq = new iDisqus('comment', {
forum: 'soptlog',
api: 'https://api.soptq.me/disqus/api',
site: 'https://soptq.me',
mode: 1,
timeout: 3000,
init: true,
emojiPreview: true
});
}

});if (hasNativePrefersColorScheme) {
window.addEventListener('colorschemechange', (e) => {
loadMode(e.detail.colorScheme);
});
}window.addEventListener('themeloadend', (e) => {
if (e.detail.mode === "daily") {
if ($('.theme-container').hasClass('clicked')) {
$('.theme-container').removeClass('clicked');
}
} else {
if (!$('.theme-container').hasClass('clicked')) {
$('.theme-container').addClass('clicked');
}
}
});
if (theme_value === "dark"){
$('.theme-container').toggleClass('clicked');
if (sessionStorage.getItem('disautonoti') !== 'true') {
createSnackbar({
message: 'Dark Mode Activated Automatically.',
message_cn: '已根据系统设置自动切换为夜间模式',
actionText:"Turn Off",
actionText_cn:"切换日间模式",
duration: 3000,
action: function (e) {
$('.theme-toggle').click();
}
});
sessionStorage.setItem('disautonoti', 'true');
}
}
if (!theme_remember_value) {
localStorage.setItem('theme_remember', 'false');
} else {
document.querySelector('.theme-container #check').checked = theme_remember_value === "true";
}</script>


<!-- Google Analytics -->

<script>
"use strict";
// dynamic User by Hux
let _gaId = 'UA-113503573-1';
let _gaDomain = 'auto';

// Originial
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', _gaId, _gaDomain);
ga('send', 'pageview');
</script>


<!-- Side Catalog -->

<script type="text/javascript">

// toggle side catalog
$(".catalog-toggle").click((function(e){
e.preventDefault();
$('.side-catalog').toggleClass("fold");
}));

$(".mobile-catalog-toggle").click((function(e){
e.preventDefault();
$('.mobile-catalog').toggleClass("fold");
}));

/*
 * Doc: https://github.com/davist11/jQuery-One-Page-Nav
 * Fork by Hux to support padding
 */
async("/js/jquery.nav.min.js", function () {
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
});
</script>



<script>
function onKeyPress(e) {
var keyCode = null;
if(e.which)
keyCode = e.which;
else if(e.keyCode)
keyCode = e.keyCode;
if(keyCode == 13) {
if (document.getElementById('search-input').value.length !== 0){
location.href="/search/?q=" + escape(document.getElementById('search-input').value);
}
return false;
}
return true;
}

if ((navigator.language || navigator.userLanguage).toLowerCase() === "zh-cn") {
document.getElementById('search-input').placeholder = "快速搜索";
}

async('/js/simple-jekyll-search.min.js', function () {
if (window.location.href.indexOf('search/?q') <= 0){
SimpleJekyllSearch({
searchInput: document.getElementById('search-input'),
resultsContainer: document.getElementById('results-container'),
json: '/search_lite.json',
searchResultTemplate: '<li><a href="{url}" style="display:block;width: 100%;padding-left:10px; padding-right:10px;" aria-label="{title}"><i class="fa fa-angle-double-right fa-border" aria-hidden="true"></i>{rt}</a></li>',
noResultsText: '',
fuzzy: false
});
}
})
</script>





<script>function display_views(viewerElements,json){for(let i=0;i<viewerElements.length;++i)viewerElements[i].innerText=json[viewerElements[i].getAttribute("data-title")]}function counter_update(return_views=!1){let base_url="https://api.soptq.me/counter/getAllViews.php";return_views&&(base_url+="?return=1");let viewerElements=document.getElementsByClassName("post_counter");$.ajax({type:"GET",url:base_url,success:data=>{let json_data=JSON.parse(data);return_views&&0!==document.getElementsByClassName("post_counter").length&&200===json_data.code&&display_views(viewerElements,json_data)}})}</script>
<script>counter_update();</script><script>
function getCookie(cname){for(var name=cname+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){var c=ca[i].trim();if(0===c.indexOf(name))return c.substring(name.length,c.length)}}function updateViews(post_title){if(void 0===getCookie(post_title)){let expireTime=new Date((new Date).getTime()+3e5).toUTCString();document.cookie=post_title+"=1;expires="+expireTime,$.ajax({type:"GET",url:"https://api.soptq.me/counter/updateViews.php?t="+post_title+"&id=0"})}}
updateViews('/2019/01/18/add-pswd/');
</script>

<script>
"use strict";
function animateCSS(node, animationName, callback) {
node.classList.add('animated', animationName);
function handleAnimationEnd() {
node.classList.remove('animated', animationName);
node.removeEventListener('animationend', handleAnimationEnd);
if (typeof callback === 'function') callback()
}
node.addEventListener('animationend', handleAnimationEnd)
}
function b2tClick(obj) {
scrollToY(0, 500, 'easeInOutQuint');
animateCSS(obj.children[0], 'fadeOutUp', function() {
animateCSS(obj.children[0], 'fadeInUp');
});
}
</script>
<div class="scroll-to-top-btn" onclick="b2tClick(this)" data-anim="false">
<i class="fa fa-arrow-up" style="margin-top: 12px;animation-duration: 250ms;"></i>
</div>



<script>
"use strict";
(async function() {
$("a").each(function () {
if ($(this)[0].getAttribute('rel') === 'ar') {
if ((navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/) == null
|| parseInt((navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) < 12) {
$(this)[0].parentNode.innerHTML = '<a aria-label="Zoom In" data-fancybox="gallery" href="' +
$(this)[0].childNodes[1].getAttribute('data-original') + '">' +
$(this)[0].innerHTML + '</a>'
}
}
})
})()
const isIE="undefined"!=typeof document&&document.documentMode,defaultConfig={rootMargin:"0px",threshold:0,load(element){if("picture"===element.nodeName.toLowerCase()){const img=document.createElement("img");isIE&&element.getAttribute("data-iesrc")&&(img.src=element.getAttribute("data-iesrc")),element.getAttribute("data-alt")&&(img.alt=element.getAttribute("data-alt")),element.append(img)}if("video"===element.nodeName.toLowerCase()&&!element.getAttribute("data-original")&&element.children){const childs=element.children;let childSrc;for(let i=0;i<=childs.length-1;i++)childSrc=childs[i].getAttribute("data-original"),childSrc&&(childs[i].src=childSrc);element.load()}element.getAttribute("data-poster")&&(element.poster=element.getAttribute("data-poster")),element.getAttribute("data-original")&&(element.src=element.getAttribute("data-original")),element.getAttribute("data-srcset")&&element.setAttribute("srcset",element.getAttribute("data-srcset"));let backgroundImageDelimiter=",";if(element.getAttribute("data-background-delimiter")&&(backgroundImageDelimiter=element.getAttribute("data-background-delimiter")),element.getAttribute("data-background-image"))element.style.backgroundImage=`url('${element.getAttribute("data-background-image").split(backgroundImageDelimiter).join("'),url('")}')`;else if(element.getAttribute("data-background-image-set")){const imageSetLinks=element.getAttribute("data-background-image-set").split(backgroundImageDelimiter);let firstUrlLink=imageSetLinks[0].substr(0,imageSetLinks[0].indexOf(" "))||imageSetLinks[0];firstUrlLink=-1===firstUrlLink.indexOf("url(")?`url(${firstUrlLink})`:firstUrlLink,1===imageSetLinks.length?element.style.backgroundImage=firstUrlLink:element.setAttribute("style",(element.getAttribute("style")||"")+`background-image: ${firstUrlLink}; background-image: -webkit-image-set(${imageSetLinks}); background-image: image-set(${imageSetLinks})`)}element.getAttribute("data-toggle-class")?element.classList.toggle(element.getAttribute("data-toggle-class")):element.classList.add("loading"),element.onload=function(){this.classList.add("loaded")}},loaded(){}};function markAsLoaded(element){element.setAttribute("data-loaded",!0)}const isLoaded=element=>"true"===element.getAttribute("data-loaded"),onIntersection=(load,loaded)=>(entries,observer)=>{entries.forEach(entry=>{(entry.intersectionRatio>0||entry.isIntersecting)&&(observer.unobserve(entry.target),isLoaded(entry.target)||(load(entry.target),markAsLoaded(entry.target),loaded(entry.target)))})},getElements=(selector,root=document)=>selector instanceof Element?[selector]:selector instanceof NodeList?selector:root.querySelectorAll(selector);function lozad(selector=".lozad",options={}){const{root:root,rootMargin:rootMargin,threshold:threshold,load:load,loaded:loaded}=Object.assign({},defaultConfig,options);let observer;return"undefined"!=typeof window&&window.IntersectionObserver&&(observer=new IntersectionObserver(onIntersection(load,loaded),{root:root,rootMargin:rootMargin,threshold:threshold})),{observe(){const elements=getElements(selector,root);for(let i=0;i<elements.length;i++)isLoaded(elements[i])||(observer?observer.observe(elements[i]):(load(elements[i]),markAsLoaded(elements[i]),loaded(elements[i])))},triggerLoad(element){isLoaded(element)||(load(element),markAsLoaded(element),loaded(element))},observer:observer}}const observer=lozad(".lazyload",{});observer.observe();
clearInterval(nprogress_interval);
NProgress.done();
</script>