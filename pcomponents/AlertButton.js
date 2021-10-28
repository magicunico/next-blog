import {useEffect, useState} from "react";


export default function AlertButton(){
    
    let buttonName = 'Click me';
    let alertText = 'clicked';
 
    let handleClick=()=> {
		alert(alertText);
	}
    return (
        <div>
            <button className="alertButton" onClick={handleClick}> {buttonName}</button>
        </div>
    )
}