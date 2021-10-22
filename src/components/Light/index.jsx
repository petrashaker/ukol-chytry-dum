import React, { useState } from "react";
import './style.css';

import lightOn from './img/light-on.svg';
import lightOff from './img/light-off.svg';

const Light = ({name, state}) => {
    const [toggle, setToggle] = useState(state);

    return (
        <div className="light" onClick = {() => toggle === 'on' ? setToggle('off') : setToggle('on')}>
            <div className="light__icon">
                {toggle === 'on' ? 
                    <img className="light__icon--img" src={lightOn} alt="light-on" /> 
                    : 
                    <img className="light__icon--img" src={lightOff} alt="light-off" /> 
                }
            </div>
            <div className="light__name">{name}</div>
        </div>
    )
}

export default Light;