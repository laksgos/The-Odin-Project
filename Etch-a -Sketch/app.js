const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer=document.querySelector('.buttons')

window.onload= ()=> {
    const boxs=container.querySelectorAll('.box');
    boxs.forEach(box =>box.addEventListener('mouseover',()=>{
        let RNum1 = Math.floor(Math.random() * 256);
        let RNum2 = Math.floor(Math.random() * 256);
        let RNum3 = Math.floor(Math.random() * 256);
        let color = `rgb(${RNum1},${RNum2},${RNum3})`
        box.style.background = color;

    }))
}

function createDivs(col,rows) {
    for (let i=0; i<(col*rows); i++){
        const div = document.createElement("div")
        div.style.border ='1px solid lightgrey'
        container.style.gridTemplateColumns=`repeat(${col}, 1fr)`; 
        container.style.gridTemplateRows=`repeat(${rows}, 1fr)`; 
        container.appendChild(div).classList.add('box'); 
        
    }
}

createDivs(16,16)

// function grayColor(){
//     const boxs=container.querySelectorAll('box'); 
//     btnGray.textContent="GRAY"
//     btnGray.addEventListener('click', ()=>{

//         boxs.forEach(box =>box.addEventListener('mouseover', ()=>{

//             let Rnum  = Math.floor(Math.random()*256); 
//             box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`;


//         }))
        
        

//     })
//     buttonsContainer.appendChild(btnGray).classList.add('btn');  
// }
// grayColor();

function grayColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = "GRAY"
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function blackColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = "BLACK"
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor(); 

function colorRGB() { 
    
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = "COLOR"
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum1 = Math.floor(Math.random() * 256);
            let RNum2 = Math.floor(Math.random() * 256);
            let RNum3 = Math.floor(Math.random() * 256);
            let color = `rgb(${RNum1},${RNum2},${RNum3})`
            box.style.background = color;
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}
colorRGB(); 

function reSet(){ 

    const boxs= container.querySelectorAll('.box'); 
    boxs.forEach(box => box.remove()); 
}

function reSize(){
    btnSize.textContent="GRID SIZE"; 
    buttonsContainer.appendChild(btnSize).classList.add('btn')

    btnSize.addEventListener('click', ()=>{
        let user = prompt("What size?")
        if (user===null || user<1){
            reSet(); 
            createDivs(16,16);
            blackColor();
            grayColor();
            colorRGB();


        }else {
            reSet(); 
            createDivs(user,user);
            blackColor();
            grayColor();
            colorRGB();
        }
    }) 
}
reSize(); 

function backgroundAnimation(){

    colors = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']; 
    const section = document.querySelector('.section')
    const span = document.createElement('span')
    let size= Math.random()*50; 

    span.style.width = 10 + size +"px"
    span.style.height = 10 +size + "px"
    span.style.borderRadius = `${size}%`
    span.style.top = Math.random() * innerHeight + 'px'; 
    span.style.left = Math.random() * innerWidth + 'px'; 
    const backgroundColor= colors[Math.floor(Math.random()*colors.length)]; 

    span.style.background=backgroundColor; 
    section.appendChild(span); 

    setTimeout(()=>{span.remove()}, 2000)

}

setInterval(backgroundAnimation, 100); 
