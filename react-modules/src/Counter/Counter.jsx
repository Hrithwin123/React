import styles from "./Counter.module.css"
import React, {useState} from "react"

function Counter(){

    const [number, setNumber] = useState(0);

    const decrement = () => {
        setNumber(number - 1)
    }
    const reset = () => {
        setNumber(0);
    }
    const increment = () => {

        setNumber(number + 1)

    
        
        

    }



    return(
        <div className = {styles.box}>

            <div className = {styles.top}>
                <div className = {styles.screen}>
                    <h1 className = {styles.number}>{number}</h1>
                </div>
            </div>

            <div className = {styles.buttons}>
                
                <button onClick = {decrement} className = {`${styles.button} ${styles.decrement}`}>Decrement</button>
                <button onClick = {reset} className = {`${styles.button} ${styles.reset}`}>Reset</button>
                <button onClick = {increment} className = {`${styles.button} ${styles.increment}`}>Increment</button>

            </div>

        </div>

    )


}

export default Counter;