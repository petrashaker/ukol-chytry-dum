import React from "react";
import Light from "../Light";

const Lights = ({lights, setNumOfLights}) => {
    return (
        <>
       { lights.map(
           light => 
                < Light key = {light.name}
                        name = {light.name}
                        state = {light.state}
                        setNumOfLights = {setNumOfLights}  
                />
            ) 
       }
       </>
    )
}

export default Lights;