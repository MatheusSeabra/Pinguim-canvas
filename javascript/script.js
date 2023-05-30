const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//parte de cima da toca
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.bezierCurveTo(95, 140, 206, 2, 300, 150);
ctx.stroke();

//parte de baixo touca
ctx.beginPath();
ctx.moveTo(95, 150);
ctx.bezierCurveTo(95, 150, 190,120, 305, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(95, 180);
ctx.bezierCurveTo(95, 180, 190,160, 305, 180);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(95, 150);
ctx.bezierCurveTo(95, 150, 190,120, 305, 150);
ctx.stroke();

ctx.moveTo(95, 180);
ctx.bezierCurveTo(95, 180, 90, 170, 95, 150);
ctx.stroke();

ctx.moveTo(305, 180);
ctx.bezierCurveTo(305, 180, 310, 180, 305, 150);
ctx.stroke();