import React, {useState} from "react";
import Blinds from "../Blinds/indes";
import Climate from "../Climate";
import Energy from "../Energy";
import Lights from "../Lights";
import './style.css';

const Dashboard = ({smartHomeData: {lights, climate, blinds, energyConsumption}}) => {
    const [numOfLights, setNumOfLights] = useState(2);

    return (
        <main className="dashboard">
            <Lights className="lights" lights={lights} setNumOfLights={setNumOfLights} />
            <Climate climate={climate} />
            <Blinds blinds={blinds}/>
            <Energy electricity={energyConsumption.electricity} water={energyConsumption.water} numOfLights={numOfLights}/>
        </main>
    )
}

export default Dashboard;