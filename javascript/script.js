const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//<touca>
//parte de cima da toca

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.moveTo(100, 150);
ctx.quadraticCurveTo(210, 15, 300, 150);
ctx.fill();
ctx.stroke();

//parte de baixo touca
//linha superior

ctx.fillStyle = "#5A6990";
ctx.fillRect(97, 150, 209, 22);

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(105, 160, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#5A6990";
ctx.stroke();

//pintando touca
ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(102, 167, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(95, 173, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(94, 178, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(103, 170, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(110, 170, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(123, 166, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(130, 166, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(145, 162, 13, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(299, 170, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(287, 167, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(275, 167, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#5A6990";
ctx.arc(262, 164, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
//termino da pintura


ctx.beginPath();
ctx.moveTo(97, 150);
ctx.bezierCurveTo(97, 150, 190, 120, 305, 150);
ctx.strokeStyle = "black";
ctx.stroke();

//linha inferior
ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.moveTo(90, 185);
ctx.bezierCurveTo(90, 180, 190,160, 305, 180);
ctx.fill();
ctx.stroke();

//linha Esquerda 
ctx.beginPath();
ctx.moveTo(90, 185);
ctx.bezierCurveTo(90, 180, 90, 170, 97, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 185);
ctx.lineTo(90, 185);
ctx.lineTo(95, 185);
ctx.stroke();

//linha Direita
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

//pintando rosto

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(185, 270, 60, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(98, 187, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(184, 209, 38, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(100, 250, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(112, 270, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(112, 300, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(90, 310, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(91, 305, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(76, 308, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(70, 315, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(65, 320, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(56, 326, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(69, 326, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(85, 300, 7, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(88, 290, 7, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(92, 280, 7, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(82, 310, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(82, 315, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(81, 320, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(81, 325, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(282, 207, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(290, 235, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(298, 189, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(305, 220, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(310, 245, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(292, 267, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(283, 320, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(285, 310, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(290, 300, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(297, 290, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(306, 280, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(318, 270, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(325, 265, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(355, 245, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(340, 245, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(340, 230, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(320, 210, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(316, 202, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(321, 203, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(328, 210, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(328, 218, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(340, 212, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(345, 212, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(350, 215, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(360, 222, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(370, 228, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(375, 230, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(382, 235, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(380, 250, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(380, 250, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(377, 262, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(375, 272, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(372, 282, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(370, 292, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(370, 300, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#DBC88D";
ctx.arc(368, 304, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "DBC88D";
ctx.arc(358, 280, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#DBC88D";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(335, 300, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(355, 320, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(348, 308, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(373, 327, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(330, 327, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(313, 323, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(314, 315, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(320, 305, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(335, 290, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(320, 290, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.arc(338, 272, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "#3B3C3E";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(122, 299, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(118, 310, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(107, 321, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(138, 209, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(231, 209, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(255, 270, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(262, 247, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(278, 271, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(122, 265, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(112, 251, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(155, 251, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(155, 290, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(190, 290, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(230, 290, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(230, 260, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(257, 288, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(230, 320, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(136, 250, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(250, 315, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(263, 303, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "white";
ctx.fillRect(98, 310, 170, 20);
//termino da pintura

//linha Esquerda
ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.moveTo(100, 280);
ctx.bezierCurveTo(100, 277, 65, 270, 95, 182);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

//linha Direita

ctx.beginPath();
ctx.fillStyle = "#3B3C3E";
ctx.moveTo(320, 250);
ctx.bezierCurveTo(320, 250, 325, 230, 305, 180);
ctx.fill();
ctx.stroke();

//olho Esquerdo
//parte de fora (detalhe)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(130, 215, 40, 84, 1.9 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(169, 203);
ctx.lineTo(167, 210);
ctx.fill();
ctx.stroke();

//olho
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

//olho Direito
//parte de fora (detalhe)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(240, 212, 40, 3, 2.25 * Math.PI);
ctx.fill();
ctx.stroke();

//olho
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
ctx.fillStyle ="#FFB657";
ctx.moveTo(145, 250);
ctx.bezierCurveTo(165, 210, 180, 165, 220, 250);
ctx.fill();
ctx.stroke();

//parte inferior
ctx.beginPath();
ctx.fillStyle = "#FFB657";
ctx.moveTo(145, 250);
ctx.bezierCurveTo(150, 250, 170, 295, 220, 250);
ctx.fill();
ctx.stroke();

//parte interior
//parte superior
ctx.beginPath();
ctx.fillStyle = "#B05670";
ctx.moveTo(155, 250);
ctx.bezierCurveTo(165, 210, 205, 220, 210, 250);
ctx.fill();
ctx.stroke();

//parte inferior
ctx.beginPath();
ctx.fillStyle = "#E88695";
ctx.moveTo(155, 250);
ctx.bezierCurveTo(155, 250, 175, 275, 210, 250);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#E88695";
ctx.moveTo(155, 250);
ctx.bezierCurveTo(155, 250, 180, 227, 210, 250);
ctx.fill();
ctx.strokeStyle = "#E88695";
ctx.stroke();

//</rosto>

//<corpo>

//<alça da bolsa>
//alça Esquerda
//linha interior
ctx.beginPath();
ctx.moveTo(90, 330);
ctx.bezierCurveTo(90, 330, 80, 320, 100, 280);
ctx.strokeStyle = "black";
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

ctx.beginPath();
ctx.moveTo(340, 265);
ctx.bezierCurveTo(340, 265, 340, 250, 320, 250);
ctx.stroke();
//alça Direita
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
//</corpo>
//</rosto>

//<acabamento do rosto>
//embaixo do olho direito (detalhe)
ctx.beginPath();
ctx.moveTo(290, 275);
ctx.bezierCurveTo(290, 260, 270, 240, 270, 240);
ctx.stroke();

//embaixo do olho esquerdo (detalhe)
ctx.beginPath();
ctx.moveTo(110, 280);
ctx.bezierCurveTo(100, 275, 100, 250, 105, 243);
ctx.stroke();

//inferior esquerda (detalhe)
ctx.beginPath();
ctx.moveTo(100, 330);
ctx.bezierCurveTo(95, 330, 95, 300, 110, 280);
ctx.stroke();

//</acabento do rosto)

//linha final            
ctx.beginPath();
ctx.moveTo(50, 330);
ctx.lineTo(385, 330);
ctx.stroke();

ctx.fillStyle = "#70CAE6";
ctx.fillRect(50, 330, 340, 20);
