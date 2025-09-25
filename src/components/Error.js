 import { useRouteError} from "react-router";

const Error = ()=>{

    const err = useRouteError();
    return(
        <>
       
        <h1>Oops!!</h1>
        <h2>Something went wrong 😵</h2>
        <h3>
            {err.status} : {err.statusText}
        </h3>
        </>
    )
}
export default Error;