import React from 'react';
import Table from './Table.js';
import Entry from './Entry';
import { throws } from 'assert';

class Task extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '',
            desc: '',
            _id: '',
            tasks: []
        };
        this.onTableEdit = this.onTableEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
        this.fetchTasks = this.fetchTasks.bind(this);
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks() {
        fetch('/api/')
        .then(res => {
            if(res.status === 500) {
                return this.state.tasks;
            }
            return res.json()
        })
        .then(tasks => {
            this.setState({ tasks });
        })
        .catch(err => console.log(err));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onTableEdit(obj) {
        this.setState({
            title: obj.title,
            desc: obj.desc,
            _id: obj._id
        });
    }

    clearState() {
        this.setState({ title: '', desc: '', _id: '' });
        this.fetchTasks();
    }

    render() {
        //console.log("renderiza app.js");
        return (
            <div className="container">
                <div className="col">
                    <Entry task={this.state} onHandle={this.handleChange} onSend={this.clearState}/>
                </div>
                <div className="col">
                    <Table tasks={this.state.tasks}  onEdit={this.onTableEdit} fetchTasks={this.fetchTasks}/>
                </div>
            </div>
        );
    }
}

export default Task;