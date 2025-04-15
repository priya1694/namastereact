import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h2>Hello</h2>
        <h2>This is about us page</h2>
        <User name={"Priya from class"}/>
        <UserClass name={"priya from function"}/>
        </div>
  
    );   
}

export default About;