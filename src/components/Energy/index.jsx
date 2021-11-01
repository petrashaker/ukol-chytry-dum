import React, { useEffect, useState } from "react";
import './style.css';

import energyImg from "./img/electricity.svg";
import waterImg from "./img/water.svg";

const Energy = ({electricity, water, numOfLights}) => {

    const [consumptionEl, setConsumptionEl] = useState(electricity);
    const num = 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setConsumptionEl(prevState => prevState + (numOfLights * num));
        }, 1000);
        return () => {clearInterval(interval)};
    }, [numOfLights]);
    
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={energyImg} alt="electricity"/>
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{consumptionEl} W</div>
                </div>
            </div>

            <div className="energy__source">
                <div className="energy__icon">
                    <img src={waterImg} alt="water"/>
                </div>

                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy;