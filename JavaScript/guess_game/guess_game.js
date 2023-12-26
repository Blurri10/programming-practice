let maximum = parseInt(prompt("Enter the maximum limit: "));
console.log(maximum);
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

let number = Math.floor(Math.random() * maximum) + 1;
console.log(number);

let guess = prompt("Guess the number: \n(Enter 'q' to quit)");
let count = 1;

while (parseInt(guess) !== number) {
    if (guess === 'q') {
        break;
    }
    else if (!parseInt(guess)) {
        guess = prompt("Enter a valid number: \n(Enter 'q' to quit)");
    }
    else if (parseInt(guess) > maximum) {
        guess = prompt(`Out of bounds. Enter a number less than ${maximum + 1}: 
(Enter 'q' to quit)`);
    }
    else if (guess > number) {
        count++;
        guess = prompt("Too high. Try again: \n(Enter 'q' to quit)");
    }
    else if (guess < number) {
        count++;
        guess = prompt("Too low. Try again: \n(Enter 'q' to quit)");
    }
}

if (guess === 'q') {
    alert("Thank you for playing!");
}
else {
    alert(`Yay! You guessed it! The number was ${number}. Took you ${count} tries.`);
}
