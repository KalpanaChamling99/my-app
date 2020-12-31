import React, { useEffect } from 'react';
const Button = props => {
    useEffect(()=>{
        console.log("[Button.js] use effect");
        setTimeout(()=>{
            alert('hello world');
        },1000);
        return() =>{
            // clearTimeout(timer);
            console.log('[Button.js] clean up work in use effect')
        } 
    },[]);
    useEffect(()=>{
        console.log("[Button.js] 2nd use effect");
        return() =>{
            console.log('[Button.js] clean up work in 2nd use effect')
        } 
    });
    
    return <button onClick={props.click}>Toggle person</button>
}
export default Button;