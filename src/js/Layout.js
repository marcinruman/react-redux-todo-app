import React from "react";
import { connect } from "react-redux";

@connect((store) => {
    return {
        foo: 1
    }
})
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>This is a react-redux-todo-app. {this.props.foo}</p>
            </div>
        );
    }
}