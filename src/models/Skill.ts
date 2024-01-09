interface Skill {
    title: string;
    firstUsed: Date;
    lastUsed: Date;
    lengthOfUse: number;
    weight: number;
}

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
        this.lengthOfUse = this._calcuateLengthOfUse();
        this.weight = this._calculateWeight();
    }

    private _calculateWeight(): number {
        let weight = 0;
        let today = new Date();
        let diff = today.getTime() - new Date(this.lastUsed).getTime();

        //+1 used in last 2 years
        let twoYearsAgo = new Date(today.getTime() - 60 * 60 * 24 * 365 * 2);
        let ratio = diff / twoYearsAgo.getTime();
        if (ratio > 0) {
            weight += ratio;
        }

        return weight;
    }

    private _calcuateLengthOfUse() {
        return this.lastUsed.getTime() - this.firstUsed.getTime();
    }
}

export { Skill };
