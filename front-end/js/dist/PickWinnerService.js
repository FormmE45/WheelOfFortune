import { participants } from "./InitializeData.js";
import { participantsForSpecialCase } from "./InitializeData.js";
import { winnerArray, winnerPerCycle } from "./reserve1.js";
function pickWinner(condition) {
    const index = Math.floor(Math.random() * (67 - 0) + 0);
    const winner = participants[index];
    if (winner.condition == condition && winner.number > 0 && !winnerArray.includes(winner)) {
        winner.number = winner.number - 1;
        return winner;
    }
    return pickWinner(condition);
}
export function totalPickWinner(lowest, low, mid, high, highest) {
    if (lowest != 0) {
        for (let i = 0; i < lowest; i++) {
            let winner = pickWinner("LOWEST");
            winnerArray.push(winner);
            winnerPerCycle.push(winner);
        }
    }
    if (low != 0) {
        for (let i = 0; i < low; i++) {
            let winner = pickWinner("LOW");
            winnerArray.push(winner);
            winnerPerCycle.push(winner);
        }
    }
    if (mid != 0) {
        for (let i = 0; i < mid; i++) {
            let winner = pickWinner("MID");
            winnerArray.push(winner);
            winnerPerCycle.push(winner);
        }
    }
    if (high != 0) {
        for (let i = 0; i < high; i++) {
            let winner = pickWinner("HIGH");
            winnerArray.push(winner);
            winnerPerCycle.push(winner);
        }
    }
    if (highest != 0) {
        for (let i = 0; i < highest; i++) {
            let winner = pickWinner("HIGHEST");
            winnerArray.push(winner);
            winnerPerCycle.push(winner);
        }
    }
}
export function pickWinnerforSpecialCase() {
    const index = Math.floor(Math.random() * (27 - 0) + 0);
    console.log(index);
    winnerArray.push(participantsForSpecialCase[index]);
}
