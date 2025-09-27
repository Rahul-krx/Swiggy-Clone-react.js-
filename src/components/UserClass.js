import React from "react";

class UserClass extends React.Component{

    // here first constructor is called then render called.
    constructor(props){
        super(props);
        // this.state: A special object that stores data for a component.{count,and count2 are two different state }
        this.state = {
            count : 0,
            count2 : 3
        }
        console.log("Constructor called");
        
    }
    render(){
        const{name} = this.props;
        const {count} = this.state;
        const {count2} = this.state;

        console.log("Render called")
        
        return(
        <div className="userClass">
            <h2>count= {count}</h2>
            <h2>count= {count2}</h2>
            <button onClick={() =>{
                // never update state variable directly:-
                // this.state.count = this.state.count + 1;  {wrong way}
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                })
            }}>count Increase</button>
        
            <h2>Name: {name}</h2>
            <h2>Location: Bihar</h2>
            <h2>Gmail: foodieres@gmail.com</h2>   
        </div>
        )
    }
}
export default UserClass;