class Calculation {
    constructor(amount, interest, years) {
        this.amount = amount;
        this.interest = interest;
        this.years = years;
    }
    getPayment() {
        const r = (this.interest/100)/12;
        const n = this.years*12;
        return (this.amount*((r*Math.pow((1+r), n))/(Math.pow((1+r), n)-1))).toFixed(2);
    }
    getHTML() {
        const payment = this.getPayment(); 
        return `<p>A loan amount of $${this.amount} and a rate of ${this.interest}% for ${this.years} years results in a monthly payment of $${payment}</p>`;
    }
}