const simpleColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let btn = document.getElementById('btn');
let colorCode = document.getElementById('color-code');

btn.addEventListener('click',()=>{
    let color = getRandomColor();

    document.body.style.background = color;
    colorCode.innerText = color;
})

function getRandomColor(){
    return simpleColors[Math.floor(Math.random() * simpleColors.length)];
}