let numbers = [];
let usernums = [];
const numbernum = 6;
let contatore = 0;

generateNumbers();

checkNumbers();

function generateNumbers(){

    while (numbers.length < numbernum){
        const num = Math.floor(Math.random() * 99) + 1;
        if(!numbers.includes(num)) numbers.push(num);
    
    }
    console.log(numbers);
    
    for (let i = 0; i < numbers.length; i++){
        document.querySelector(".number-table").innerHTML += numbers[i] + "   " ;
    }
    
}

function checkNumbers(){
    
    for (let i = 0; i < numbers.length; i++){
        const num = parseInt(prompt("Inserire i numeri uno per volta"));
        for (let j = 0; j < numbers.length; j++){
            if(num === numbers[j]){
                usernums.push(num);
                contatore++;
            }
        }
    }
}

console.log(usernums);
console.log(contatore);