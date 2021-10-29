export default function SafeQuestionRaw(){
    
    return(
        <div>
            <h2>Insecurity questions</h2>

            <form>
                <input class="safeQuestionInput"/>
                <button>
                    Submit  
                </button>
            </form>

            <select>
                    <option>
                 Where did you go to school?
         
                    </option>
                    <option>
                    What is your dream job?
         
                    </option>
                    <option>
                    What is another app you want to build with using hydration?
                    </option>
            </select>


        <p>selected question [waiting...]</p>

    </div>
    );
    
}