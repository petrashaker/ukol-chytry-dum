import React from "react";
import './style.css';

import energyImg from "./img/electricity.svg";
import waterImg from "./img/water.svg";

const Energy = ({energy}) => {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={energyImg} alt="electricity"/>
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{energy.electricity} kW</div>
                </div>
            </div>

            <div className="energy__source">
                <div className="energy__icon">
                    <img src={waterImg} alt="water"/>
                </div>

                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{energy.water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy;