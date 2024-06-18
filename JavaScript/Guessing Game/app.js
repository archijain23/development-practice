const max=prompt("Enter the maximum number");
console.log(max);

const random= Math.floor(Math.random() * max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("game ended");
        break;
    }
    if(guess==random){
        console.log("Your guess was right!! congratulations  randam number was",random);
        break;
    }else{
        guess=prompt("Wrong!! Try again!Guess the number");

    }
}