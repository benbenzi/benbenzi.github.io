---
layout: post
title: Nintendo Switch主板分层
---


<div id="wrapper">
<canvas id="canvas" width="3000" height="2200"></canvas>
<div id="text">
使用[W]和[S]在主板分层间进行切换；<br />
使用[F]和[G]将主板进行旋转；<br />
双击鼠标可以设置标记点；<br />
感谢KreativDax的扫描；<br />
感谢shinyquagsire23对图片进行校准。
<p id="cusor_state"></p>
<p id="marker_state_1"></p>
<p id="marker_state_2"></p>
<p id="marker_state_3"></p>
<p id="marker_state_4"></p>
<p id="marker_state_5"></p>
<p id="marker_state_6"></p>
<p id="marker_state_7"></p>
<p id="marker_state_8"></p>
<p id="marker_state_9"></p>
<p id="marker_state_10"></p>
<p id="marker_state_11"></p>
<p id="marker_state_12"></p>
<p id="marker_state_13"></p>
<p id="marker_state_14"></p>
<p id="marker_state_15"></p>
<p id="marker_state_16"></p>
</div>
</div>
<div style="display:none;">
	<img id="layer_1" src="layer_1.jpeg">
	<img id="layer_2" src="layer_2.jpeg">
	<img id="layer_3" src="layer_3.jpeg">
	<img id="layer_4" src="layer_4.jpeg">
	<img id="layer_5" src="layer_5.jpeg">
	<img id="layer_6" src="layer_6.jpeg">
	<img id="layer_7" src="layer_7.jpeg">
	<img id="layer_8" src="layer_8.jpeg">
	<img id="layer_9" src="layer_9.jpeg">
	<img id="layer_10" src="layer_10.jpeg">
	<img id="layer_11" src="layer_11.jpeg">
	<img id="layer_12" src="layer_12.jpeg">
</div>

<script>
window.onload = function() {
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const images = [
	document.getElementById('layer_1'),
	document.getElementById('layer_2'),
	document.getElementById('layer_3'),
	document.getElementById('layer_4'),
	document.getElementById('layer_5'),
	document.getElementById('layer_6'),
	document.getElementById('layer_7'),
	document.getElementById('layer_8'),
	document.getElementById('layer_9'),
	document.getElementById('layer_10'),
	document.getElementById('layer_11'),
	document.getElementById('layer_12')
];
const cusor_state = document.getElementById("cusor_state");
const marker_states = [
	document.getElementById("marker_state_1"),
	document.getElementById("marker_state_2"),
	document.getElementById("marker_state_3"),
	document.getElementById("marker_state_4"),
	document.getElementById("marker_state_5"),
	document.getElementById("marker_state_6"),
	document.getElementById("marker_state_7"),
	document.getElementById("marker_state_8"),
	document.getElementById("marker_state_9"),
	document.getElementById("marker_state_10"),
	document.getElementById("marker_state_11"),
	document.getElementById("marker_state_12"),
	document.getElementById("marker_state_13"),
	document.getElementById("marker_state_14"),
	document.getElementById("marker_state_15"),
	document.getElementById("marker_state_16")
];
const marker_colors = [
	"#fe0000",
	"#0bff01",
	"#011efe",
	"#fe00f6",
	"#8c00fc",
	"#fdfe02",
	"#3500ff",
	"#01fe01",
	"#ff8600",
	"#ed0003",
	"#fffe37",
	"#ff011d",
	"#ff9a00",
	"#017eff",
	"#fd0794",
	"#82b453"
];
var current_image = 0;

var pos = { x: (canvas.width - images[current_image].width) / 2, y: (canvas.height - images[current_image].height) / 2 };
var scale = 1.0;
var factor = 0.1;
var max_scale = 15;
var drag_start = { x: 0, y: 0 };
var mouseDown = false;
var flipped_x = true;
var flipped_y = true;
var markers_point = [];
var markers_show = [
	false, false, false, false, false, false, false, false,
	false, false, false, false, false, false, false, false,
];

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.save();
	context.translate(pos.x, pos.y);
	context.scale(scale, scale);

	if (flipped_x)
	{
context.translate(images[current_image].width, 0);
context.scale(-1, 1);
	}

	if (flipped_y)
	{
context.translate(0, images[current_image].height);
context.scale(1, -1);
	}

	context.drawImage(images[current_image], 0, 0);

	for (let i = 0; i < 16; i++) { 
if (markers_show[i])
{
	context.beginPath();
	context.strokeStyle = marker_colors[i];
	context.lineWidth = 3;
	context.moveTo(markers_point[i].x - 20, markers_point[i].y - 20);
	context.lineTo(markers_point[i].x + 20, markers_point[i].y + 20);
	context.moveTo(markers_point[i].x + 20, markers_point[i].y - 20);
	context.lineTo(markers_point[i].x - 20, markers_point[i].y + 20);
	context.stroke();
	context.closePath();
}
	}

	context.restore();
}

