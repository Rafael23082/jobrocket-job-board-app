import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({children}){
    const [user, setUser] = useState("Wassup");

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;