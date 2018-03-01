let answer = function(){
    let popcorn = 7;
    let hamburger = 3;
    let doubledonut = 8;
    let singledonut = 4;
    let result = hamburger + singledonut * popcorn;
    let inputResult = document.getElementById('result4').value;

    if(result == inputResult) {
        alert ('Correct answer');
    }else{
        alert ('WROOOONG');
    }
}

document.getElementById('check').addEventListener('click', answer);