import {useEffect, useState} from "react";


export default function Todo(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState("");
    let changeHandler = (event) => {
        setTodo(event.target.value)
    }
 
    let addTodo = (event) => {
        console.log("Adding");
        setLoading(true);
        console.log("This is data: "+ data);
        console.log("this is todo: " + todo);
        event.preventDefault();
        var updatedData = [...data,todo];
        console.log("This is updated data: "+ updatedData);
        // this.setData([...data,todo]);
        setData([...data,todo]);
        console.log("this is data after setting" + data);
        document.getElementById("inputId").value="";
        setLoading(false);
    }
 
    let removeTodo = (rtodo) => {
        setLoading(true)
        let newData = data.filter(item=>item !==rtodo)
        setData(data.filter(item=>item !==rtodo))
        console.log(newData)
        setLoading(false);
    }
 
    let loadTodos = () => {
        console.log("load todos")
        setData(data)
        setLoading(false)        
    }
 
    useEffect(() => {
        setLoading(true)
        loadTodos()
    }, [])
 
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
 
                    {data.map((item) =>
                        <a href="#" onClick={() => removeTodo(item)}>
                            <p>{item}</p>
                        </a>)}
                </div>
            </main>
        </div>
    )
}