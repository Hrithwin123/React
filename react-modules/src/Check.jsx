import React, {useState, useEffect, useRef} from "react"

function check(){


    const inputRef = useRef(null)

    
    function click(){
        inputRef.current.style.backgroundColor = "blue"
        
        
    }
    
    useEffect(() =>{
        console.log("Component got rendered!!")
        console.log(inputRef)
        
    })
    
    

    return (
        <div>
            <button onClick = {click} >Click Me!</button>
            <input ref = {inputRef}></input>
        </div>
    );
}

export default check