import React, { Component } from 'react'

export class AddTodoForm extends Component {

    state = {
        title: ''
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== ''){
            this.props.addTodo(this.state.title);
        }
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                 <input 
                    type='text' 
                    name='title' 
                    style={{flex: '11', padding: '10px'}} 
                    placeholder='add a To-Do...'
                    value={this.state.title}
                    onChange={this.onChange} 
                />
                 <input 
                    type='submit' 
                    value='Submit' 
                    className='btn' 
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodoForm
