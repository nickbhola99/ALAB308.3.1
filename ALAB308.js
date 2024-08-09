console.log("Part 1: Fizz Buzz");
for(let i = 1; i <= 100; i++){
    if(i%3==0){
        if(i%5==0){
            console.log(i + " Fizz Buzz");
        }
        else{
            console.log(i + " Fizz");
        }
    }
    else if(i%5==0){
        console.log(i + " Buzz");
    }
    else{
        console.log(i);
    }
}

console.log("Part 2: Prime Time");
let n = 20;
let isPrime = false;
let y = 0;
while(n){
    let isPrime = true;
    for(let j = 2; j <= n*0.5; j++){
        if (n % j == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(n);
        break;
    }
    else {
        n++
    }
}

console.log("Part 3: Feeling Loopy");
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctorâ€™s Assistant,26"
//var cell1, cell2, cell3, cell4;
while(csv.length > 0){
    let x = csv.substring(0, csv.indexOf("\n"));
    if(csv.includes("\n")){
        csv = csv.replace(x + "\n", "");
        let cell1 = x.substring(0, x.indexOf(","));
        x = x.substring(x.indexOf(",") + 1, x.length);
        let cell2 = x.substring(0, x.indexOf(","));
        x = x.substring(x.indexOf(",") + 1, x.length);
        let cell3 = x.substring(0, x.indexOf(","));
        x = x.substring(x.indexOf(",") + 1, x.length);
        let cell4 = x.substring(0, x.length);
        console.log(cell1 + " " + cell2 + " " + cell3 + " " + cell4);
    }
    else{
        break;
    }
}
let x = csv.substring(0, csv.length);
let cell1 = x.substring(0, x.indexOf(","));
x = x.substring(x.indexOf(",") + 1, x.length);
let cell2 = x.substring(0, x.indexOf(","));
x = x.substring(x.indexOf(",") + 1, x.length);
let cell3 = x.substring(0, x.indexOf(","));
x = x.substring(x.indexOf(",") + 1, x.length);
let cell4 = x.substring(0, x.length);
console.log(cell1 + " " + cell2 + " " + cell3 + " " + cell4);