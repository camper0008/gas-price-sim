import "./Grid.scss"
import House from "./House"

function Grid() {
    return (
        <div className="grid">
            <House bought />
            <House />
            <House />
            <House />
        </div>
    )
}

export default Grid
