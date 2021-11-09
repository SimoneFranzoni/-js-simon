let numbers = [];
let usernums = [];
const numbernum = 6;
let contatore = 0;

generateNumbers();

setTimeout(checkNumbers, 3000);

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
    document.querySelector(".number-table").innerHTML = "  "
    
    for (let i = 0; i < numbers.length; i++){
        const num = parseInt(prompt("Inserire i numeri uno per volta"));
        for (let j = 0; j < numbers.length; j++){
            if(num === numbers[j] && !usernums.includes(num)){
                usernums.push(num);
                contatore++;
            }
        }
    }

    document.querySelector(".attempts").innerHTML += "Hai indovinato " + contatore + " numeri";
    
    document.querySelector(".results").innerHTML += "I numeri indovinati sono: "
    
    for (let i = 0; i < usernums.length; i++){
        document.querySelector(".number-table").innerHTML += usernums[i] + "  ";
    }
    
    console.log(usernums);
    console.log(contatore);
}


