import { useEffect } from "react";
import SignupLogin from "../components/SignupLogin.jsx";

function SignUpPage(){
    useEffect(() => {
        document.body.style.backgroundColor = "black";

        return () => {
        document.body.style.backgroundColor = '';
        };
    }, []);
    
    return(
        <SignupLogin heading={"Sign Up"} subheading={"Continue to JobRocket"} button={"Sign Up"} alternative={"Already have an account?"} alternative2={"Log in"} text={"By proceeding, you agree to the Terms and Conditions and Privacy Policy."} minheight={"650px"} signup={true}
            fields={[{
                key: "role",
                name: "Role",
                placeholder: "none",
                type: "select"
            }, {
                key: "name",
                name:"Full Name",
                placeholder: "Enter text",
                type: "text"
            }, {
                key: "email",
                name: "Email",
                placeholder: "mail@gmail.com",
                type: "text"
            }, {
                key: "password",
                name: "Password",
                placeholder: "min 8 characters",
                type: "password"
            }]}
        />
    )
}

export default SignUpPage;