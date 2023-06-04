const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//<touca>
//parte de cima da toca

ctx.beginPath();
ctx.fillStyle = "#406ce6";
ctx.moveTo(100, 150);
ctx.quadraticCurveTo(210, 15, 300, 150);
ctx.lineWidth = 3;
ctx.fill();
ctx.stroke();

//<parte de baixo touca>
//linha superior
ctx.beginPath();
ctx.fillStyle = "#406ce6";
ctx.moveTo(97, 150);
ctx.bezierCurveTo(97, 150, 190,120, 305, 150);
ctx.fill();
ctx.stroke();

//linha inferior
ctx.beginPath();
ctx.moveTo(90, 185);
ctx.bezierCurveTo(90, 180, 190,160, 305, 180);
ctx.stroke();

//linha Esquerda 
ctx.beginPath();
ctx.fillStyle = "#406ce6";
ctx.moveTo(90, 185);
ctx.bezierCurveTo(90, 180, 90, 170, 97, 150);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#406ce6";-
ctx.moveTo(90, 185);
ctx.lineTo(90, 185);
ctx.lineTo(95, 185);
ctx.fill();
ctx.stroke();

//linha Direita
ctx.beginPath();
ctx.fillStyle = "#406ce6";
ctx.moveTo(305, 180);
ctx.bezierCurveTo(305, 180, 310, 180, 305, 150);
ctx.fill();
ctx.stroke();
//</parte de baixo touca>
//</touca>

//<dentro da touca>
//linha 1
ctx.beginPath();
ctx.moveTo(115, 175);
ctx.bezierCurveTo(115, 175, 110, 173, 120, 145);
ctx.fill();
ctx.stroke();

//linha 2
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
//linha Esquerda
ctx.beginPath();
ctx.moveTo(100, 280);
ctx.bezierCurveTo(100, 277, 65, 270, 95, 182);
ctx.stroke();

//linha Direita

ctx.beginPath();
ctx.moveTo(320, 250);
ctx.bezierCurveTo(320, 250, 325, 230, 305, 180);
ctx.stroke();

//olho Esquerdo
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(135, 210, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//parte branca
ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(132, 207, 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//olho Direita
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(230, 210, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//parte branca
ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(227, 207, 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//boca
//parte exterior
//parte superior
ctx.beginPath();
ctx.fillStyle = "#ffbf00";
ctx.moveTo(145, 250);
ctx.bezierCurveTo(165, 210, 180, 165, 220, 250);
ctx.lineWidth = 3;
ctx.fill();
ctx.stroke();

//parte interior
ctx.beginPath();
ctx.fillStyle = "#ffbf00";
ctx.moveTo(145, 250);
ctx.bezierCurveTo(150, 250, 170, 295, 220, 250);
ctx.fill();
ctx.stroke();

//parte interior
//parte superior
ctx.beginPath();
ctx.fillStyle = "#ff5a6a";
ctx.moveTo(155, 250);
ctx.bezierCurveTo(165, 210, 205, 220, 210, 250);
ctx.fill();
ctx.stroke();

//parte inferior
ctx.beginPath();
ctx.fillStyle = "#ff5a6a";
ctx.moveTo(155, 250);
ctx.bezierCurveTo(155, 250, 175, 275, 210, 250);
ctx.fill();
ctx.stroke();

//</rosto>

//<corpo>

//<alça da bolsa>
//alça Esquerda
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

//alça Direita
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
//alça Direita
ctx.beginPath();
ctx.moveTo(340, 265);
ctx.bezierCurveTo(340, 265, 340, 250, 320, 250);
ctx.stroke();
//</alça>

//braço Esquerda
ctx.beginPath();
ctx.moveTo(50, 330);
ctx.bezierCurveTo(50, 330, 50, 320, 83, 284);
ctx.stroke();

//braço Direita
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
//<acabamento do rosto>
//inferior detalhe direita
ctx.beginPath();
ctx.moveTo(290, 275);
ctx.bezierCurveTo(290, 260, 270, 240, 270, 240);
ctx.stroke();
//superior detalhe direita
ctx.beginPath();
ctx.arc(240, 212, 40, 3, 2.25 * Math.PI);
ctx.stroke();
//inferior detalhe esquerda
ctx.beginPath();
ctx.moveTo(100, 330);
ctx.bezierCurveTo(95, 330, 95, 300, 110, 280);
ctx.stroke();
//meio
ctx.beginPath();
ctx.moveTo(110, 280);
ctx.bezierCurveTo(94, 275, 94, 250, 100, 244);
ctx.stroke();
//superior detalhe esquerdo
ctx.beginPath();
ctx.arc(125, 218, 39, 2.37, 1.97 * Math.PI);
ctx.stroke();
//</acabento do rosto)