import React from 'react';
import PropTypes from 'prop-types';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    static propTypes = {
        task: PropTypes.shape({
            title: PropTypes.string,
            desc: PropTypes.string,
            _id: PropTypes.string
        }).isRequired
    }

    addTask(e) {
        console.log(this.props.task);
        const { title, desc, _id } = this.props.task;
        if(_id && _id !== '' && _id !== 'undefined') {
            fetch('/api/' + _id, {
                method: 'PUT',
                body: JSON.stringify({ title, desc }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: 'Task Updated' });
                this.props.onSend();
            })
            .catch(err => console.log(err));
        } else {
            fetch('/api/', {
                method: 'POST',
                body: JSON.stringify({ title, desc }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: 'Task Saved' });
                this.props.onSend();
            })
            .catch(err => console.log(err));
        }
        e.preventDefault();
    }

    editTask() {
        fetch(`/api/${this.props.task._id}`)
        .then(res => res.json())
        .then(task => {
            this.setState({
                title: task.title,
                desc: task.desc,
                _id: task._id
             });
        });
    }

    render() {
        //console.log("renderiza entry.js");
        //this.state = this.props.task; //es un anti patron
        const { title, desc } = this.props.task;
        return(
            <div className="card entry">
                <div className="card-content bordered">
                    <form onSubmit={this.addTask}>
                        <div className="block">
                            <div className="input-field">
                                <input name="title" onChange={this.props.onHandle} type="text" placeholder="Title" value={title}/>
                            </div>
                        </div>
                        <div className="block">
                            <div className="input-field">
                                <textarea name="desc" onChange={this.props.onHandle} placeholder="Description" className="materialize-textarea" value={desc}></textarea>
                            </div>
                        </div>
                        <button className="btn light-blue darken-4" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Entry;