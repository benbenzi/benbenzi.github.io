var previousRID;
var previousCID;
function CommentDisplay(d) {
if(d.length < 1) { return; }
if(document.getElementById("comment-"+d).style.display == "none") { 
document.getElementById("comment-"+d).style.display = "block"; 
document.getElementById("comment-"+d+"b").style.display = "block"; 
document.getElementById("comment-"+d+"o").setAttribute("src", "img/forum/hide.gif");
document.getElementById("comment-"+d+"s").style.display = "none";
}
else { 
document.getElementById("comment-"+d).style.display = "none"; 
document.getElementById("comment-"+d+"b").style.display = "none";
document.getElementById("comment-"+d+"o").setAttribute("src", "img/forum/show.gif");
document.getElementById("comment-"+d+"s").style.display = "block";
}
}
function ReviewAdd(d) {
if(d.length < 1) { return; }
if(document.getElementById("review-"+d+"a").style.display == "none") { 
document.getElementById("review-"+d+"a").style.display = "block";
document.getElementById("review-"+d+"r").style.display = "none";
if (previousCID != null && previousCID != d) {
document.getElementById("comment-"+previousCID+"a").style.display = "none";
document.getElementById("comment-"+previousCID+"r").style.display = "block";
}
previousRID = d;
}
}
function CommentAdd(d) {
if(d.length < 1) { return; }
if(document.getElementById("comment-"+d+"a").style.display == "none") { 
document.getElementById("comment-"+d+"a").style.display = "block";
document.getElementById("comment-"+d+"r").style.display = "none";
if (previousRID != null && previousRID != d) {
document.getElementById("review-"+previousRID+"a").style.display = "none";
document.getElementById("review-"+previousRID+"r").style.display = "block";
}
if(previousCID != null && previousCID != d) {
document.getElementById("comment-"+previousCID+"a").style.display = "none";
document.getElementById("comment-"+previousCID+"r").style.display = "block";
}
previousCID = d;
}
}
function ReviewSub(d) {
if(d.length < 1) { return; }
if(document.getElementById("review-"+d+"a").style.display == "block") { 
document.getElementById("review-"+d+"a").style.display = "none";
document.getElementById("review-"+d+"r").style.display = "block";
}
}
function CommentSub(d) {
if(d.length < 1) { return; }
if(document.getElementById("comment-"+d+"a").style.display == "block") { 
document.getElementById("comment-"+d+"a").style.display = "none";
document.getElementById("comment-"+d+"r").style.display = "block";
}
}
function ItemClose() {
document.getElementById("messagebox").style.display = "none";
}
function TogglePuzzle(a,id) {
var div1 = document.getElementById(id);
var div2 = document.getElementById("space");
if(div1.style.display == 'none'){
div1.style.display = 'block';
div2.style.display = "none";
a.innerHTML = '隱藏答案';
}
else{
div1.style.display = 'none';
div2.style.display = "block";
a.innerHTML = '顯示答案';
}
}
function killCopy(e) {
return false
}
function reEnable() {
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar) {
document.onmousedown=killCopy
document.onclick=reEnable
}
var message="";
function defeatIE() {
if (document.all) {
(message);
return false;
}
}
function defeatNS(e) {
if (document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {
(message);
return false;
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=defeatNS;
}
else {
document.onmouseup=defeatNS;
document.oncontextmenu=defeatIE;
}
document.oncontextmenu=new Function("return false")