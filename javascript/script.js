const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//<touca>
//parte de cima da toca
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.bezierCurveTo(95, 140, 206, 2, 300, 150);
ctx.stroke();

//parte de baixo touca
//linha superior
ctx.beginPath();
ctx.moveTo(95, 150);
ctx.bezierCurveTo(95, 150, 190,120, 305, 150);
ctx.stroke();

//linha inferior
ctx.beginPath();
ctx.moveTo(95, 180);
ctx.bezierCurveTo(95, 180, 190,160, 305, 180);
ctx.stroke();

//linha E
ctx.beginPath();
ctx.moveTo(95, 180);
ctx.bezierCurveTo(95, 180, 90, 170, 95, 150);
ctx.stroke();

//linha D
ctx.beginPath();
ctx.moveTo(305, 180);
ctx.bezierCurveTo(305, 180, 310, 180, 305, 150);
ctx.stroke();
//</touca>

//<dentro da touca>
//linha 1
ctx.beginPath();
ctx.moveTo(115, 175);
ctx.bezierCurveTo(115, 175, 110, 173, 120, 145);

//linha 2
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 174);
ctx.bezierCurveTo(140, 174, 130, 173, 145, 140);
ctx.stroke();

//linha 3
ctx.stroke();
ctx.beginPath();
ctx.moveTo(165, 172);
ctx.bezierCurveTo(165, 173, 155, 173, 170, 138);
ctx.stroke();

//linha 4
ctx.stroke();
ctx.beginPath();
ctx.moveTo(215, 172);
ctx.bezierCurveTo(215, 173, 225, 173, 215, 138);
ctx.stroke();

//linha 5
ctx.stroke();
ctx.beginPath();
ctx.moveTo(250, 172);
ctx.bezierCurveTo(250, 173, 265, 173, 255, 138);
ctx.stroke();

//linha 6
ctx.stroke();
ctx.beginPath();
ctx.moveTo(280, 175);
ctx.bezierCurveTo(280, 180, 295, 173, 287, 145);
ctx.stroke();
//<dentro da touca>

//<rosto>
//linha E
ctx.beginPath();
ctx.moveTo(100, 280);
ctx.bezierCurveTo(100, 277, 65, 270, 95, 180);
ctx.stroke();

//linha D

ctx.beginPath();
ctx.moveTo(320, 250);
ctx.bezierCurveTo(320, 250, 325, 230, 305, 180);
ctx.stroke();

//olho E 
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(135, 210, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(132, 207, 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//olho D
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(230, 210, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(227, 207, 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//boca

//</rosto>

//<corpo>

//<alça da bolsa>
//alça E
//linha interior
ctx.beginPath();
ctx.moveTo(90, 330);
ctx.bezierCurveTo(90, 330, 80, 320, 100, 280);
ctx.stroke();
    
//linha exterior
ctx.beginPath();
 ctx.moveTo(75, 330);
 ctx.bezierCurveTo(75, 330, 67, 320, 90, 270);
ctx.stroke();

//alça D
//linha interior
ctx.beginPath();
ctx.moveTo(270, 330);
ctx.bezierCurveTo(270, 330, 260, 290, 320, 250);
ctx.stroke();

//linha exterior
ctx.beginPath();
ctx.moveTo(295, 330);
ctx.bezierCurveTo(295, 330, 280, 300, 340, 265);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(340, 265);
ctx.bezierCurveTo(340, 265, 340, 250, 320, 250);
ctx.stroke();
//alça D
//</alça>

//braço E
ctx.beginPath();
ctx.moveTo(50, 330);
ctx.bezierCurveTo(50, 330, 50, 320, 83, 284);
ctx.stroke();

//braço D
ctx.beginPath();
ctx.moveTo(385, 330);
ctx.bezierCurveTo(385, 330, 360, 285, 338, 265);
ctx.stroke();

//caixa_costas
//parte tras
ctx.beginPath();
ctx.moveTo(312, 198);
ctx.lineTo(348, 203);
ctx.lineTo(334, 253);
ctx.stroke();
        
ctx.beginPath();
ctx.moveTo(318, 218);
ctx.lineTo(344, 222);
ctx.stroke();
        
//parte lateral
ctx.beginPath();
ctx.moveTo(348, 203);
ctx.lineTo(393, 230);
ctx.lineTo(376, 315);
ctx.stroke();
        
ctx.beginPath();
ctx.moveTo(344, 222);
ctx.lineTo(390, 248);
ctx.stroke();
        
//linha final            
ctx.beginPath();
ctx.moveTo(50, 330);
ctx.lineTo(385, 330);
ctx.stroke();
//</corpo>
//</rosto>
