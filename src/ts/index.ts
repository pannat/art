const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
console.log(ctx);

const someFunc = (a: string) => {
    console.log(a);
}

someFunc('23');
someFunc('213');