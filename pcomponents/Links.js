import { Component, useState } from "react";
import Head from 'next/head'
import { styles } from "ansi-colors";




export default function Links(){
    const [cats,setCats]=useState([
        { id: 'k-A2VfuUROg&t=26s', name: 'Rendering on the Web: Performance Implications of Application Architecture (Google I/O ’19)' },
        { id: 'wYCMnphN5c8', name: 'Svelte Tutorial for Beginners: Hydrating Svelte component' },
        { id: 'NwyQONeqRXA', name: 'React Server Side Rendering Introduction For Beginners - ReactJS ssr with Expressjs' }
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
        <div class="linksAllDiv">
            <h1>Useful links</h1>
                {cats.map((cat)=>
                    <div>
                        <a target="_blank" href={"https://www.youtube.com/watch?v="+cat.id}>
                       - {cat.name}
                    </a>
                    </div>
                )}
                <div class="linkDiv">
                    <span>
                                <input id="inputId" type="text"
                                       name="newVid" onChange={changeHandler}
                                       placeholder="Enter address"/>

                                <input id="inputIdTitle" type="text"
                                       name="newVidTitle" onChange={changeHandlerTitle}
                                       placeholder="Enter title"/>       
                    </span>

                <button class="linksButton" onClick={e=>addCatVideo(e)}>Add new</button>

             </div>
        </div>
    );
    
}