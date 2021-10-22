import React from "react";
import Light from "../Light";

const Lights = ({lights}) => {
    return (
        <>
       { lights.map(
           light => 
                < Light key = {light.name}
                        name = {light.name}
                        state = {light.state}    
                />
            ) 
       }
       </>
    )
}

export default Lights;