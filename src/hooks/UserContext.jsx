import { useContext, createContext, useState, useEffect } from "react";





const UserContext = createContext({});


export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
         setUserInfo(userInfo);

        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        
        localStorage.removeItem('devburger:userData');
    };

    useEffect(() => {   
        const useInfoLoclStorage = localStorage.getItem('devburger:userData');
        if (userInfo) {
            setUserInfo(JSON.parse(useInfoLoclStorage));
        }
    }
    , []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}> 
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}