import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({children}){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    return(
        <UserContext.Provider value={{user, setUser, isLoading, setIsLoading}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;