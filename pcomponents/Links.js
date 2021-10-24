import { Component, useState } from "react";
import Head from 'next/head'
import { styles } from "ansi-colors";




export default function Links(){
    const [cats,setCats]=useState([
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
      ]);
      const [newVid, setNewVid] = useState("");
      const [newVidTitle, setNewVidTitle] = useState("");

      let changeHandler = (event) => {
          console.log(event.target.value);
        setNewVid(event.target.value)
    }

    let changeHandlerTitle = (event) => {
        console.log(event.target.value);
        setNewVidTitle(event.target.value)
    }

      let addCatVideo = (e) => {
        e.preventDefault();
        let videoToAdd={
            id: newVid.replace('https://www.youtube.com/watch?v=',''),
            name: newVidTitle
        }
        console.log(videoToAdd);
        setCats([...cats,videoToAdd]);
        document.getElementById("inputId").value="";
        document.getElementById("inputIdTitle").value="";
    }

    return(
        <div>
            
                                <input id="inputId" type="text"
                                       name="newVid" onChange={changeHandler}
                                       placeholder="Enter address"/>

                                <input id="inputIdTitle" type="text"
                                       name="newVidTitle" onChange={changeHandlerTitle}
                                       placeholder="Enter title"/>       

                <button onClick={e=>addCatVideo(e)}>XXX</button>

             {cats.map((cat)=>
                <div>
                    <a target="_blank" href={"https://www.youtube.com/watch?v="+cat.id}>
                    {cat.name}
                </a>
                </div>
             )}
        </div>
    );
    
}