import React from 'react';

export default function ElizaBotRaw(){
    return(
        <div>
            <div class="elizaChat" style={{maxHeight: '300px'}}>
	            <h1>Eliza</h1>
	                <div class="elizaScrollable" id="scrollableDiv">  
                            <article class="eliza elizaArticle">
                                <span class="elizaSpan">How can I help you</span>
                            </article>
                    </div>
                <input/>
            </div> 
        </div>
    );
}