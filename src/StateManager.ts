import { Dispatch, SetStateAction } from "react";
type HouseSetState = Dispatch<SetStateAction<House[]>>;
type NextHouseIdSetState = Dispatch<SetStateAction<number>>;

export interface House {
    id: number;
    people: number;
}

export class StateManager {
    public readonly houses: House[];
    private setHouses: HouseSetState;
    private nextHouseId: number;
    private setNextHouseId: NextHouseIdSetState;

    constructor(
        houses: House[],
        setHouses: HouseSetState,
        nextHouseId: number,
        setNextHouseId: NextHouseIdSetState
    ) {
        this.houses = houses;
        this.setHouses = setHouses;
        this.nextHouseId = nextHouseId;
        this.setNextHouseId = setNextHouseId;
    }

    houseBought(houseId: number) {
        return this.houses.find((house) => house.id === houseId) !== undefined;
    }

    buyHouse() {
        const houses = [...this.houses];
        houses.push({
            id: this.nextHouseId,
            people: 1,
        });
        this.setNextHouseId(this.nextHouseId + 1);

        this.setHouses(houses);
    }

    sellHouse(houseId: number) {
        this.setHouses(
            [...this.houses].filter((house) => house.id !== houseId)
        );
    }

    increasePeople(houseId: number) {
        this.setHouses(
            [...this.houses].map((house: House) => {
                if (house.id !== houseId) return house;

                const { id, people: oldPeople } = house;
                const people = Math.min(6, oldPeople + 1);
                const newHouse = { id, people };

                return newHouse;
            })
        );
    }

    decreasePeople(houseId: number) {
        this.setHouses(
            [...this.houses].map((house: House) => {
                if (house.id !== houseId) return house;

                const { id, people: oldPeople } = house;
                const people = Math.max(1, oldPeople - 1);
                const newHouse = { id, people };

                return newHouse;
            })
        );
    }

    people(houseId: number) {
        const house = this.houses.find((house) => house.id === houseId);
        if (house === undefined) {
            console.log("got invalid house id: ", houseId);
            return 0;
        }
        return house.people;
    }
}
