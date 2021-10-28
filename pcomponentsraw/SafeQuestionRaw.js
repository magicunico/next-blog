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
                        What is your mother's name?
                    </option>
                    <option>
                        What is another personal fact that an attacker could easily find with Google?
                    </option>
            </select>


        <p>selected question [waiting...]</p>

    </div>
    );
    
}