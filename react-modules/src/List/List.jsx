import styles from "./List.module.css"


function List({list = [{id : null, name : "No-Content", calorie : ""}], head = "Heading"}){

    let noCalorie;

    let fruits = list;
    
    function showFruits(fruit){

            noCalorie = fruit.calorie == undefined || fruit.calorie === "";

            return <li key = {fruit.id}>
                {fruit.name}&nbsp; {noCalorie ? "" : ":"} &nbsp;<b>{fruit.calorie}</b>
                </li>;
 
    
    }



    let listItems = fruits.map(showFruits);


    return(
        <div className = {styles.list}>
            <h1>{head}</h1>

        <br></br>
        
            <ul>
                {listItems}

            </ul>

        <br></br>
        
        </div>
    );

    

}

export default List;