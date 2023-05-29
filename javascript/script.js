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
//<ears/>
