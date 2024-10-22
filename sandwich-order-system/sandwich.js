class Sandwich {
    constructor(size, bread, meat, cheese, toppings) {
        this.size = size;
        this.bread = bread;
        this.meat = meat;
        this.cheese = cheese;
        this.toppings = toppings;
    }
    
    isSandwich() {
        if (this.getIngredients().length >= 4 && this.size !== null && this.bread !== null && this.meat !== null && this.cheese !== null) {
            return true;
        } else {
            return false;
        }
    }

    getIngredients() {
        if (this.size === null || this.bread === null || this.meat === null || this.cheese === null) {
            return [];
        } else {
            return [this.size, this.bread, this.meat, this.cheese, ...this.toppings];
        }
    }

    getSandwichSTR() {
        if (this.getIngredients().length >= 4 && this.size !== null && this.bread !== null && this.meat !== null && this.cheese !== null) {
            if (this.toppings.length > 0) {
                if (this.toppings.length === 1) {
                    return `You selected a <span style="color: #D32F2F;">${this.size}</span> sandwich made with <span style="color: #D32F2F;">${this.bread}</span> bread, <span style="color: #D32F2F;">${this.meat}</span> as the main ingredient and <span style="color: #D32F2F;">${this.cheese}</span> cheese. The topping you want on the sandwich is <span style="color: #D32F2F;">${this.toppings}</span>.`;
                } else if (this.toppings.length === 2) {
                    return `You selected a <span style="color: #D32F2F;">${this.size}</span> sandwich made with <span style="color: #D32F2F;">${this.bread}</span> bread, <span style="color: #D32F2F;">${this.meat}</span> as the main ingredient and <span style="color: #D32F2F;">${this.cheese}</span> cheese. The toppings you wanted on the sandwich are <span style="color: #D32F2F;">${this.toppings[0]}</span> and <span style="color: #D32F2F;">${this.toppings[1]}</span>.`;

                } else {
                    const lastTop = this.toppings.pop();
                    const topStr = this.toppings.join('</span>, <span style="color: #D32F2F;">');
                    return `You selected a <span style="color: #D32F2F;">${this.size}</span> sandwich made with <span style="color: #D32F2F;">${this.bread}</span> bread, <span style="color: #D32F2F;">${this.meat}</span> as the main ingredient and <span style="color: #D32F2F;">${this.cheese}</span> cheese. The toppings you wanted on the sandwich are <span style="color: #D32F2F;">${topStr}</span> and <span style="color: #D32F2F;">${lastTop}</span>.`;
                }
            } else {
                return `You selected a <span style="color: #D32F2F;">${this.size}</span> sandwich made with <span style="color: #D32F2F;">${this.bread}</span> bread, <span style="color: #D32F2F;">${this.meat}</span> as the main ingredient and <span style="color: #D32F2F;">${this.cheese}</span> cheese.`;
            }
        } else if (this.size === null || this.bread === null || this.meat === null || this.cheese === null) {
            let str = "To order a sandwich please select at least the following ingredients: ";
            if (this.size === null) {
                str += "a size";
            }
            if (this.bread === null) {
                if (str === "To order a sandwich please select at least the following ingredients: ") {
                    str += "a bread";
                } else {
                    str += ", a bread";
                }
            }
            if (this.meat === null) {
                if (str === "To order a sandwich please select at least the following ingredients: ") {
                    str += "a meat";
                } else {
                    str += ", a meat";
                }
            }
            if (this.cheese === null) {
                if (str === "To order a sandwich please select at least the following ingredients: ") {
                    str += "a cheese";
                } else {
                    str += ", a cheese";
                }
            }
            return str;
        } else {
            return "";
        }        
    }
}