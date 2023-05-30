const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//<head>
//cabeça
//curveBezier
ctx.beginPath();
ctx.moveTo(110, 50);
ctx.bezierCurveTo(110, 13, 190, 13, 190, 50);
ctx.stroke();

//primeira linha da cabeça
ctx.beginPath();
ctx.moveTo(130, 26);
ctx.bezierCurveTo(125, 70, 175, 70, 170, 26);
ctx.stroke();

//segunda linha da cabeça
ctx.beginPath();
ctx.moveTo(118, 32);
ctx.bezierCurveTo(110, 90, 190, 90, 182, 32);
ctx.stroke();
//</head>

//<ears>
//orelha E
ctx.beginPath();
ctx.moveTo(110, 50);
ctx.quadraticCurveTo(90, 20, 113,40);
ctx.stroke();

//orelha D
ctx.beginPath();
ctx.moveTo(190, 50);
ctx.quadraticCurveTo(210, 20, 187, 40);
ctx.stroke();

//Embaixo da orelha 
ctx.beginPath();
ctx.moveTo(220, 150);
ctx.quadraticCurveTo(180, 90, 190, 50);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(440, 200);
ctx.bezierCurveTo(440, 52, 760, 52, 760, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(520, 104);
ctx.bezierCurveTo(500, 280, 700, 270, 680, 104);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(472, 128);
ctx.bezierCurveTo(440, 360, 760, 360, 728, 128);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 200);
ctx.quadraticCurveTo(360,80, 452, 160);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(760, 200);
ctx.quadraticCurveTo(840, 80, 748, 160);
ctx.stroke();