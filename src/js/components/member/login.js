import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id="login">
                <input
                    type="text"
                    value={this.props.username}
                    onChange={this.props.handleChangeUsername}
                />
                <input
                    type="password"
                    value={this.props.password}
                    onChange={this.props.handleChangePassword}
                />
                <button onClick={this.props.handleGetdata}>Login</button>
            </div>
        );
    }
}
export default Login;
