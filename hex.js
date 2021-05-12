const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let btn = document.getElementById('btn');
let colorCode = document.getElementById('color-code');

btn.addEventListener('click',()=>{
    let color = getRandomColor();

    document.body.style.background = color;
    colorCode.innerText = color;
})

function getRandomColor(){
    let code = '#';
    for(let i =0; i<6;i++){
        code+=hex[Math.floor(Math.random() * hex.length)];
    }

    return code;
}