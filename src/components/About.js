 import { useEffect } from "react";
import { ABOUT_URL, ABOUT1_URL} from "../utils/constants";
const About = () =>{

    useEffect(() =>{

         // here this will call infinite time even if you changes the page . so this is a cons of react SPA.
        const timer = setInterval(() =>{
            console.log("Timer called");
        },2000);

         // To stop the timer from infinite run:-- it also works as a componentWillUnmout.
        return () =>{
            clearInterval(timer);
        }

    }, [])
    return(
    <>
    <h2 className="about-head">ABOUT US </h2>
    <div className="about-p">
    <h3 className="about-h">Foodie is a new age consumer-first organization offering an easy-to-use convenience platform, accessible through a <br/> unified app.😋</h3>
    </div>
    <div className="middle">
        <h2 className="abt-head">
                GET TO KNOW US
        </h2>
        <div className="middle1">
            <div className="text">Our mission is to elevate the quality of life of the urban <br/>
             consumer by offering unparalleled convenience. <br/> Convenience is what makes us tick. It’s what makes us <br/> get out of bed and say, “Let’s do this.</div>

       
        <div className="about-img">
            <img className="about-img1" src={ABOUT_URL}/>
        </div>
         </div>
    </div>
    <div className="middle2">
        <h2 className="abt1-head">INDUSTRY PIONEER</h2>

        <div className="side">
            <div className="side1">
                <p>Being among the first few entrants, Foodie has successfully <br/> pioneered the hyperlocal commerce industry in India, launching <br/> Food Delivery in 2014 and Quick Commerce in 2020. Due to the <br/> pioneering status of Swiggy, it is well-recognised as a leader in <br/> innovation in hyperlocal commerce and as a brand synonymous with <br/> the categories it is present in.</p>
            </div>
            <div className="side2">
                <img className="side1-img" src={ABOUT1_URL }/>

            </div>
        </div>
    </div>
    </>
    )
}
export default About;