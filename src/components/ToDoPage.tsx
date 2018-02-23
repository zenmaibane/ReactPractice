import * as React from 'react';
class ToDoPage extends React.Component {
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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
            </div>
        );
    }
}
export default ToDoPage;