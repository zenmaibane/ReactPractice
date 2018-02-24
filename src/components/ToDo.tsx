import * as React from 'react';
export interface ToDo {
    id: number;
    isCompleted: boolean;
    text: string;
}

class ToDoView extends React.Component<ToDo> {
    constructor(props: ToDo) {
        super(props);
    }
    render() {
        return (
            <p>
                {this.props.text}
            </p>
        );
    }
}

export default ToDoView;