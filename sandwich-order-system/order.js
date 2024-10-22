class Order {
    constructor(sandwich, drink, sides, time, number, status) {
        this.sandwich = sandwich;
        this.drink = drink;
        this.sides = sides;
        this.time = time;
        this.number = number;
        this.status = status;
    }
    
    getConfirmation() {
        return `<p>${this.sandwich.getSandwichSTR()}<br>${this.drink.getDrinkSTR()}<br>${this.sides.getSidesSTR()}</p>`;
    }

    getOrderedCard() {
        let str = '';
        if (this.sandwich.getIngredients().length !== 0 && this.drink.getDrink().length !== 0 && this.sides.getSides().length !== 0) {
            str = `Order #${this.number}:<br>Sandwich: ${this.sandwich.getIngredients()}<br>Drink: ${this.drink.getDrink()}<br>Sides: ${this.sides.getSides()}`;
        } else {
            str = `Order #${this.number}:<br>`;
            if (this.sandwich.getIngredients().length !== 0) {
                str += `Sandwich: ${this.sandwich.getIngredients()}<br>`;
            } else {
                str += 'No Sandwich<br>';
            }
            if (this.drink.getDrink().length !== 0) {
                str += `Drink: ${this.drink.getDrink()}<br>`;
            } else {
                str += 'No Drink<br>';
            }
            if (this.sides.getSides().length !== 0) {
                str += `Sides: ${this.sides.getSides()}`;
            } else {
                str += 'No Sides';
            }
        }
        return `<div class="orderCard" id="order${this.number}">${str}</div>`;
    }

    getCompleteRecord() {
        let current = Date.now();
        this.completed = completed;
        let seconds = Math.floor((current - this.time) / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        let str = `Order #${this.number}: ${minutes} min ${seconds} sec`;
        if (this.sandwich.isSandwich()) {
            str += ', Sandwich';
        }
        if (this.drink.isDrink()) {
            str += ', Drink';
        }
        if (this.sides.hasSides()) {
            str += ', Sides';
        }
        return `${str}<br>`;
    }
}