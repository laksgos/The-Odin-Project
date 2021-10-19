
function operate(operator,a,b){

    if (operator=="-"){
        return a-b; 
    }
    if (operator=="+"){
        return a+b; 
    }
    if (operator=="*"){
        return a*b; 
    }
    if (operator=="/"){
        return a/b; 
    }

}

function checkDisplay(){     if (document.getElementById("display").innerHTML === "/" ||document.getElementById("display").innerHTML === "-"||document.getElementById("display").innerHTML === "+"||document.getElementById("display").innerHTML === "x"||document.getElementById("display").innerHTML === "%"  ) {document.getElementById("display").innerHTML = ""}
}

let num1="";
let num2="";
let operator="";

        document.getElementById("clear").addEventListener("click", function() {
        document.getElementById("display").innerHTML = "     ";

        num1="";
        num2+=""; 
        operator=""; 
        
    });
    document.getElementById("posneg").addEventListener("click", function() {
        document.getElementById("display").innerHTML = document.getElementById("posneg").value;
     });
    document.getElementById("remainder").addEventListener("click", function() {
        document.getElementById("display").innerHTML = document.getElementById("remainder").value;
        operator="%";
    });
    document.getElementById("divide").addEventListener("click", function() {
        document.getElementById("display").innerHTML = document.getElementById("divide").value;
        operator="/"; 
    });

    document.getElementById("seven").addEventListener("click", function() {
        debugger;
        checkDisplay(); 
        document.getElementById("display").innerHTML += document.getElementById("seven").value;

        if (!num1 && !operator) {num1+=7}
        else num2+=7
        
      });

      document.getElementById("eight").addEventListener("click", function() {
          checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("eight").value;
        if (!num1 && !operator) {num1+="8"}
        else num2+="8";
      });
      document.getElementById("nine").addEventListener("click", function() {
        checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("nine").value;
        if (!num1) {num1+=9}
        else num2+=9
      });
      document.getElementById("multiply").addEventListener("click", function() {
        document.getElementById("display").innerHTML = document.getElementById("multiply").value;
        operator='*'
      });
      document.getElementById("four").addEventListener("click", function() {
        checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("four").value;
        if (!num1) {num1+=4}
        else num2+=4
      });
      document.getElementById("five").addEventListener("click", function() {
        checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("five").value;
        if (!num1) {num1+=5}
        else num2+=5
      });
      document.getElementById("six").addEventListener("click", function() {
        checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("six").value;
        if (!num1) {num1+=6}
        else num2+=6
      });
      document.getElementById("minus").addEventListener("click", function() {

        document.getElementById("display").innerHTML = document.getElementById("minus").value;
        operator ="-"
      });
      document.getElementById("one").addEventListener("click", function() {checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("one").value;
        if (!num1) {num1+=1}
        else num2+=1
      });
      document.getElementById("two").addEventListener("click", function() {checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("two").value;
        if (!num1) {num1+=2}
        else num2+=2
      });
      document.getElementById("three").addEventListener("click", function() {checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("three").value;
        if (!num1) {num1+=3}
        else num2+=3
      });
      document.getElementById("plus").addEventListener("click", function() {
        document.getElementById("display").innerHTML = document.getElementById("plus").value;
        
        operator = "+"
      });
      document.getElementById("zero").addEventListener("click", function() {checkDisplay()
        document.getElementById("display").innerHTML += document.getElementById("zero").value;
        if (!num1) {num1+=0}
        else num2+=0
      });
      let decimal=0; 
      document.getElementById("decimal").addEventListener("click", function() {

        document.getElementById("display").innerHTML = document.getElementById("decimal").value;
        if (!num2 && !decimal) {num1+="."; decimal=1; }
        else if (operator && !decimal) {num2+="."} 
      });
      document.getElementById("equals").addEventListener("click", function() {
       debugger; 
       console.log(num1);
        if (num1 && num2 && operator){ document.getElementById("display").innerHTML = operate(operator, parseInt(num1),parseInt(num2));
    
        num1=operate(operator, parseInt(num1),parseInt(num2));
        num2="";
        operator=""; 
    } else if (!num2 && num1) {document.getElementById("display").innerHTML = num1} 
       
      });
      
    
      