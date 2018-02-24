import * as React from 'react';
import TodoView from './ToDo';

interface ToDoList {
    data: string;
}

class ToDoPage extends React.Component<{}, ToDoList> {
    constructor(props: ToDoList) {
        super(props);
        this.state = { data: '佐久間まゆ' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        this.setState({ data: '' });
    }
    render() {
        return (
            <div>
                <h2 className="ui dividing header">ToDOアプリ</h2>
                <p>チュートリアルではおなじみのあいつ</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui input">
                        <input type="text" placeholder="Task Name" />
                    </div>
                    <button className="ui button">
                        Submit
                    </button>
                </form>
                <TodoView id={1} isCompleted={false} text="佐久間まゆ is Cute" />
            </div>
        );
    }
}
export default ToDoPage;