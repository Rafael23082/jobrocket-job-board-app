import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PrivateRoutes(){
    const {user, isLoading} = useContext(UserContext);

    if (isLoading){
        return <p>loading...</p>
    }

    return(
        user ? <Outlet />: <Navigate to="/login" />
    )
}

export default PrivateRoutes;