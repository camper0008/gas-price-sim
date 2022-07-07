interface House {
    id: number;
    people: number;
}

export class StateManager {
    private houses: House[];
    private nextHouseId: number;

    constructor() {
        this.houses = [];
        this.nextHouseId = 0;
    }

    houseBought(houseId: number) {
        return this.houses.find((house) => house.id === houseId) !== undefined;
    }

    buyHouse() {
        this.houses.push({
            id: this.nextHouseId,
            people: 1,
        });
        this.nextHouseId++;
    }
}
