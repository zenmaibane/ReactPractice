import * as React from 'react';
export interface ToDo {
    id: number;
    isCompleted: boolean;
    text: string;
}

const ToDoView = (props: ToDo) => (
    <p>
        {props.text}
    </p>
);

export default ToDoView;