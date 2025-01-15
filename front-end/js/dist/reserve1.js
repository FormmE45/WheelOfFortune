import { prizes, prizeButtons, participants, prizeKK, prize1, prize2, prize3, prize4, prizeDB } from "./InitializeData.js";
import { totalPickWinner } from "./PickWinnerService.js";
export let winnerArray = [];
let current_prize;
let buttonPrizes = document.querySelector("#buttonPrizes");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
prizes.forEach((prize) => {
    const button = document.createElement("button");
    button.className = "buttonPrize";
    button.id = prize.id;
    button.innerText = prize.name;
    button.addEventListener("click", () => {
        winnerArray = [];
        console.log(winnerArray);
        count = 3;
        current_prize = prize.id;
    });
    prize.button = button;
    prizeButtons.push(button);
    if (buttonPrizes != null) {
        buttonPrizes.appendChild(button);
    }
});
function checkNumber() {
    participants.forEach((item) => {
        if (item.number == 0) {
            item.status = false;
            console.log(item.id + " " + item.name);
        }
    });
}
let count = 3;
if (startButton && stopButton) {
    startButton.addEventListener("click", () => {
        console.log(current_prize);
        switch (current_prize) {
            case "KK": {
                console.log(participants);
                if (count == 1) {
                    totalPickWinner(0, 6, 0, 0, 5);
                }
                else {
                    totalPickWinner(1, 6, 0, 0, 5);
                }
                count = count - 1;
                console.log(count);
                break;
            }
            case "4": {
                console.log(participants);
                if (count == 0) {
                    prize4.done = true;
                    return;
                }
                if (count == 1) {
                    totalPickWinner(0, 3, 2, 0, 5);
                }
                else {
                    totalPickWinner(1, 3, 2, 0, 4);
                }
                count = count - 1;
                console.log(count);
                break;
            }
            case "3": {
                if (prize3.done) {
                    return;
                }
                totalPickWinner(0, 0, 1, 2, 7);
                prize3.done = true;
                break;
            }
            case "2": {
                if (prize2.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 5);
                prize2.done = true;
                break;
            }
            case "1": {
                if (prize1.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 2);
                prize1.done = true;
                break;
            }
            case "ĐB": {
                if (prizeDB.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 1);
                prizeDB.done = true;
                break;
            }
        }
        startButton.disabled = true;
        stopButton.disabled = false;
    });
}
function checkWinnerArrayAndDisableButton(prize) {
    console.log(winnerArray.length);
    checkWinnerArray(prize);
    prize.disableButton();
}
function checkWinnerArray(prize) {
    console.log(prize.name);
    winnerArray.forEach(item => console.log(item.id + " " + item.name));
}
if (startButton && stopButton) {
    stopButton.addEventListener("click", () => {
        switch (current_prize) {
            case "KK": {
                if (count == 0) {
                    checkWinnerArrayAndDisableButton(prizeKK);
                }
                break;
            }
            case "4": {
                if (count == 0) {
                    checkWinnerArrayAndDisableButton(prize4);
                }
                break;
            }
            case "3": {
                checkWinnerArray(prize3);
                prize3.disableButton();
                break;
            }
            case "2": {
                checkWinnerArray(prize2);
                prize2.disableButton();
                break;
            }
            case "1": {
                checkWinnerArray(prize1);
                prize1.disableButton();
                break;
            }
            case "ĐB": {
                checkWinnerArray(prizeDB);
                prizeDB.disableButton();
                break;
            }
        }
        startButton.disabled = false;
        stopButton.disabled = true;
    });
}
