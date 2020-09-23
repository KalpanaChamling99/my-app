import React, { useEffect } from 'react';
const Button = props => {
    useEffect(()=>{
        console.log("use effect");
        setTimeout(()=>{
            alert('hello world');
        },1000); 
    },[ ]);
    
    return <button onClick={props.click}>Toggle person</button>
}
export default Button;