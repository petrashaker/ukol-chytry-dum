import React from "react";
import Blinds from "../Blinds/indes";
import Climate from "../Climate";
import Energy from "../Energy";
import Lights from "../Lights";
import './style.css';

const Dashboard = ({smartHomeData}) => {
    return (
        <main className="dashboard">
            <Lights className="lights" lights={smartHomeData.lights} />
            <Climate climate={smartHomeData.climate} />
            {/* <Climate temperature={smartHomeData.climate.temperature} humidity={smartHomeData.climate.humidity}/> */}
            <Blinds state={smartHomeData.blinds} />
            <Energy energy={smartHomeData.energyConsumption}/>
        </main>
    )
}

export default Dashboard;