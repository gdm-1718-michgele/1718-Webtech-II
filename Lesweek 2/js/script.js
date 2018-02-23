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

//oefeing 2: Datatypes

// 1-10 met arrayLength
//let numbers = [1,2,3,4,5,6,7,8,9,10]
//let i;

//for(let i = 0; i <= 10; ++i) {
  //console.log(i);
//}

//oefening 3: Concatenatie
let scores = [50, 19, 45];
let arrayLength = scores.length;
let i;

for (i = 0; i < arrayLength; ++i) {
  console.log(scores[i]);
}
