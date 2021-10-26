import { Component, useState } from "react";
import Head from 'next/head'
import { styles } from "ansi-colors";




export default function SafeQuestion(){
    const [questions,setQuestions]=useState([
       `Where did you go to school?`,
       `What is your mother's name?`,
        `What is another personal fact that an attacker could easily find with Google?` 
    ]);
      const [selected, setSelected] = useState("");
      const [answer, setAnswer] = useState("");

    let handleSumbit = (event) => {
        event.preventDefault();
        let alertText = "Answered question"+selected+" with "+answer;
        alert(alertText)

    }


    let getAnswer = (e)=>{
        e.preventDefault();
        setAnswer(document.getElementById("answerInput").value);
    }

    let getSelected = (e)=>{
        e.preventDefault();
        console.log(questions);
        setSelected(e.target.value);
        console.log(selected);
        
        // console.log(selectedQuestion)
        // setSelected(selectedQuestion);
    }

    return(
        <div>
            <h2>Insecurity questions</h2>

            <form onSubmit={handleSumbit}>


            <input id="answerInput" onChange={getAnswer}/>
            <button disabled={!answer} type="submit">
		        Submit  
	        </button>
            </form>

        
            <select value={selected} onChange={(e)=>getSelected(e)}>
                {questions.map((option, index) => 
                    <option key={index} 
                        value={option}>
                        {option}
                    </option>
                )}
            </select>


        <p>selected question {selected ? selected : '[waiting...]'}</p>

    </div>
    );
    
}