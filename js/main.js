let numbers = [];

while (numbers.length < 6){
    const num = Math.floor(Math.random() * 99) + 1;
    if(!numbers.includes(num)) numbers.push(num);

}
console.log(numbers);

for (i = 0; i < numbers.length; i++){
    document.querySelector(".number-table").innerHTML += numbers[i] + "  " ;
}


