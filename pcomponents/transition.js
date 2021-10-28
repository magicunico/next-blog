import {useEffect, useState} from "react";


export default function Transition(){
    const [visible, setVisible] = useState(false);

    // setCount(0);

 
    let changeVisibility = (event) => {
        var newVisibility = !visible;
        spin();
        setVisible(newVisibility);
    };

    let spin=()=> {
            var div = document.getElementById('image'),
                angle = visible ? 0 : 180;
        
            div.style.webkitTransform = 'rotate('+ angle +'deg)'; 
            div.style.mozTransform    = 'rotate('+ angle +'deg)'; 
            div.style.msTransform     = 'rotate('+ angle +'deg)'; 
            div.style.oTransform      = 'rotate('+ angle +'deg)'; 
            div.style.transform       = 'rotate('+ angle +'deg)'; 
	}

    return (
        <div>
            <div>
          <label>
	        <input type="checkbox" onChange={changeVisibility}/>Visibility
        </label>
        </div>
        <div>
        {visible? 
            <div class="transitionCentered">
                <div class="transitionDiv" id="image">transitions!</div>
            </div>
            :
            <div class="transitionCentered">
                <div class="transitionDiv" id="image"></div>
            </div>
        }
        </div>
        </div>

    )
}
