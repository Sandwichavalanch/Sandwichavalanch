document.querySelector("#plus").onclick=function(){
    let numone = document.querySelector("#one").value
    let numtwo = document.querySelector("#two").value
    numone = parseInt(numone)
    numtwo = parseInt(numtwo)
    alert(numone+numtwo)
};

document.querySelector("#minus").onclick=function(){
    let numone = document.querySelector("#one").value
    let numtwo = document.querySelector("#two").value
    numone = parseInt(numone)
    numtwo = parseInt(numtwo)
    alert(numone-numtwo)
};

document.querySelector("#multiply").onclick=function(){
    let numone = document.querySelector("#one").value
    let numtwo = document.querySelector("#two").value
    numone = parseInt(numone)
    numtwo = parseInt(numtwo)
    alert(numone*numtwo)
};

document.querySelector("#divide").onclick=function(){
    let numone = document.querySelector("#one").value
    let numtwo = document.querySelector("#two").value
    numone = parseInt(numone)
    numtwo = parseInt(numtwo)
    alert(numone/numtwo)
};