class Sides {
    constructor(sides) {
        this.sides = sides;
    }

    hasSides() {
        if (this.sides.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    getSides() {
        if (this.sides.length > 0) {
            return this.sides;
        } else {
            return "";
        }
    }

    getSidesSTR() {
        if (this.sides.length > 0) {
            if (this.sides.length === 1) {
                return `You chose a <span style="color: #D32F2F;">${this.sides[0]}</span> for your side.`;
            } else if (this.sides.length === 2) {
                return `You chose a <span style="color: #D32F2F;">${this.sides[0]}</span> and a <span style="color: #D32F2F;">${this.sides[1]}</span> for your sides.`;
            } else {
                const lastSide = this.sides.pop();
                const sidesStr = this.sides.join('</span>, a <span style="color: #D32F2F;">');
                return `You chose a <span style="color: #D32F2F;">${sidesStr}</span>, and a <span style="color: #D32F2F;">${lastSide}</span> for your sides.`;
            }
        } else {
            return "";
        }
    }
}