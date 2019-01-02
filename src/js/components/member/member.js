import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API } from "../../library/api";
import Login from "../member/login";
import Profile from "../member/profile";
import "../../../css/member.css";

class MemberContainer extends Component {
    constructor() {
        super();
        this.state = {
            member: "",
            username: "test2@qq.com",
            password: "test1234qq"
        };
        this.handleGetdata = this.handleGetdata.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    render() {
        let user = {
                username: this.state.username,
                password: this.state.password
            },
            thisEnvironment = this,
            member;

        if (!this.state.member.objectId) {
            member = (
                <Login
                    username={this.state.username}
                    password={this.state.password}
                    handleGetdata={this.handleGetdata}
                    handleChangeUsername={this.handleChangeUsername}
                    handleChangePassword={this.handleChangePassword}
                />
            );
        } else {
            member = (
                <Profile
                    handleGetdata={this.handleGetdata}
                    member={this.state.member}
                    user={user}
                    thisEnvironment={thisEnvironment}
                />
            );
        }
        return <div id="member_content">{member}</div>;
    }

    handleGetdata() {
        let user = {
                username: this.state.username,
                password: this.state.password
            },
            thisEnvironment = this;

        API.loginSetData(user, thisEnvironment);
    }

    handleChangeUsername(e) {
        this.setState({ username: e.currentTarget.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.currentTarget.value });
    }
}
export default MemberContainer;
