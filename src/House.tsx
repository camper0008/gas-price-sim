import { useState } from "react";
import "./House.scss";
import { randomPeople } from "./rng";
import { StateManager } from "./StateManager";

interface HouseProps {
    houseId: number;
    manager: StateManager;
}

interface HouseBuyButtonProps {
    manager: StateManager;
}

export function HouseBuyButton({ manager }: HouseBuyButtonProps) {
    return (
        <button className="house-container" onClick={() => manager.buyHouse()}>
            <div className={"house interactable"}>
                <div className="house-status">{"➕"}</div>
            </div>
        </button>
    );
}

export function House({ houseId, manager }: HouseProps) {
    return (
        <div className="house-container">
            <div className={"house bought"}>
                <div className="house-status">
                    <BoughtHouseStatus manager={manager} houseId={houseId} />
                </div>
            </div>
        </div>
    );
}

function BoughtHouseStatus({ houseId, manager }: HouseProps) {
    const people = manager.people(houseId);
    return (
        <>
            <div className="house-icon">
                <button
                    className="interactable"
                    onClick={() => manager.sellHouse(houseId)}
                >
                    {"❌"}
                </button>
                <span>{"🏠"}</span>
            </div>
            <div className="house-person">{randomPeople(people, houseId)}</div>
            <div className="house-buttons">
                <button
                    className={people === 1 ? "disabled" : "interactable"}
                    onClick={() => manager.decreasePeople(houseId)}
                >
                    {"➖"}
                </button>
                <button
                    className={people === 6 ? "disabled" : "interactable"}
                    onClick={() => manager.increasePeople(houseId)}
                >
                    {"➕"}
                </button>
            </div>
        </>
    );
}
