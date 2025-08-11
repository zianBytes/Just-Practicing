// let variable1 = 0;

// document.getElementById("add-item").addEventListener("click", function() {
//     variable1 = variable1 + 1;
//     console.log(variable1);
//     console.log("Item added to cart");
// });

// document.getElementById("show-qty").addEventListener("click", function() {
//     console.log("cart Quantity is " + variable1);
//     document.getElementById("cart-quantity").innerText = "Total Items in cart: " + variable1;

// });
// document.getElementById("increase-qty2").addEventListener("click", function(){

//     variable1 = variable1 + 2;
//     console.log(variable1);
//     console.log("Item added to cart");
// });

// document.getElementById("increase-qty3").addEventListener("click", function(){
//     variable1 = variable1 + 3;
//     console.log(variable1);
//     console.log("Item added to cart");

// });

// document.getElementById("reset-cart").addEventListener("click", function(){
//     variable1 = 0;
//     console.log(variable1);
//     console.log("Cart is empty now");
// })

// Rock Papers Scissors Game


    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    const randomNumber = Math.random();

document.getElementById("rock").addEventListener("click", function(){

let randomNumber = Math.random();
let computerChoice = "";

if (randomNumber <1/3){
    computerChoice = "rock";
}
else if (randomNumber <2/3){
    computerChoice = "paper";
}
else if (randomNumber < 1) {
    computerChoice = "scissors";
}

console.log("Computer Chose: " + computerChoice);

let result = "";

if(computerChoice === "rock"){
    result = "It's a tie!";
    playerScore++;
    computerScore++;
    ties++;
    alert("You chose Rock, Computer Chose Rock. It's a tie!");
}
else if(computerChoice === "paper"){
    result = "You lose!";
    computerScore++;
    alert("You chose Rock, Computer Chose Paper. You lose!");
}
else if(computerChoice === "scissors"){
    result = "You win!";
    playerScore++;
    alert("You chose Rock, Computer Chose Scissors. You win!");
}

// Update scores
document.getElementById("wins").innerText = "Your Score: " + playerScore;
document.getElementById("losses").innerText = "Computer Score: " + computerScore;
document.getElementById("ties").innerText = "Ties: " + ties;


console.log(result);
})


