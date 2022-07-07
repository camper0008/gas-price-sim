import { randomItem, RNG } from "./rng";

const isWindows = () => {
    return (
        navigator.userAgent.indexOf("Windows") !== -1 ||
        navigator.userAgent.indexOf("Win64") !== -1
    );
};

export function randomPeople(count: number, houseNumber: number) {
    const rng = new RNG(1 + houseNumber ** 2);
    const people = ["👩", "👨", "🧑"];
    const skintones = ["🏻", "🏼", "🏽", "🏾", "🏿"];
    const uniqueTrait = ["‍🦰", "‍🦲", "‍🦳", "‍🦱"];
    uniqueTrait.push(...["", "", "", "", "", "", "", "", "", "", "", ""]);

    let result = "";
    for (let i = 0; i < count; i++) {
        result += randomItem(people, rng) + randomItem(skintones, rng);

        // windows emojis do not support hair traits
        if (!isWindows()) result += randomItem(uniqueTrait, rng);
    }

    return result;
}
