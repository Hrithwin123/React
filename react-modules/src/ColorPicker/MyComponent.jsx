import React, {useState} from "react"

function MyComponent(){

    const [color, setColor] = useState("#ffffff");
    

    function colorPicker(e){
        setColor(e.target.value)

    }    



    return(

    <div style = {{ margin : "20px", display : "flex", flexDirection : "column", alignItems : "center", }}>
        <div style = {{color : "black", boxShadow : "0px 3px 10px", justifyContent:"center", display : "flex", flexDirection: "column", alignItems : "center", fontFamily:"sans-serif", height : "200px", width : "200px", border : "2px solid", borderRadius : "10px", marginBottom : "20px", backgroundColor : color}}>
            <h2 style = {{marginBottom : "10px"}}>Selected Color</h2>
            <h2>{color}</h2>
        </div>
        <h2 style = {{marginBottom : "10px"}}>Select a Color</h2>

      <input onChange = {colorPicker} type = "color"></input>

    </div>
    )

}

export default MyComponent