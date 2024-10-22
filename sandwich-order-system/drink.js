class Drink {
    constructor(size, variety) {
        this.size = size;
        this.variety = variety
    }

    isDrink() {
        if (this.size !== null && this.variety !== null) {
            return true;
        } else {
            return false;
        }
    }

    getDrink() {
        if (this.size !== null && this.variety !== null) {
            return [this.size, this.variety];
        }
        else {
            return "";
        }
    }

    getDrinkSTR() {
        if (this.size !== null && this.variety !== null) {
            return `You selected a <span style="color: #D32F2F;">${this.size} ${this.variety}</span> to go with your sandwich.`;
        }
        else {
            return "";
        }
    }
}