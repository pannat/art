import "./styles/style.scss"

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const drawLine = (x: number, y: number, color: string) => {
    ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.quadraticCurveTo(70, 100, 200, 100);
        ctx.bezierCurveTo(370, 100, 300, 300, 300, 300);
        ctx.stroke();
    ctx.closePath();
}

const drawCircle = (x: number, y: number, color: string) => {
    ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = color;
        ctx.arc(x, y, 40, 0, Math.PI * 2, false);
        ctx.fill();
    ctx.closePath();
}

for (let i = 0; i < 1200; i++) {
    const color = `rgb(${getRandomInt(160)}, ${getRandomInt(10)}, ${getRandomInt(105)})`
    const x = getRandomInt(900);
    const y = getRandomInt(500);
    drawCircle(x, y, color);
}