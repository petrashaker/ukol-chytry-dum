import React, { useState } from "react";
import './style.css';

import blindsOpen from './img/blinds-open.svg';
import blindsClosed from './img/blinds-closed.svg';

const Blinds = ({blinds}) => {
    const [blindState, setBlindState] = useState(blinds);

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindState === 'open' ? blindsOpen : blindsClosed} alt="blinds-open"/>
            </div>

            <div className="blinds__name">
                Žaluzie
            </div>
            
            <div className="blinds__controls">
                <button className={blindState === 'open' ? "button button--active" : "button"} 
                        onClick={() => setBlindState('open')}>
                            Otevřeno
                </button>

                <button className={blindState === 'close'? "button button--active" : "button"}  
                        onClick={() => setBlindState('close')}>
                            Zavřeno
                </button>
            </div>
        </div>
    )
}

export default Blinds;