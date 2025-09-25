import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        
    }
    render(){
        const{name} = this.props;
        return(
        <div className="userClass">
            <h2>Name: {name}</h2>
            <h2>Location: Bihar</h2>
            <h2>Gmail: foodieres@gmail.com</h2>   
        </div>
        )
    }
}
export default UserClass;