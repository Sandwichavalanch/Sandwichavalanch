let min = 1
let max = 9
let correctAnswers = 0
let incorrect = 0
document.querySelector("#add").onclick = function(){
    let num1 = randint(min,max)
    let num2 = randint(min,max)
    let correct = num1 + num2
    let userAnswer = prompt(num1+"+"+num2+"=","")
    check(correct, userAnswer)
}
document.querySelector("#subtract").onclick = function(){
    let num1 = randint(min,max)
    let num2 = randint(min,max)
    let correct = num1 - num2
    let userAnswer = prompt(num1+"-"+num2+"=","")
    check(correct, userAnswer)
}
document.querySelector("#multiply").onclick = function(){
    let num1 = randint(min,max)
    let num2 = randint(min,max)
    let correct = num1 * num2
    let userAnswer = prompt(num1+"*"+num2+"=","")
    check(correct, userAnswer)
}
document.querySelector("#divide").onclick = function(){
    let num1 = randint(min,max)
    let num2 = randint(min,max)
    let correct = num1 / num2
    correct = Math.round(correct)
    alert("round your result")
    let userAnswer = prompt(num1+"/"+num2+"=","")
    check(correct, userAnswer)
}
function randint(min, max){
    return Math.floor(Math.random()*(max-min+1))+min
    }
function check(correct,userAnswer){
    if(correct == userAnswer){
        alert("Correct answer")
        correctAnswers++
    }else{
        alert("Oops wrong answer. The correct answer was " + correct)
        incorrect++
    }
}
document.querySelector("#stats").onclick = function(){
    alert("correct:"+correctAnswers+"\n incorrect:"+incorrect)
}
document.querySelector("#reset").onclick = function(){
    correctAnswers = 0
    incorrect = 0
    alert("your stats have been reset")
}
document.querySelector("#difficulty").onchange = function(){
    let level = document.querySelector("#difficulty").value

    switch(level){
        case "easy":{
            min = 1
            max = 9
            break
        }
        case "medium":{
            min = 10
            max = 99
            break
        }
        case "hard":{
            min = 100
            max = 999
            break
        }
        case "impossible":{
            min = 1000
            max = 9999
            break
        }
    }
}
