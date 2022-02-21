import React, { useState } from "react";

const withOnLoginOut = (SimpleComponent) => (props) => {
    const [userAuth, setUserAuth] = useState("");

    const handleOnLogin = () => {
        localStorage.setItem("user", "Auth");
        setUserAuth(localStorage.getItem("user"));
    };

    const handleOnLogOut = () => {
        setUserAuth(localStorage.removeItem("user"));
    };

    return (
        <SimpleComponent
            {...props}
            onLogin={handleOnLogin}
            onLogOut={handleOnLogOut}
            isAuth={userAuth}
        />
    );
};

export default withOnLoginOut;
