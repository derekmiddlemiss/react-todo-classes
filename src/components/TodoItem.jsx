import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#4f4f4f',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input style={checkStyle} type='checkbox' checked={completed} onChange={this.props.toggleComplete.bind(this, id)} />
                    {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        );    
    }

    static propTypes = {
        todo: PropTypes.object.isRequired,
        toggleComplete: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };
}

const checkStyle = {
    cursor: 'pointer'
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem

