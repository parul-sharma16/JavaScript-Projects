const form = document.querySelector("form");
function throwConfetti() {
    confetti({
        particleCount: 1000,
        spread: 300,
    });
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    if(height<= 0 || isNaN(height)){
        result.innerHTML = "Please give valid height";
    }
    else if(weight<= 0 || isNaN(weight)){
        result.innerHTML = "Please give valid weight";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<=18.5)
            msg.innerHTML = "Underweight!";
        if(bmi>18.5 && bmi<=24.9){
            msg.innerHTML = "Normal Weight!";
            throwConfetti();
        }
        if(bmi>24.9 && bmi<=29.9)
            msg.innerHTML = "Overweight!";
        if(bmi>29.9)
            msg.innerHTML = "Obese!";
        const min = ((18.5)*Math.pow((height/100),2)).toFixed(1);
        const max = ((24.9)*Math.pow((height/100),2)).toFixed(1);
        range.innerHTML = `Healthy weight for this height is: <br> ${min} kg - ${max} kg`;
    }
});
