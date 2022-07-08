import "./Header.scss";
import { useState } from "react";

const calculateMoney = (
    manager: StateManager,
    moneyPerPerson: string,
    moneyPerHouse: string
) =>
    manager.houses.reduce(
        (previousPeople, house) => previousPeople + house.people,
        0
    ) *
        (parseInt(moneyPerPerson) ?? 0) +
    manager.houses.length * (parseInt(moneyPerHouse) ?? 0);

interface Props {
    manager: StateManager;
}
function Header({ manager }: Props) {
    const [moneyPerPerson, setMoneyPerPerson] = useState("0"); // '' is the initial state value
    const [moneyPerHouse, setMoneyPerHouse] = useState("0"); // '' is the initial state value

    return (
        <header id="header">
            <p>
                Med priser på{" "}
                <input
                    onChange={(event) => setMoneyPerPerson(event.target.value)}
                    value={moneyPerPerson}
                />{" "}
                kr. pr. person og{" "}
                <input
                    onChange={(event) => setMoneyPerHouse(event.target.value)}
                    value={moneyPerHouse}
                />{" "}
                kr. pr. husholdning, tjener du nuværende i alt{" "}
                <span className="money-earned">
                    {calculateMoney(
                        manager,
                        moneyPerPerson,
                        moneyPerHouse
                    ).toString()}
                </span>{" "}
                kr.
            </p>
        </header>
    );
}

export default Header;
