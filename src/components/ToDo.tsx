import * as React from 'react';
export interface ToDo {
    id: number;
    isCompleted: boolean;
    text: string;
}

class ToDoView extends React.Component<ToDo, ToDo> {
    constructor(props: ToDo) {
        super(props);
        this.state = { id: props.id, isCompleted: props.isCompleted, text: props.text };
        this.completedTask = this.completedTask.bind(this);
    }
    completedTask() {
        this.setState({ isCompleted: true });
    }
    render() {
        return (
            <div className={'test ' + (this.state.isCompleted ? 'completed' : null)}>
                {this.props.text}
                <a href="#" onClick={this.completedTask}>終わった</a>
            </div>
        );
    }
}

export default ToDoView;