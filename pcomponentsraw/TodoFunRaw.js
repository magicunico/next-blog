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
                            write some docs
                            <button class="todofunButton">x</button>
                        </div>

                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            start writing JSConf talk
                            <button class="todofunButton">x</button>
                        </div>

                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            mow the lawn
                            <button class="todofunButton">x</button>
                        </div>
                    
                        <div>
                            <input class="todofunInput" type="checkbox" checked={false}/>
                            feed the turtle
                            <button class="todofunButton">x</button>
                        </div>
                    
                        <div>
                            <input  class="todofunInput" type="checkbox" checked={false}/>
                            fix some bugs
                            <button class="todofunButton">x</button>
                        </div>
                    </div>

                    <div className="todofunRight">
                        <h2 class="todofunh2">todo</h2>
                        <div>
                            <label class="todofunLabel">
                            <input  class="todofunInput" type="checkbox" checked={true}/>
                            buy some milk
                            <button class="todofunButton">x</button>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}