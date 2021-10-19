
    const container=document.getElementById("grid-container");
    function random (number) {
        return Math.floor(Math.random() * number +1);
    }

    function makeRows(rows,cols){
        container.style.setProperty("--grid-rows", rows); 
        container.style.setProperty("--grid-cols", cols); 
        for (x=0; x<(rows*cols); x++){
            let cell = document.createElement("div"); 
            container.appendChild(cell).className="grid-item"; 
            cell.addEventListener("mouseover", function bgChange(){
                const randomCol="rgb("+random(225)+","+random(225)+","+random(225)+")"; 
                cell.style.backgroundColor=randomCol; 
                cell.style.filter=".1";
            });

        };
        if (cell.addEventListener("mouseover") && cell.backgroundColor=="white") {
            cell.style.filter==.1; 
        }

    };

    makeRows(16,16); 

    const button = document.getElementById("button"); 
    button.addEventListener("click", function changeSize(size){
        size=prompt("Enter a value between  0 to 101"); 
        container.innerHTML =""; 
        if (0<size && size<=100){
            makeRows(size,size); 
        } else {makeRows(16,16)
            alert ("Only type values between 1-100");
        }

    });

    // const bod=document.querySelector(".main")
    // for (x=1; x<17; x++){
    //    const divs=document.createElement("div")
    //    divs.textContent=x
    //    divs.setAttribute("class", "box")
    //    bod.appendChild(divs)
    // }

