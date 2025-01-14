"use strict";
let buttonPrizes = document.querySelector("#buttonPrizes");
class Prize {
    constructor(id, name, status, done, numOfPrizes) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.done = done;
        this.numOfPrizes = numOfPrizes;
    }
}
const prizeKK = new Prize('KK', "Khuyến Khích", 'active', false, 30);
const prize6 = new Prize('6', "Giải 6", 'active', false, 30);
const prize5 = new Prize('5', "Giải 5", 'active', false, 25);
const prize4 = new Prize('4', "Giải 4", 'active', false, 10);
const prize3 = new Prize('3', "Giải 3", 'active', false, 5);
const prize2 = new Prize('2', "Giải 2", 'active', false, 5);
const prize1 = new Prize('1', "Giải 1", 'active', false, 2);
const prizeDB = new Prize('ĐB', "Giải Đặc Biệt", 'active', false, 1);
const prizes = [];
const prizeButtons = [];
prizes.push(prizeKK, prize1, prize2, prize3, prize4, prize5, prize6, prizeDB);
prizes.forEach((prize) => {
    const button = document.createElement("button");
    button.className = "buttonPrize";
    button.id = prize.id;
    button.innerText = prize.name;
    button.addEventListener("click", () => {
        current_prize = prize.id;
        console.log(current_prize);
    });
    prizeButtons.push(button);
    if (buttonPrizes != null) {
        buttonPrizes.appendChild(button);
    }
});
console.log(prizeButtons);
let current_prize;
class Participant {
    constructor(name, number, status) {
        this.name = name;
        this.number = number;
        this.status = status;
    }
    minusNumber() {
        this.number = this.number - 1;
    }
    checkStatus() {
        if (this.number == 0) {
            this.status = false;
        }
    }
}
const participant1 = new Participant("NGUYỄN THỊ THÙY NGA", 3, true);
const participant2 = new Participant("LÊ VĂN HẬN", 3, true);
const participant3 = new Participant("PHẠM THỊ NHÂN HÒA", 3, true);
const participant4 = new Participant("NGUYỄN PHÚC SƠN", 3, true);
const participant5 = new Participant("NGUYỄN VĂN CHÍNH TRỰC", 3, true);
const participant6 = new Participant("TÔN NỮ HUYỀN PHƯƠNG", 2, true);
const participant7 = new Participant("VŨ THỊ TUYẾT MAI", 2, true);
const participant8 = new Participant("NGUYỄN HOÀNG THẢO NGUYÊN", 2, true);
const participant9 = new Participant("NGÔ ANH HÙNG", 2, true);
const participant10 = new Participant("HUỲNH VIỆT KHƯƠNG", 2, true);
const participant11 = new Participant("HOÀNG THỊ THU YẾN", 2, true);
const participant12 = new Participant("NGUYỄN KHẮC CƯỜNG", 2, true);
const participant13 = new Participant("PHAN THỊ NGỌC CHÂU", 2, true);
const participant14 = new Participant("PHAN NỮ DANH PHƯƠNG", 2, true);
const participant15 = new Participant("LÊ HỒNG SƠN", 2, true);
const participant16 = new Participant("NGUYỄN THỊ THẢO NGUYÊN", 2, true);
const participant17 = new Participant("BÙI THỊ HƯƠNG", 2, true);
const participant18 = new Participant("BÙI THỊ THANH HÒA", 2, true);
const participant19 = new Participant("NGUYỄN HOÀNG PHƯƠNG", 2, true);
const participant20 = new Participant("NGUYỄN ĐÌNH SƠN", 2, true);
const participant21 = new Participant("LÊ THỊ HỒNG PHÚ", 2, true);
const participant22 = new Participant("BÙI THỊ HỒNG", 2, true);
const participant23 = new Participant("PHAN THỊ NGỌC HUỆ", 2, true);
const participant24 = new Participant("PHẠM LÂM THANH NHÃ", 2, true);
const participant25 = new Participant("LÊ QUANG MINH", 2, true);
const participant26 = new Participant("NGUYỄN THÀNH ĐẠT", 2, true);
const participant27 = new Participant("BÙI THỊ NHƯ THẢO", 2, true);
const participant28 = new Participant("NGUYỄN THỊ NGỌC TÚ", 1, true);
const participant29 = new Participant("HUỲNH NGUYỄN THỦY THƯƠNG", 1, true);
const participant30 = new Participant("PHẠM NGỌC TRẬN", 1, true);
const participant31 = new Participant("NGUYỄN THỊ ÁNH HỒNG", 1, true);
const participant32 = new Participant("NGUYỄN NHỰT MINH TUYỀN", 1, true);
const participant33 = new Participant("NGÔ VĂN HIỆN", 1, true);
const participant34 = new Participant("LÊ TIẾN DŨNG", 1, true);
const participant35 = new Participant("PHAN MINH KHÁNH", 1, true);
const participant36 = new Participant("NGUYỄN THANH TÙNG", 1, true);
const participant37 = new Participant("NGUYỄN THANH LONG", 1, true);
const participant38 = new Participant("NGUYỄN VŨ HOÀI MỸ", 1, true);
const participant39 = new Participant("VŨ VIẾT HƯNG", 1, true);
const participant40 = new Participant("LÊ THỊ HIỀN THỤC", 1, true);
const participant41 = new Participant("NGUYỄN VĂN NĂM", 1, true);
const participant42 = new Participant("HUỲNH VĂN CHÂU", 1, true);
const participant43 = new Participant("HUỲNH LÊ KIỀU NGÂN", 1, true);
const participant44 = new Participant("NGUYỄN HỮU TRUNG KIÊN", 1, true);
const participant45 = new Participant("TRƯƠNG THỊ ÁNH THU", 1, true);
const participant46 = new Participant("LÊ NGỌC PHỈ", 1, true);
const participant47 = new Participant("PHẠM TRÌNH THIÊN Ý", 1, true);
const participant48 = new Participant("TRẦN HỮU PHƯỚC", 1, true);
const participant49 = new Participant("TRẦN NGUYỄN ANH THƯ", 1, true);
const participant50 = new Participant("NGUYỄN NHỰT MINH TIẾN", 1, true);
const participant51 = new Participant("TRẦN NGỌC THANH", 1, true);
const participant52 = new Participant("NGUYỄN ÁNH HUYỀN", 1, true);
const participant53 = new Participant("CHÂU HUỲNH NGỌC ÁNH", 1, true);
const participant54 = new Participant("TRẦN VĂN LÂM", 1, true);
const participant55 = new Participant("PHẠM VĂN DƯƠNG", 1, true);
const participant56 = new Participant("PHẠM THỊ KIM PHỤNG", 1, true);
const participant57 = new Participant("HỨA THỊ VŨ PHƯƠNG", 1, true);
const participant58 = new Participant("NGUYỄN GIANG HÀ", 1, true);
const participant59 = new Participant("TRẦN KIM NGÂN", 1, true);
const participant60 = new Participant("NGUYỄN VĂN TÁM", 1, true);
const participant61 = new Participant("NGUYỄN HOÀNG LỆ KHA", 1, true);
const participant62 = new Participant("NGUYỄN CHÍ KHANG", 1, true);
const participant63 = new Participant("HOÀNG THỊ THÁI AN", 1, true);
const participant64 = new Participant("NGUYỄN HẢI VÂN", 1, true);
const participant65 = new Participant("TRƯƠNG THỊ HỒNG HÀ", 1, true);
const participant66 = new Participant("PHẠM PHÙNG HẢI VY", 1, true);
const participant67 = new Participant("PHAN NGÔ PHƯƠNG MAI", 1, true);
const participants = [];
participants.push(participant1, participant2, participant3, participant4, participant5, participant6, participant7, participant8, participant9, participant10, participant11, participant12, participant13, participant14, participant15, participant16, participant17, participant18, participant19, participant20, participant21, participant22, participant23, participant24, participant25, participant26, participant27, participant28, participant29, participant30, participant31, participant32, participant33, participant34, participant35, participant36, participant37, participant38, participant39, participant40, participant41, participant42, participant43, participant44, participant45, participant46, participant47, participant48, participant49, participant50, participant51, participant52, participant53, participant54, participant55, participant56, participant57, participant58, participant59, participant60, participant61, participant62, participant63, participant64, participant65, participant66, participant67);
console.log(participants);
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
function pickWinner1() {
    const index = Math.random() * (66 - 0) + 0;
    const winner = participants[index];
    if (winner.number == 1) {
        return winner;
    }
    return pickWinner1();
}
if (startButton && stopButton) {
    startButton.addEventListener("click", () => {
        switch (current_prize) {
            case "KK": {
                const winnerArray = [];
                for (let i = 0; i <= 6; i++) {
                    winnerArray.push(pickWinner1());
                }
                winnerArray.forEach((winner) => {
                    console.log(winner.name + winner.number);
                });
            }
            case "6": {
            }
            case "5": {
            }
            case "4": {
            }
            case "3": {
            }
            case "2": {
            }
            case "1": {
            }
            case "DB": {
            }
        }
        startButton.disabled = true;
        stopButton.disabled = false;
    });
}
if (startButton && stopButton) {
    stopButton.addEventListener("click", () => {
        startButton.disabled = false;
        stopButton.disabled = true;
    });
}
