import React, { useRef } from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const buttonsRef = useRef();

    const handleClick = ({ target }) => {
        if (target.id === "on") {
            onLogin();
            buttonsRef.current.firstChild.disabled = true;
            buttonsRef.current.lastChild.disabled = false;
        }
        if (target.id === "out") {
            onLogOut();
            buttonsRef.current.firstChild.disabled = false;
            buttonsRef.current.lastChild.disabled = true;
        }
    };

    return (
        <>
            <CardWrapper>
                <Subtitle>{isAuth}</Subtitle>
            </CardWrapper>
            <div onClick={handleClick} ref={buttonsRef}>
                <button className="btn btn-primary me-2" id="on">Войти в систему</button>
                <button className="btn btn-danger" disabled id="out">Выйти из системы</button>
            </div>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
