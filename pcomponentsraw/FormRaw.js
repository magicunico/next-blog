import { styles } from "ansi-colors";

export default function FormRaw(){
    return(
        <div>
            <main>
                <form className={styles.form}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" />
                    <label htmlFor="message">Last name: </label>
                    <input id="message" type="text" />
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    );
    
}