import {useEffect, useState} from "react";


export default function TodoFun(){
    var todos = [
		{ id: 1, done: true, description: 'Start the tutorial' },
		{ id: 2, done: false, description: 'Create template project' },
		{ id: 3, done: false, description: 'Think of the theme' },
		{ id: 4, done: false, description: 'Create first component' },
		{ id: 5, done: false, description: 'Create first page' },
		{ id: 6, done: false, description: 'Create first app' },
	];
    const [data, setData] = useState(todos);
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState("");
    let changeHandler = (event) => {
        setTodo(event.target.value)
    }
 
    

    let addTodo = (event) => {

        let newId = data.length+1;

        const todoToAdd = {
            id: newId,
            done: false,
            description:  document.getElementById("inputId").value
        };
        setLoading(true);
        event.preventDefault();
        setData([...data,todoToAdd]);
        document.getElementById("inputId").value="";
        setLoading(false);
    }
 
    let removeTodo = (rtodo) => {
        setLoading(true)
        console.log(data);
        setData(data.filter(item=>item !==rtodo))
        setLoading(false);
    }

    let changeChecked = (e, todo) =>{
        setLoading(true);
        e.preventDefault();
        console.log(data);
        let newData = Object.assign([],data);
        newData.find(obj=>{
            if(obj.id===todo.id){
                obj.done=!obj.done;
                return true;
            } else{
                return false;
            }
        });
        setData(newData);
        setLoading(false);
        
    //    setData(data);
    }
 
   
 
    if (!data) return "Loading...";
    return (
        <div>
            <main>
                <div class="todofunBoard">
                    <h1>
                        TODO App with Next.js!
                        <br/>
                        <br/>
                    </h1>
                    {
                        loading ?
                            <div>
                                ...loading
                            </div>
                            :
                            <form onSubmit={addTodo}>
                                <input class="todofunNew-todo todofunInput" id="inputId" type="text"
                                       name="todo" onChange={changeHandler}
                                       placeholder="Enter your exciting TODO item!"/>
                            </form>
                    }

                    <div className="todofunLeft">
                        <h2 class="todofunh2">todo</h2>
                        {data.filter(t=>!t.done).map((todo)=>
                        <div>
                        <input class="todofunInput" type="checkbox" checked={false} 
                        onChange={e=>changeChecked(e, todo)} 
                        />
                        {todo.description}
                        <button class="todofunButton" onClick={() => removeTodo(todo)}>x</button>
                    </div>
                        )}
                    </div>

                    <div className="todofunRight">
                        <h2>todo</h2>
                        {data.filter(t=>t.done).map((todo)=>
                        <div>
                        <label class="todofunLabel" input={{key:todo.id}}>
                        <input class="todofunInput" type="checkbox" checked={true} onChange={e=>changeChecked(e, todo)} />
                        {todo.description}
                        <button class="todofunButton" onClick={() => removeTodo(todo)}>xXX</button>
                        </label>
                         </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}