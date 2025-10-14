// import Header from "./Header";
import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends React.Component{
    // mounting is the first phase of a react component`s lifeCycle: - so here first Contact component in mounted then all thing goes:->

    // React lifecycle:- So here first constructor will be called then the render will be  called . and if it has child component then also first child constructor will be called then Render will be called then child ComponentDidMount will be called then last the componentDidMount : - constructor -> Render ->componentDidMount.

    //{ in case of child componentDidMount}
    // Parent constructor ->Parent Render -> Child Constructor -> Child Render ->  Child componentDidMount -> parent componentDidMount

    //{ in case of two child componentDidMount}
    // Parent constructor ->Parent Render -> Child1 Constructor -> Child1 Render -> Child2 Constructor -> Child2 Render -> Child1 componentDidMount -> Child2 componentDidMount -> parent componentDidMount


    constructor(props){
        super(props)

        console.log("parent constructor");
    }

    // used in to  make API call:- but why? - > because it also follow the same as useEffect { load -> Render -> API call -> Render}
    componentDidMount(){

        // here this will call infinite time even if you changes the page . so this is a cons of react SPA.
        this.Timer = setInterval(() =>{

            console.log("Setinterval called infinite");
        },2000)
        console.log("parent componentDidmount Called");
    }

    // it is called when we are leaving the page:--
    componentWillUnmount(){
        // To stop the timer from infinite run:--
        clearInterval(this.Timer);
        console.log("Parent ComponentWillUnmount");
      }
    render(){

        console.log("Parent render");
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
}
export default Contact;
