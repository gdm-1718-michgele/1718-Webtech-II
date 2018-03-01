let number1 = parseInt(prompt('geef een beginwaarde'));
let number2 = parseInt(prompt('Geef een eindwaarde'));
let result;

for(i = number1; i<=number2; i++) {
    console.log (i);
    if(i % 3 === 0 && i % 5 === 0){
        //deelbaar door 3 en 5
        result = "Bitterbal <br>";
    }else if(i % 3 === 0){
        //deelbaar door 3
        result = "Bitter <br>";
    }else if(i % 3 === 0){
        //deelbaar door 5
        result = "bal <br>";
    }else{
        //niet deelbar door 3 en 5
        result = i + '<br>';
    }
    document.getElementById('result').innerHTML += result;
}