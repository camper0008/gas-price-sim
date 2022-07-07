import "./App.scss";
import Grid from "./Grid";
import { StateManager, House } from "./StateManager";
import { useState } from "react";

interface Props {
    manager: StateManager;
}

function App() {
    const [houses, setHouses] = useState([] as House[]);
    const [nextHouseId, setNextHouseId] = useState(0);
    const manager = new StateManager(
        houses,
        setHouses,
        nextHouseId,
        setNextHouseId
    );
    return (
        <div className="App">
            <Grid manager={manager} />
        </div>
    );
}

export default App;
