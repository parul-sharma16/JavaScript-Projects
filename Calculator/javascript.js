const equal = document.querySelector('.equal');
const oprtn = document.querySelectorAll('#oprtn');
const nums = document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal');
const bracket = document.querySelectorAll('.bracket');
const display = document.querySelector('.display');
const res = document.querySelector('.res');
const clear = document.querySelector('.ac');
const del = document.querySelector('.del');
const btns = document.querySelectorAll('.btn');
const neg = document.querySelector('.neg');

let calc='';
//NUMBER
nums.forEach(function (num){
    num.addEventListener('click', function(e){
        display.innerHTML+=e.target.innerHTML; //or num.innerHTML
        calc+=e.target.innerHTML;
    })
    
})

//DECIMAL
decimal.addEventListener('click', function(e){
    display.innerHTML+=decimal.innerHTML;
    calc+=e.target.innerHTML;
})

bracket.forEach(function (bracket){
    bracket.addEventListener('click', function(e){
        display.innerHTML+=e.target.innerHTML; //or num.innerHTML
        calc+=e.target.innerHTML;
    })
    
})

//OPERATION
const mult='*';
const div='/';
oprtn.forEach(function (oprtn){
    oprtn.addEventListener('click', function(e){
        display.innerHTML+=e.target.innerHTML;
        if(e.target.innerHTML=="×")
            calc+=mult;
        else if(e.target.innerHTML=="÷")
            calc+=div;
        else
            calc+=e.target.innerHTML;
    })
})

//EVALUATE
equal.addEventListener('click', function(e){
    try{
        res.innerHTML = `= ${eval(calc)}`;
    }
    catch(error){
        res.innerHTML = "Error";
    }
    
})

//CLEAR AND DELETE
clear.addEventListener('click', function(e){
    display.innerHTML='';
    res.innerHTML='';
    calc='';
});
del.addEventListener('click', function(e){
    display.innerHTML=display.innerHTML.slice(0,-1);
    calc=calc.slice(0,-1);
})

//valid syntax

