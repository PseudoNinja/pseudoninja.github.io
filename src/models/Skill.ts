class Skill {
    title: string;
    firstUsed: Date;
    lastUsed: Date;
    lengthOfUse: number = 0.0;
    weight: number = 0.0;

    constructor(title: string, firstUsed: Date, lastUsed: Date) {
        this.title = title;
        this.firstUsed = firstUsed;
        this.lastUsed = lastUsed;
        this.weight = this._calculateWeight();
    }

    private _calculateWeight(): number {
        let weight = 0;

        weight += this._calcuateRatio();
        weight += this._calculateTwoYearRatio();
        return weight;
    }

    private _calcuateLengthOfUse(): number {
        return this.lastUsed.getTime() - this.firstUsed.getTime();
    }

    private _calculateTotalLength(): number {
        return new Date().getTime() - new Date("2004/01/01").getTime();
    }

    private _calcuateRatio(): number {
        return this._calcuateLengthOfUse() / this._calculateTotalLength();
    }

    // if used in the last two years; give bonus equal to last used / now
    private _calculateTwoYearRatio(): number {
        let ratio: number = 0.0;
        let twoYearsAgo = new Date(
            new Date().getTime() - 60 * 60 * 24 * 365 * 2
        );
        if (this.lastUsed.getTime() > twoYearsAgo.getTime()) {
            ratio = this.lastUsed.getTime() / new Date().getTime();
        }

        return ratio;
    }
}

export { Skill };
