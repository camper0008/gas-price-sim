import { useState } from "react";
import "./House.scss";
import { randomPeople } from "./rng";
import { StateManager } from "./StateManager";

interface Props {
    houseId: number;
    manager: StateManager;
}

function House({ houseId, manager }: Props) {
    const isBought = manager.houseBought(houseId);
    return (
        <div className="house-container">
            <div className={"house " + (isBought ? "bought" : "interactable")}>
                <div className="house-status">
                    {!isBought ? "➕" : <BoughtHouseStatus />}
                </div>
            </div>
        </div>
    );
}

function BoughtHouseStatus() {
    const [people, setPeople] = useState(1);

    return (
        <>
            <div className="house-icon">
                <button className="interactable">{"💣"}</button>
                <span>{"🏠"}</span>
            </div>
            <div className="house-person">{randomPeople(people, 1)}</div>
            <div className="house-buttons">
                <button
                    className={people === 1 ? "disabled" : "interactable"}
                    onClick={() => setPeople(Math.max(people - 1, 1))}
                >
                    {"➖"}
                </button>
                <button
                    className={people === 6 ? "disabled" : "interactable"}
                    onClick={() => setPeople(Math.min(people + 1, 6))}
                >
                    {"➕"}
                </button>
            </div>
        </>
    );
}

export default House;
