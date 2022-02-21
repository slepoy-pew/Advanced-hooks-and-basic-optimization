import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LoginOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>
    );
};

LoginOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LoginOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                Initiate render
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
