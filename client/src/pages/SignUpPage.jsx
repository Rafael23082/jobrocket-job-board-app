import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SignupLogin from "../components/SignupLogin.jsx";

function SignUpPage(){
    const {role} = useParams();

    useEffect(() => {
        document.body.style.backgroundColor = "black";

        return () => {
        document.body.style.backgroundColor = '';
        };
    }, []);
    
    return(
        <SignupLogin heading={"Sign Up"} subheading={"Continue to JobRocket"} button={"Sign Up"} alternative={"Already have an account?"} alternative2={"Log in"} text={"By proceeding, you agree to the Terms and Conditions and Privacy Policy."} minheight={"650px"} signup={true}
            fields={[{
                name: "Role",
                placeholder: "none",
                type: "select"
            }, {
                name:"Full Name",
                placeholder: "Enter text",
                type: "text"
            }, {
                name: "Email",
                placeholder: "mail@gmail.com",
                type: "text"
            }, {
                name: "Password",
                placeholder: "min 8 characters",
                type: "password"
            }]}
        />
    )
}

export default SignUpPage;