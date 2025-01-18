import { prizes, prizeButtons, participants, prizeKK, prize1, prize2, prize3, prize4, prizeDB } from "./InitializeData.js";
import { totalPickWinner } from "./PickWinnerService.js";
import { initParticipantOnArrayInput } from "./InitToFE.js";
import { participantChosen, randomPick } from "./RollingAnimation.js";
export let winnerArray = [];
let current_prize = "KK";
let buttonPrizes = document.querySelector("#buttonPrizes");
export let stop = false;
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
prizes.forEach((prize) => {
    const button = document.createElement("button");
    button.className = "buttonPrize btn btn-primary col-2";
    button.id = prize.id;
    button.innerText = prize.name;
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#prize' + prize.id);
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
initParticipantOnArrayInput(participants);
export let winnerPerCycle = [];
let count = 3;
if (startButton && stopButton) {
    startButton.addEventListener("click", () => {
        switch (current_prize) {
            case "KK": {
                winnerPerCycle = [];
                if (count == 1) {
                    totalPickWinner(0, 6, 0, 0, 5);
                }
                else {
                    totalPickWinner(1, 6, 0, 0, 5);
                }
                if (count > 0) {
                    count = count - 1;
                }
                else {
                    return;
                }
                stop = false;
                randomPick(10);
                break;
            }
            case "4": {
                winnerPerCycle = [];
                if (count == 1) {
                    totalPickWinner(0, 3, 2, 0, 5);
                }
                else {
                    totalPickWinner(1, 3, 2, 0, 4);
                }
                if (count > 0) {
                    count = count - 1;
                }
                else {
                    return;
                }
                stop = false;
                randomPick(10);
                break;
            }
            case "3": {
                winnerPerCycle = [];
                if (prize3.done) {
                    return;
                }
                totalPickWinner(0, 0, 1, 2, 7);
                stop = false;
                randomPick(10);
                prize3.done = true;
                break;
            }
            case "2": {
                winnerPerCycle = [];
                if (prize2.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 5);
                prize2.done = true;
                stop = false;
                randomPick(5);
                break;
            }
            case "1": {
                winnerPerCycle = [];
                if (prize1.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 2);
                prize1.done = true;
                stop = false;
                randomPick(2);
                break;
            }
            case "ĐB": {
                winnerPerCycle = [];
                if (prizeDB.done) {
                    return;
                }
                totalPickWinner(0, 0, 0, 0, 1);
                prizeDB.done = true;
                stop = false;
                randomPick(1);
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
function initModalWinner() {
    const winnermodal = document.querySelector("#winnermodalbody");
    if (winnermodal)
        winnermodal.innerHTML = "";
    winnerPerCycle.forEach(winner => {
        const winnerDiv = document.createElement("div");
        winnerDiv.textContent = winner.name;
        winnermodal === null || winnermodal === void 0 ? void 0 : winnermodal.appendChild(winnerDiv);
    });
}
if (startButton && stopButton) {
    stopButton.addEventListener("click", () => {
        stop = true;
        switch (current_prize) {
            case "KK": {
                setTimeout(() => {
                    winnerArray.forEach((winner) => {
                        if (winner.div)
                            participantChosen(winner.div);
                    });
                }, 100);
                if (count == 0) {
                    checkWinnerArrayAndDisableButton(prizeKK);
                    winnerArray = [];
                    count = 3;
                    current_prize = "4";
                }
                break;
            }
            case "4": {
                winnerArray.forEach((winner) => {
                    if (winner.div)
                        participantChosen(winner.div);
                });
                console.log(count);
                if (count == 0) {
                    checkWinnerArrayAndDisableButton(prize4);
                    winnerArray = [];
                    current_prize = "3";
                }
                break;
            }
            case "3": {
                initParticipantOnArrayInput(participants);
                winnerArray.forEach((winner) => {
                    if (winner.div)
                        participantChosen(winner.div);
                });
                checkWinnerArray(prize3);
                winnerArray = [];
                current_prize = "2";
                prize3.disableButton();
                break;
            }
            case "2": {
                initParticipantOnArrayInput(participants);
                winnerArray.forEach((winner) => {
                    if (winner.div)
                        participantChosen(winner.div);
                });
                checkWinnerArray(prize2);
                prize2.disableButton();
                current_prize = "1";
                winnerArray = [];
                break;
            }
            case "1": {
                initParticipantOnArrayInput(participants);
                winnerArray.forEach((winner) => {
                    if (winner.div)
                        participantChosen(winner.div);
                });
                checkWinnerArray(prize1);
                winnerArray = [];
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
const btnResult = document.querySelector("#result");
const btnReset = document.querySelector("#reset");
btnReset === null || btnReset === void 0 ? void 0 : btnReset.addEventListener("click", () => {
    initParticipantOnArrayInput(participants);
});
btnResult === null || btnResult === void 0 ? void 0 : btnResult.addEventListener("click", () => {
    initModalWinner();
});
