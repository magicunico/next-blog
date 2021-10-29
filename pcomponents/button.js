import {useEffect, useState} from "react";


export default function Button(){
    const [count, setCount] = useState(0);
    // setCount(0);
 
    let addOne = (event) => {
        console.log(count);
        var newCount = count+1;
        if(count>=10){
            alert('Okay!');
            setCount(9)
        }else{
            setCount(newCount);
        }
        
    }
 
    return (
        <div>
            <button onClick={addOne}> On scale on 1-10 how ready are you? : {count} {count <8 ? '..not enough' : '..close'} </button>
        </div>
    )
}