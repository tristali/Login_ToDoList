import { config } from "./config";

export const API = {
    HOST_NAME: config.HOST_NAME,
    API_PATH: "api/",
    LOGIN_PATH: "login",
    USERS_PATH: "users/",
    HEADER: {
        "X-Parse-Application-Id": config.HEADER.XParseApplicationId,
        "X-Parse-REST-API-Key": "",
        "Content-Type": "application/json"
    },

    fetchData: (url, method, header) => {
        return fetch(url, {
            method: method,
            headers: header
        }).then(res => {
            return res.json();
        });
    },

    login: user => {
        let url = new URL(API.HOST_NAME + API.API_PATH + API.LOGIN_PATH),
            header = API.HEADER;
        url.search = new URLSearchParams(user);

        return API.fetchData(url, "GET", header);
    },

    loginSetData: (user, thisEnvironment) => {
        API.login(user).then(data => {
            thisEnvironment.setState({
                member: data
            });
        });
    },

    putTimeZone: (data, timezone) => {
        let id = data["objectId"],
            token = data["sessionToken"],
            url = API.HOST_NAME + API.API_PATH + API.USERS_PATH + id,
            header = {
                "X-Parse-Application-Id": config.HEADER.XParseApplicationId,
                "X-Parse-REST-API-Key": "",
                "Content-Type": "application/json",
                "X-Parse-Session-Token": token
            };

        return fetch(url, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(timezone)
        }).then(res => {
            alert("更新完成");
            return res;
        });
    }
};
