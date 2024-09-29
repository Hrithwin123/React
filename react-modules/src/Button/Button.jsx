import styles from "./Button.module.css"

function Button({name = "Button"}){

    return(
        <>
        <button className = {styles.btn} onClick = {(e) => btnclick(e)}>{name}</button>

    </>
    );
    
    


}


export default Button;