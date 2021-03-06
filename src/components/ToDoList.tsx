import * as React from 'react';
import ToDoView, { ToDo } from './ToDo';

export interface ToDoList {
    list: Array<ToDo>;
}

const ToDoListView = (props: ToDoList) => {
    const todos = props.list.map(todo =>
        <ToDoView key={todo.id} id={todo.id} isCompleted={todo.isCompleted} text={todo.text} {...todo} />
    );
    return (
        <div>
            {todos}
        </div>
    );
};
export default ToDoListView;