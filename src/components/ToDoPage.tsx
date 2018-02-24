import * as React from 'react';
import ToDoList from './ToDoList';

class ToDoPage extends React.Component {
    constructor(props: React.Component) {
        super(props);
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
                <ToDoList list={[{ id: 3, isCompleted: true, text: '佐久間まゆ' }]} />
            </div>
        );
    }
}
export default ToDoPage;