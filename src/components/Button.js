import React, { useEffect } from 'react';
const button = (props) => {
    // useEffect(()=>{
        console.log("use effect");
    // });
    return <button onClick={props.click}>Toggle person</button>
    
}
export default button;