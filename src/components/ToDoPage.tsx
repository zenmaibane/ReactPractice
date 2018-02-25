import * as React from 'react';
import ToDoListView, { ToDoList } from './ToDoList';
let id = 1;
class ToDoPage extends React.Component<ToDoList, ToDoList> {
    constructor(props: ToDoList) {
        super(props);
        this.state = { list: [], };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const taskList = this.state.list;
        id += 1;
        taskList.push({ id: id, isCompleted: false, text: event.currentTarget.task.value });
        this.setState({ list: taskList });
    }
    render() {
        return (
            <div>
                <h2 className="ui dividing header">ToDOアプリ</h2>
                <p>チュートリアルではおなじみのあいつ</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui input">
                        <input type="text" placeholder="Task Name" name="task" />
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