import { randomItem, RNG } from "./rng";

const isWindows = () => {
    return (
        navigator.userAgent.indexOf("Windows") !== -1 ||
        navigator.userAgent.indexOf("Win64") !== -1
    );
};

export function randomPeople(count: number, houseNumber: number) {
    const rng = new RNG(1 + houseNumber ** 2);
    const people = ["đ©", "đš", "đ§"];
    const skintones = ["đ»", "đŒ", "đœ", "đŸ", "đż"];
    const uniqueTrait = ["âđŠ°", "âđŠČ", "âđŠł", "âđŠ±"];
    uniqueTrait.push(...["", "", "", "", "", "", "", "", "", "", "", ""]);

    let result = "";
    for (let i = 0; i < count; i++) {
        result += randomItem(people, rng) + randomItem(skintones, rng);

        // windows emojis do not support hair traits
        if (!isWindows()) result += randomItem(uniqueTrait, rng);
    }

    return result;
}
