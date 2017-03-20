import React from "react";
import Todo from './Todo';


export default class TodoList extends React.Component {
    onTodoClick(todoID) {
        console.log('click');
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        {...todo}
                        onClick={() => todo.props.onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}