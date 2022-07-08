import "./App.scss";
import Grid from "./Grid";
import Header from "./Header";
import Footer from "./Footer";
import { StateManager, House } from "./StateManager";
import { useState } from "react";

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
            <Header manager={manager} />
            <Grid manager={manager} />
            <Footer />
        </div>
    );
}

export default App;
