import { prizes, prizeButtons, participants, prizeKK, prize1, prize2, prize3, prize4, prizeDB } from "./InitializeData.js";
import { totalPickWinner, pickWinnerforSpecialCase } from "./PickWinnerService.js";
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
        switch (current_prize) {
            case "KK": {
                if (count == 0) {
                    prizeKK.done = true;
                    const KKButton = document.querySelector("#KK");
                    if (KKButton != null) {
                        KKButton.disabled = true;
                    }
                    return;
                }
                totalPickWinner(8, 3, 1);
                if (count == 1) {
                    totalPickWinner(8, 3, 0);
                }
                count = count - 1;
                console.log(count);
                break;
            }
            case "4": {
                if (prize4.done) {
                    const ForthButton = document.querySelector("#4");
                    if (ForthButton != null) {
                        ForthButton.disabled = true;
                    }
                    return;
                }
                if (count == 0) {
                    prize4.done = true;
                    return;
                }
                totalPickWinner(5, 4, 1);
                if (count == 1) {
                    totalPickWinner(6, 3, 1);
                }
                count = count - 1;
                break;
            }
            case "3": {
                if (prize3.done) {
                    return;
                }
                totalPickWinner(0, 10, 0);
                prize3.done = true;
                break;
            }
            case "2": {
                if (prize2.done) {
                    return;
                }
                totalPickWinner(0, 1, 4);
                prize2.done = true;
                break;
            }
            case "1": {
                if (prize1.done) {
                    return;
                }
                totalPickWinner(0, 1, 1);
                prize1.done = true;
                break;
            }
            case "DB": {
                if (prizeDB.done) {
                    return;
                }
                pickWinnerforSpecialCase();
                prizeDB.done = true;
                break;
            }
        }
        startButton.disabled = true;
        stopButton.disabled = false;
    });
}
function checkWinnerArrayAndDisableButton(prize) {
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
                    checkWinnerArrayAndDisableButton(prizeKK);
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
            case "DB": {
                checkWinnerArray(prizeDB);
                prizeDB.disableButton();
                break;
            }
        }
        startButton.disabled = false;
        stopButton.disabled = true;
    });
}
