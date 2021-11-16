import React, { useState } from "react";
import './style.css';

import lightOn from './img/light-on.svg';
import lightOff from './img/light-off.svg';

const Light = ({name, state, setNumOfLights}) => {
    const [light, setLight] = useState(state);

    const handleClick = () => {
        if(light === 'on') {
            setLight('off');
            setNumOfLights(prev => prev - 1);
        } else if (light === 'off') {
            setLight('on');
            setNumOfLights(prev => prev + 1);
        }
    }

    return (
        <div className="light" onClick ={handleClick}>
            <div className="light__icon">
                <img className="light__icon--img" src={light === 'on' ? lightOn : lightOff} alt="light-on" /> 
            </div>
            <div className="light__name">{name}</div>
        </div>
    )
}

export default Light;