import { useState } from "react"
import "./House.scss"

function randomNumber(max: number) {
    const { floor, random } = Math
    return floor(random() * max)
}

function randomItem(arr: string[]) {
    return arr[randomNumber(arr.length)]
}

function randomPerson(count: number) {
    const people = ["👩", "👨", "🧑"]
    const skintones = ["🏻", "🏼", "🏽", "🏾", "🏿"]
    const uniqueTrait = ["‍🦰", "‍🦲", "‍🦳", "‍🦱"]
    uniqueTrait.push(...["", "", "", "", "", "", "", ""])

    let result = ""
    for (let i = 0; i < count; i++) {
        result +=
            randomItem(people) + randomItem(skintones) + randomItem(uniqueTrait)
    }

    return result
}

function House(props) {
    return (
        <div className="house-container">
            <div
                className={
                    "house " + (props.bought ? "bought" : "interactable")
                }
            >
                <div className="house-status">
                    {!props.bought ? "➕" : <BoughtHouseStatus />}
                </div>
            </div>
        </div>
    )
}

function BoughtHouseStatus(props) {
    const [people, setPeople] = useState(1)

    return (
        <>
            <div className="house-icon">{"🏠"}</div>
            <div className="house-person">{randomPerson(people)}</div>
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
    )
}

export default House