window.addEventListener('dblclick', function (e) {
	var point = {
x: ((e.pageX - canvas.offsetLeft) * canvas.width) / canvas.offsetWidth,
y: ((e.pageY - canvas.offsetTop) * canvas.height) / canvas.offsetHeight
	};

	var target = {
x: (point.x - pos.x) / scale,
y: (point.y - pos.y) / scale
	};

	if (flipped_x)
target.x = images[current_image].width - target.x;

	if (flipped_y)
target.y = images[current_image].height - target.y;

	var to_delete_idx = -1;
	for (let i = 0; i < 16; i++) {
if (
	markers_show[i] &&
	target.x > markers_point[i].x - 20 && target.x < markers_point[i].x + 20 &&
	target.y > markers_point[i].y - 20 && target.y < markers_point[i].y + 20
)
{
	to_delete_idx = i;
	break;
}
	}

	if (to_delete_idx != -1)
	{
markers_show[to_delete_idx] = false;
marker_states[to_delete_idx].innerText = "";
draw();
return;
	}

	var empty_idx = -1;
	for (let i = 0; i < 16; i++) {
if (!markers_show[i])
{
	empty_idx = i;
	break;
}
	}

	if (empty_idx != -1)
	{
markers_point[empty_idx] = target;
marker_states[empty_idx].style.color = marker_colors[empty_idx];
marker_states[empty_idx].innerText = "Marker #" + (empty_idx + 1) + ": " + Math.floor(markers_point[empty_idx].x) + "," + Math.floor(markers_point[empty_idx].y);
markers_show[empty_idx] = true;
draw();
	}
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode == 87)
	{
current_image = Math.min(images.length-1, current_image + 1);
draw();
	}
	if (e.keyCode == 83)
	{
current_image = Math.max(0, current_image - 1);
draw();
	}
	if (e.keyCode == 70)
	{
flipped_x = !flipped_x;
draw();
	}
	if (e.keyCode == 71)
	{
flipped_y = !flipped_y;
draw();
	}
});

window.addEventListener("mousedown", function(e) {
	mouseDown = true;
	var drag_point = {
x: ((e.pageX - canvas.offsetLeft) * canvas.width) / canvas.offsetWidth,
y: ((e.pageY - canvas.offsetTop) * canvas.height) / canvas.offsetHeight
	};
	drag_start.x = drag_point.x - pos.x;
	drag_start.y = drag_point.y - pos.y;
});

window.addEventListener("mouseup", function(e) {
	mouseDown = false;
});

window.addEventListener("mousemove", function(e) {
	if (mouseDown) {
var drag_point = {
	x: ((e.pageX - canvas.offsetLeft) * canvas.width) / canvas.offsetWidth,
	y: ((e.pageY - canvas.offsetTop) * canvas.height) / canvas.offsetHeight
};
pos.x = drag_point.x - drag_start.x;
pos.y = drag_point.y - drag_start.y;

if (pos.x < -(images[current_image].width * scale))
	pos.x = -(images[current_image].width * scale);

if (pos.y < -(images[current_image].height * scale))
	pos.y = -(images[current_image].height * scale);

if (pos.x > (canvas.width * scale))
	pos.x = (canvas.width * scale);

if (pos.y > (canvas.height * scale))
	pos.y = (canvas.height * scale);

draw();
	}
	var point = {
x: ((e.pageX - canvas.offsetLeft) * canvas.width) / canvas.offsetWidth,
y: ((e.pageY - canvas.offsetTop) * canvas.height) / canvas.offsetHeight
	};

	var target = {
x: (point.x - pos.x) / scale,
y: (point.y - pos.y) / scale
	};

	if (flipped_x)
target.x = images[current_image].width - target.x;

	if (flipped_y)
target.y = images[current_image].height - target.y;

	cusor_state.innerText = "Cusor: " + Math.floor(target.x) + "," + Math.floor(target.y);
});

document.addEventListener('wheel', function(e) {
	var point = {
x: ((e.pageX - canvas.offsetLeft) * canvas.width) / canvas.offsetWidth,
y: ((e.pageY - canvas.offsetTop) * canvas.height) / canvas.offsetHeight
	};

	var target = {
x: (point.x - pos.x) / scale,
y: (point.y - pos.y) / scale
	};

	var old_scale = scale;
	var delta = e.wheelDelta > 0 ? 1 : (e.wheelDelta < 0 ? -1 : 0);
	scale += delta * factor * scale
	scale = Math.max(0.5, Math.min(max_scale, scale))

	pos.x += (target.x * old_scale) - target.x;
	pos.y += (target.y * old_scale) - target.y;
	pos.x -= (target.x * scale) - target.x;
	pos.y -= (target.y * scale) - target.y;

	draw();
});

draw();
	};
</script>