import "./Grid.scss";
import { House, HouseBuyButton } from "./House";
import { StateManager } from "./StateManager";

interface Props {
    manager: StateManager;
}

function Grid({ manager }: Props) {
    return (
        <div className="grid">
            {manager.houses.map((house) => (
                <House manager={manager} houseId={house.id} key={house.id} />
            ))}

            <HouseBuyButton manager={manager} />
        </div>
    );
}

export default Grid;
