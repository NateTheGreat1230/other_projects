class Report {
    constructor(element) {
        this.element = element;
        this.calculations = [];
    }
    addCalculation(calculation) {
        this.calculations.push(calculation);
    }
    clear() {
        this.calculations = [];
        this.updateHTML();
    }
    updateHTML() {
        this.element.innerHTML = "";
        if (this.calculations.length === 0) {
            this.element.innerHTML = '';
        } else {
            let reportContent = '';
            this.calculations.forEach((calculation) => {
                reportContent += calculation.getHTML();
            });
            this.element.innerHTML = reportContent;
        }
    }
}