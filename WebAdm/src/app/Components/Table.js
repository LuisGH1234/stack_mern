import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.taskRows = this.taskRows.bind(this);
    }

    static propTypes = {
        onEdit: PropTypes.func.isRequired,
        tasks: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    deleteTask(_id) {
        if(confirm('Ar you sure you want to delete it?')) {
            console.log('deleting:',_id);
            fetch(`/api/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: "Task deleted" });
                this.props.fetchTasks();
            })
            .catch(err => console.log(err));
        }
    }

    taskRows(task, index) {
        const { onEdit } = this.props;
        return (
            <tr key={ task._id }>
                <td>{ task.title }</td>
                <td>{ task.desc }</td>
                <td>
                    <button id={`delete_task-${index}`} className="btn light-blue darken-4" onClick={() => this.deleteTask(task._id)}>
                        <i className="material-icons">delete</i>
                    </button>
                    <button id={`edit_task-${index}`} className="btn light-blue darken-4" onClick={(e) => onEdit(task)} style={{marginLeft: "4px"}}>
                        <i className="material-icons">edit</i>
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        //console.log("renderiza table.js");
        const { tasks } = this.props;
        return(
                <div className="card-content tasks-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Configuration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map(this.taskRows)
                            }
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default Table;