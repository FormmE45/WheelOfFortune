export class Participant {
    id;
    name;
    number;
    seniority;
    condition;
    status;
    constructor(id, name, number, seniority, condition, status) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.seniority = seniority;
        this.condition = condition;
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
