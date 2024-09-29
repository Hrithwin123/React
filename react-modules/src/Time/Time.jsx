import styles from "./Time.module.css";
import React, {useState, useEffect} from "react"

function Time(){
    
    useEffect(() => {
        const id = setInterval(() => {

            setTime(new Date())

        }, 1000)

        return () => {clearInterval(id)}

    }, [])




    const [time, setTime] = useState(new Date())
    

    function formatTime(){
        let hrs = parseInt(time.getHours());
        const mins = String(time.getMinutes()).padStart(2, "0");
        const sec = String(time.getSeconds()).padStart(2, "0");

        const ampm = hrs >= 12 ? "PM" : "AM" ;

        if(hrs >= 12){
            hrs = hrs - 12;
        }
        if (hrs === 0){

            hrs = 12

        }
        
        return `${hrs}:${mins}:${sec} ${ampm}`

    }

    return(<div>
                <div className = {styles.box}>
                    <h1>{`${formatTime()}`}</h1>

                </div>


          </div>)

}

export default Time