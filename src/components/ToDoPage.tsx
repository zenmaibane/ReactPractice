import * as React from 'react';
import ToDoListView, { ToDoList } from './ToDoList';

class ToDoPage extends React.Component<{}, ToDoList> {
    constructor(props: ToDoList) {
        super(props);
        this.state = { list: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        this.setState({ list: [{ id: 3, isCompleted: true, text: '佐久間まゆ' }] });
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
                <ToDoListView list={this.state.list} />
            </div>
        );
    }
}
export default ToDoPage;