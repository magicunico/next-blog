import {useEffect, useState} from "react";


export default function Keypad(){
    const [value, setValue] = useState('');
    // setCount(0);
 
    let clear = (event) => {
        setValue('');
    };

    let submitValue = (event)  =>{
        console.log(value);
        alert(`submitted ${value}`);
        clear();
    }

    let select = num => () => {
        var newVal = value+num;
        setValue(newVal);
        // value += num;
        console.log(num);
    }
 
    return (
        <div>
            {/* <h1 style="color: {value ? '#333' : '#ccc'}">{value ? value.replace(/\d(?!$)/g, '•') : 'enter y pin'}</h1> */}
            <h1>{value ? value.replace(/\d(?!$)/g, '•') : 'enter your pin'}</h1>
            <div class="keypad">
                <button onClick={select(1)}>1</button>
                <button onClick={select(2)}>2</button>
                <button onClick={select(3)}>3</button>
                <button onClick={select(4)}>4</button>
                <button onClick={select(5)}>5</button>
                <button onClick={select(6)}>6</button>
                <button onClick={select(7)}>7</button>
                <button onClick={select(8)}>8</button>
                <button onClick={select(9)}>9</button>

                <button disabled={!value} onClick={clear}>clear</button>
                <button onClick={select(0)}>0</button>
                <button disabled={!value} onClick={submitValue}>submit</button>
            </div>
        </div>

    )
}
