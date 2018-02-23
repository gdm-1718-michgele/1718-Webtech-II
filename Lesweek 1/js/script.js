//Variables

let number = prompt('Geef een getal in:');
let number2 = prompt('Geef een tweede getal in:');
let solution = parseInt(number) + Number(number2);
//"21ee" zal niet werken bij Number, accepteert geen letters. parseInt zal de ee weglaten en alsnog een nummer tonen.//
let text = 'Het getal dat u invoerde was:' + number + '. Is dit correct?';
let textNew = `<br> Het getal dat u invoerde was: ${number2}. Is dit correct?`;
let a = "11";
let kleuren = ['geel','groen','rood','paars'];

let seconds = prompt('Geef aantal seconden in');
let hours = parseInt(parseInt(seconds) / 3600);
seconds %= 3600;
let minutes = parseInt(parseInt(seconds) / 60);
let restSeconds = seconds % 60;
//parseInt 1 zodat je ermee kan rekenen, parseInt 2 zodat het niet in kommagetallen staat

//logs

console.log('Hello World!')
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log(kleuren);
console.log(`Uren: ${hours} , minuten: ${minutes} , seconden: ${restSeconds} `);

//opdrachten

document.write(text);
document.write(textNew);
document.write(`<br> ${number.length}`);
document.write(`<br> ${solution}`);
document.write(`<br> ${kleuren[1]}`);

//extra

kleuren.push('oranje');
function myFunction() {
  confirm("Hello! I am an alert box!");
}

//Credits
/*********************************************************************
* @author     Michiel Geleyns
* @created    15/02/2018
* @modified   15/02/2018
* @copyright  Copyright © 2018-2018 Artevelde University College Ghent
* @function   These are the courses from the first week of Web-Tech II
*********************************************************************/
