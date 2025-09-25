// import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
const Contact = () =>{
    return(
        <>
        <h2>Contct us page</h2>
        <User name={"Rahul Kumar (functional)"}/>
        <h2>contact us on +919674632101</h2>
        <p>
            For more info please visit www.foodierestaurant.com
        </p>
        <UserClass name={"Rahul Kumar (class component)"}/>
        </>
    )
}
export default Contact;
