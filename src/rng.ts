function randomItem(arr: string[], rng: RNG) {
    const idx = rng.nextRange(0, arr.length);
    return arr[idx];
}

export function randomPeople(count: number, houseNumber: number) {
    console.log(houseNumber);
    const rng = new RNG(1 + houseNumber ** 2);
    const people = ["👩", "👨", "🧑"];
    const skintones = ["🏻", "🏼", "🏽", "🏾", "🏿"];
    const uniqueTrait = ["‍🦰", "‍🦲", "‍🦳", "‍🦱"];
    uniqueTrait.push(...["", "", "", "", "", "", "", "", "", "", "", ""]);

    let result = "";
    for (let i = 0; i < count; i++) {
        result +=
            randomItem(people, rng) +
            randomItem(skintones, rng) +
            randomItem(uniqueTrait, rng);
    }

    return result;
}

class RNG {
    private m: number;
    private a: number;
    private c: number;

    private state: number;

    constructor(seed: number) {
        // LCG using GCC's constants
        this.m = 0x80000000; // 2**31
        this.a = 1103515245;
        this.c = 12345;
        this.state = seed;
    }

    nextInt() {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }

    nextRange(start: number, end: number) {
        // returns in range [start, end): including start, excluding end
        // can't modulu nextInt because of weak randomness in lower bits
        var rangeSize = end - start;
        var randomUnder1 = this.nextInt() / this.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    }
}
