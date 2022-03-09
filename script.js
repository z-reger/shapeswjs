const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over'

let number = 0;
let scale = 10;

function drawFlower(){
    let angle = number * 87;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2 ;
    
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
}

function animate(){
    // draw each frame
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawFlower();
    if (number > 300) return;
    requestAnimationFrame(animate)
}
animate();