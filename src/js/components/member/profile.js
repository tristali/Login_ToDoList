import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API } from "../../library/api";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            modify_timezone: false,
            timezone: 0
        };
        this.handleModifyTimezone = this.handleModifyTimezone.bind(this);
        this.handleChangeTimezone = this.handleChangeTimezone.bind(this);
    }

    render() {
        let timezone = "";
        if (this.state.modify_timezone) {
            timezone = (
                <div>
                    <input
                        type="number"
                        min="-12"
                        max="14"
                        step="0.5"
                        value={this.state.timezone}
                        onChange={this.handleChangeTimezone}
                    />
                    <button onClick={this.handleModifyTimezone}>modify</button>
                </div>
            );
        } else {
            timezone = (
                <span onClick={this.handleModifyTimezone}>
                    {this.props.member.timezone}
                </span>
            );
        }
        return (
            <div id="profile">
                <ul>
                    <li>
                        <h4>Username:</h4>
                        <span>{this.props.member.username}</span>
                    </li>
                    <li>
                        <h4>Code:</h4>
                        <span>{this.props.member.code}</span>
                    </li>
                    <li>
                        <h4>Timezone:</h4>
                        {timezone}
                    </li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            timezone: this.props.member.timezone
        });
    }

    handleModifyTimezone() {
        if (this.state.modify_timezone) {
            let user = this.props.user,
                thisEnvironment = this.props.thisEnvironment,
                timezone = { timezone: Number(this.state.timezone) };
            API.login(user)
                .then(data => API.putTimeZone(data, timezone))
                .then(res => API.loginSetData(user, thisEnvironment));
        }
        this.setState(prevState => ({
            modify_timezone: !prevState.modify_timezone
        }));
    }

    handleChangeTimezone(e) {
        let value = e.currentTarget.value;

        if (!value.match(/^([1-9][0-9]*(\.5)?)|(-[1-9][0-9]*(\.5)?)|(0\.5)$/)) {
            value = Math.round(value);
        }
        if (value < -12) {
            value = -12;
        }
        if (value > 14) {
            value = 14;
        }

        this.setState({
            timezone: value
        });
    }
}
export default Profile;
