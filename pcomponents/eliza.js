import { Component, useState } from "react";
import Head from 'next/head'
import { styles } from "ansi-colors";
import Eliza from 'elizabot';
import React from 'react';



export default function ElizaBot(){
    const eliza = new Eliza();
    const [comments, setComments] = useState([{author: 'eliza', text: eliza.getInitial()}]);
    const [autoScroll,setAutoscroll] = useState(false);
        let handleKeyDownF=(event)=>{

        let div=document.getElementById('scrollableDiv');
        setAutoscroll(div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20));
        if(event.key === 'Enter'){
            const myText = event.target.value;
            console.log(myText);
            if(!myText) return;

            console.log(comments);

            let mComments = comments.concat({
                author: 'user',
                text: myText
            });
            setComments(mComments);
            console.log('xxxx')
            console.log(comments);
            console.log(myText + 'XD');
            event.target.value='';

            const reply = eliza.transform(myText);
            console.log(reply);

            setTimeout(() => {
				let wComments = mComments.concat({
					author: 'eliza',
					text: '...',
					placeholder: true
				});
                setComments(wComments);

				setTimeout(() => {
                    let	newComments = wComments.filter(comment => !comment.placeholder).concat({
						author: 'eliza',
						text: reply
					});
                    setComments(newComments);
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
        if (autoScroll) div.scrollTo(0, div.scrollHeight);

            // setComments(newComments);

        }
    


    return(
        <div>
            <div class="elizaChat" style={{maxHeight: '300px'}}>
	            <h1>Eliza</h1>
	                <div class="elizaScrollable" id="scrollableDiv">  
                        {comments.map((comment)=>
                            <article class={comment.author}>
                                <span class="elizaSpan">{comment.text}</span>
                            </article>
                        )}
                    </div>
                <input onKeyDown={handleKeyDownF}/>
            </div> 
        </div>
    );
    
}