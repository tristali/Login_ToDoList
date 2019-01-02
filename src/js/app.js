import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoListContainer from "./components/todolist/todolist";
import MemberContainer from "./components/member/member";
import Navigation from "./components/navigation";
import "../css/style.css";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={MemberContainer} exact />
                        <Route
                            path="/todolist"
                            component={TodoListContainer}
                            exact
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
