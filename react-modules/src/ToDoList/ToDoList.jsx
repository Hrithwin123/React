import styles from "./ToDoList.module.css"
import React, {useState, useEffect} from "react"

function ToDoList(){


    let [tasks, setTasks] = useState([])
    let [task, setTask] = useState("Nothing")

    
    function getTask(e){
        setTask(e.target.value);
        
    }
    
    
    function addTask(){
        document.getElementById("addtask").value = ""
        setTasks(t => [...t, task ])

    }

    function removeTask(j){

        setTasks(t => t.filter((_, index) => index !== j))


    }


    function taskUp(index){
        let newTasks = [...tasks];

        if(index != 0){
            let swapvar;
             swapvar= newTasks[index];
             newTasks[index] = newTasks[index - 1]
             newTasks[index - 1] = swapvar;
        }

        setTasks(newTasks)


    }

    function taskDown(index){
        let newTasks = [...tasks];

        if(index != tasks.length - 1){
            let swapvar;
             swapvar = newTasks[index];
             newTasks[index] = newTasks[index + 1]
             newTasks[index + 1] = swapvar;
        }

        setTasks(newTasks)

    }

    return(<div className = {styles.background}>

        <div className = {styles.taskbar}>
            <div className = {styles.searchcover}>
                <input id = "addtask" onChange = {getTask} className  = {styles.text} type = "text"></input>
                <button onClick = {addTask} className = {styles.btn}>Add</button>
            </div>
                
        </div>

        <div className = {styles.list}>
            {tasks.map((i, j, k) => {return <div key = {j}  className = {styles.task}> <div className = {styles.tasktext}>{i}</div> <div className = {styles.btns}><button onClick = {() => removeTask(j)} className = {styles.delete} >Done</button> <button onClick = {() => taskUp(j)} className = {styles.upbtn}>👆</button> <button onClick = {() => taskDown(j)} className = {styles.downbtn}>👇</button></div> </div>})}

        </div>
        
    </div>)

}

export default ToDoList