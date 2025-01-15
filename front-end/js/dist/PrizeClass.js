export class Prize {
    id;
    name;
    status;
    done;
    numOfPrizes;
    button;
    constructor(id, name, status, done, numOfPrizes) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.done = done;
        this.numOfPrizes = numOfPrizes;
    }
    disableButton() {
        if (this.button) {
            this.button.disabled = true;
        }
    }
    enableButton() {
        if (this.button) {
            this.button.disabled = false;
        }
    }
}
