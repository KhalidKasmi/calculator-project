let calcbutton = document.querySelector('.calc-buttons')
let screen = document.querySelector('.screen')
let buffer = "0"
let runningtotal = 0
let previousoperator


function buttonclick(value){
    if(isNaN(parseInt(value) )){
        handlesymbol(value)
    }else{
        handlenumber(value)
    }
    affichage()
}


function handlenumber(value){
    console.log(value)
    if (buffer == 0 ){
        buffer= value
    }else(
        buffer += value
    )
}

function operation(value){
    if (previousoperator === "+"){
        runningtotal+= value
        console.log(runningtotal)
    }else if(previousoperator === "-"){
        runningtotal-= value
    }else if (previousoperator === "×") {
        runningtotal *= value
      } else {
        runningtotal /= value
      }
    }

function handlesymbol(value){
   switch(value){
    case"C":
    buffer = "0"
    runningtotal = 0
    break
    case"=":
    if(runningtotal===0){
        return 
    }else{
        const intbuffer = parseInt(buffer)
        operation(intbuffer)
        console.log(runningtotal)
        buffer = runningtotal
        affichage()
        
    }
    break
    case"←":
    if(buffer.length===1){
        buffer = "0"
    }else{
        buffer = buffer.substring(0,buffer.length-1)
    }
    break
    case"+":
    case"-":
    case"×":
    case"÷":
    handleMath(value)
    break;



}

}

function handleMath(value){
    if(buffer === '0'){
        return
    }
    runningtotal = parseInt(buffer)
    previousoperator = value
    console.log(previousoperator)
    buffer = '0'

}

function affichage(){
    screen.innerText = buffer
}

function init(){
    calcbutton.addEventListener("click",function(event){
        buttonclick(event.target.innerText)
    })
}
init()

