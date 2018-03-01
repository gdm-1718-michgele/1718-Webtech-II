let checkResult = function (){
    let sumPopcorn = document.getElementById('result1').value;
    let sumBurger = document.getElementById('result2').value;
    let sumDonut = document.getElementById('result3').value;
    let inputResult = document.getElementById('result4').value;

    console.log(sumPopcorn);
    console.log(sumBurger);
    console.log(sumDonut);

    let popcorn = sumPopcorn / 3;
    let burger = (sumBurger - popcorn) /2;
    let donut = (sumDonut - burger) /4;

    console.log(popcorn);
    console.log(burger);
    console.log(donut);

    let result = burger + donut * popcorn;

    console.log(result);

    if(result == inputResult){
        //correct
        document.getElementById('message').innerHTML = "Well done";
    }else{
        //fout
        document.getElementById('message').innerHTML = "You stoopid";
    }
}
document.getElementById('check').addEventListener('click', checkResult);