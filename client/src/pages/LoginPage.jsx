import { useParams } from "react-router-dom";
import SignupLogin from "../components/SignupLogin.jsx";

function LoginPage(){
    const {role} = useParams();
    return(
        <SignupLogin heading={"Log In"} subheading={"Continue to JobRocket"} button={"Sign Up"} alternative={"New to JobRocket?"} alternative2={"Sign up"} text={"We care about your privacy. By logging in, you agree to our Terms and how we handle your data."} minheight={"550px"} signup={false}
            fields={[{
                name:"Email",
                placeholder: "mail@gmail.com",
                type: "text"
            }, {
                name: "Password",
                placeholder: "enter password",
                type: "password"
            }]}
        />
    )
}

export default LoginPage;