export default function TodoFunRaw(){

    return (
        <div>
            <main>
                <div class="todofunBoard">
                    <h1>
                        TODO App with Next.js!
                        <br/>
                        <br/>
                    </h1>
                    <form>
                        <input class="todofunInput" id="inputId" type="text"name="todo" placeholder="Enter your exciting TODO item!"/>
                    </form>
            
                    <div className="todofunLeft">
                        <h2 class="todofunh2">todo</h2>
                        <div>
                            <input class="todofunInput" type="checkbox" checked={false}/>
                            Create template project
                            <button class="todofunButton">x</button>
                        </div>

                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            Think of the theme
                            <button class="todofunButton">x</button>
                        </div>

                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            Create first component
                            <button class="todofunButton">x</button>
                        </div>
                    
                        <div>
                            <input class="todofunInput" type="checkbox" checked={false}/>
                            Create first page
                            <button class="todofunButton">x</button>
                        </div>
                    
                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            Create first app
                            <button class="todofunButton">x</button>
                        </div>
                    </div>

                    <div className="todofunRight">
                        <h2 class="todofunh2">Done</h2>
                        <div>
                            <label class="todofunLabel">
                            <input  class="todofunInput" type="checkbox" checked={true}/>
                            Start the tutorial
                            <button class="todofunButton">x</button>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}