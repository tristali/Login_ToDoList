import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Member</NavLink>
            <NavLink to="/todolist">Todolist</NavLink>
        </nav>
    );
};

export default Navigation;
