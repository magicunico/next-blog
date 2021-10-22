import {useEffect, useState} from "react";


export default function Button(){
    const [count, setCount] = useState(0);
    // setCount(0);
 
    let addOne = (event) => {
        console.log(count);
        var newCount = count+1;
        if(count>=10){
            alert('Count is dangerously high!');
            setCount(9)
        }else{
            setCount(newCount);
        }
        
    }
 
    return (
        <div>
            <button onClick={addOne}> Cliked {count} {count===1 ? 'time' : 'times'} </button>
        </div>
    )
}