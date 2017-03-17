import React from "react";
import { connect } from "react-redux";
import TodoList from "./components/TodoList";


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

@connect((state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
})
export default class Layout extends React.Component {
    render() {

        return (
            <div>
                <h1>Hello World!</h1>
                <p>This is a react-redux-todo-app.</p>

                <TodoList todos={this.props.todos} />
            </div>
        );
    }
}