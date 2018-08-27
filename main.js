play();
function play() {
    let roundsWon = 0;
    let computerValue;
    let playerValue;
    const count = prompt("How many times do you want to play?", "5");
    const hands = {1:"rock", 2:"paper", 3:"scissors"}

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    function judge() {
    const exampleValue = (hands[Math.floor(Math.random()*3)+1]);
    computerValue = (Math.floor(Math.random()*3)+1);
    playerValue = (getKeyByValue(hands, ((prompt("What do you choose?", exampleValue.charAt(0).toUpperCase() + exampleValue.slice(1)))).toLowerCase()));
        if (playerValue == computerValue) {
            console.log("You played the same! Let's go again!");
            return judge();
        }
        else if ((playerValue > computerValue && (playerValue-1) == computerValue) || (computerValue-playerValue) == 2) {
            return true;
        }
        else {
            return false
        }
    }
    for (let i = 0; i < count; i++) {
        if (judge()) {
            console.log("ROUND: " + (i+1) + " Way to go! You won, " + hands[playerValue] + " beats the " + hands[computerValue] + ".");
            roundsWon++;
        }
        else {
            console.log("ROUND: " + (i+1) + " Tough luck! You lost, " + hands[computerValue] + " beats the " + hands[playerValue] + ".");
        }
    }
    alert("You won " + roundsWon + " out of " + count + " rounds.");
}