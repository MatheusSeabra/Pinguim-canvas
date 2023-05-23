const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//cabeça
ctx.beginPath();
ctx.arc(450, 200, 100, 0, 1 * Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(450, 112, 50, 0, 1 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(450, 120, 60, 0, 1 * Math.PI);
ctx.stroke();


