import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./input";
import Tabs from "./tab";
import Lists from "./list";
import "../../../css/todolist.css";

class TodoListContainer extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            value: "",
            display: "All"
        };
        this.handleAddList = this.handleAddList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleListState = this.handleListState.bind(this);
        this.handleDisplayState = this.handleDisplayState.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }

    handleAddList() {
        if (!this.state.value.trim()) {
            alert("請輸入文字");
        } else {
            let lists = this.state.list.slice();
            let listDetail = {
                active: true,
                content: this.state.value
            };
            lists.push(listDetail);
            this.setState({ list: lists });
            this.setState({ value: "" });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleDel(e) {
        let thisList = e.currentTarget.parentNode.id;
        let lists = this.state.list.slice();
        lists.splice(thisList, 1);
        this.setState({ list: lists });
    }

    handleListState(e) {
        let lists = this.state.list.slice();
        let thisList = e.currentTarget.parentNode.id;
        let thisActive = lists[thisList].active;
        lists[thisList].active = !thisActive;
        this.setState({ list: lists });
    }

    handleDisplayState(e) {
        let thisState = e.currentTarget.innerHTML;
        this.setState({ display: thisState });
    }

    render() {
        /*TODO:
        Display a list of the current tab status.
        */
        let displayList = this.state.list.filter(list => {
            let display = this.state.display;

            if (display === "Active") {
                return list.active === true;
            } else if (display === "Completed") {
                return list.active === false;
            } else {
                return list;
            }
        });

        return (
            <div id="todolist_content">
                <Tabs
                    display={this.state.display}
                    handleDisplayState={this.handleDisplayState}
                />
                <Lists
                    list={displayList}
                    handleDel={this.handleDel}
                    handleListState={this.handleListState}
                />
                <Input
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleAddList={this.handleAddList}
                    value={this.state.value}
                />
            </div>
        );
    }
}
export default TodoListContainer;
