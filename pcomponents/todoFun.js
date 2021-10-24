import {useEffect, useState} from "react";


export default function TodoFun(){
    var todos = [
		{ id: 1, done: false, description: 'write some docs' },
		{ id: 2, done: false, description: 'start writing JSConf talk' },
		{ id: 3, done: true, description: 'buy some milk' },
		{ id: 4, done: false, description: 'mow the lawn' },
		{ id: 5, done: false, description: 'feed the turtle' },
		{ id: 6, done: false, description: 'fix some bugs' },
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
                <div>
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
                                <input id="inputId" type="text"
                                       name="todo" onChange={changeHandler}
                                       placeholder="Enter your exciting TODO item!"/>
                            </form>
                    }

                    <div className="left">
                        <h2>todo</h2>
                        {data.filter(t=>!t.done).map((todo)=>
                        <div>
                        <input type="checkbox" checked={false} 
                        onChange={e=>changeChecked(e, todo)} 
                        />
                        {todo.description}
                        <button onClick={() => removeTodo(todo)}>x</button>
                    </div>
                        )}
                    </div>

                    <div className="right">
                        <h2>todo</h2>
                        {data.filter(t=>t.done).map((todo)=>
                        <div>
                        <label input={{key:todo.id}}>
                        <input type="checkbox" checked={true} onChange={e=>changeChecked(e, todo)} />
                        {todo.description}
                        <button onClick={() => removeTodo(todo)}>x</button>
                        </label>
                         </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}