import React from "react";
import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}