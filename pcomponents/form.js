import { useState } from "react";
import Head from 'next/head'
import { styles } from "ansi-colors";

export default function Form(){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        alert(name+" "+message+" lets start!")
    };

    return(
        <div>
            <Head>
                <title> App</title>
                <link rel="icon" href="/"/>
            </Head>
            <main>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" onChange={e=>setName(e.target.value)} />
                    <label htmlFor="message">Last name: </label>
                    <input id="message" type="text" onChange={e=>setMessage(e.target.value)} />
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    );
    
}