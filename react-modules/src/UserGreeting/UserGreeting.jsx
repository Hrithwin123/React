import styles from "./UserGreeting.module.css"
import propTypes from "prop-types"



function UserGreeting(props){
    
    const greeting = <h2 className = {styles.greet}>Welcome, {props.username}</h2>

    const login = <h2 className = {styles.greet}>Please login</h2>

return(props.isLoggedIn ?  greeting : login );

    
}

UserGreeting.propTypes = {
    username : propTypes.string,
    isLoggedIn : propTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn:false,
}

export default UserGreeting