//Oefening 1: even of oneven nummer
let checkEvenOrOdd = function () {
  let number = document.getElementById('someNumber').value;
  let rest = number % 2;

  if(rest === 0){
  //EVEN
  //document.write('Een even getal')
    document.getElementById('result').innerHTML = 'Een even getal';
  }else{
    //oneven
    //document.write('Een oneven getal')
    document.getElementById('result').innerHTML = 'Een oneven getal';
  }
}

document.getElementById('checkInput').addEventListener('click', checkEvenOrOdd);

//oefening 2: Datatypes

//oefening 3: Concatenatie
let scores = [50, 19, 45];
let arrayLength = scores.length;
let i;

for (i = 0; i < arrayLength; ++i) {
  console.log(scores[i]);
}

//oefening 4: Proclamatietool
//let text;
//let results = document.getElementById("myInput").value;

//switch(expression) {
  //case n:
      //code block
      //break;
  //case n:
      //code block
      //break;
  //default:
      //code block
//}

//oefening 5: Pluralizer

let animal1 = dog;


pluralizer('dog', 3);
pluralizer('cat', 6);
pluralizer('parrot', 8);

