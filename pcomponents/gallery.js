import {useEffect, useState} from "react";
import images from'./images'
import React from 'react';
import createRouteLoader from "next/dist/client/route-loader";


export default function Gallery(){
    // setCount(0);
    const [selected, setSelected]= useState(false);
    const [srcImg, setsrcImg]= useState("");
    // const [myImage,setMyImage] = useState(null);

	 
    //  let selectedId = null;


    
	let load = (image) => {
		// const timeout = setTimeout(() => loading = image, 100);
        setSelected(true);
        console.log(image.id);
        console.log(srcImg);
        let imgSrc = "https://sveltejs.github.io/assets/crossfade/"+image.id+".jpg"; 
        setsrcImg(`https://sveltejs.github.io/assets/crossfade/${image.id}.jpg`);
         console.log(imgSrc);
         console.log(srcImg);

       
	};
        
    
 
    return (
        <div class="container">
        <div class="phone">
            <h1>Photo gallery</h1>
            <div class="grid">
            {images.map((image)=>
            
                    <div class="square">

                            <button
                                style={{backgroundColor: image.color}}
                                onClick={() => load(image)}
                            >{image.id}</button>

                        {selected ? 
                        <div>
                         <img src= {srcImg} onClick={() => setSelected(false)}/>
                        </div>
                        :
                        <div></div>
                        }
                    </div>
                )}
            </div>
    
            {/* {
                selected ?

                <div class="photo">
                        <img
                            alt={selectedImage.alt}
                            src="{ASSETS}/{d.id}.jpg"
                            onClick={() => selected = null}
                        />
    
                        <p class='credit'>
                            <a target="_blank" href="https://www.flickr.com/photos/{d.path}">via Flickr</a> &ndash;
                            <a target="_blank" href={d.license.url}>{d.license.name}</a>
                        </p>
                    </div>
                    :
                    <div></div>

            } */}
           
        </div>
    </div>
    )
}