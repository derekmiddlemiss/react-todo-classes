import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import Header from './components/layout/header';
import About from './components/pages/About';
import Todos from './components/Todos';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  async componentDidMount() {
    let initTodosResp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    this.setState({todos: initTodosResp.data});
  }

  toggleComplete = (id) => {
    this.setState(prevState => ({
        todos: prevState.todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
          )
        )
      })
    )
  }

  deleteTodo = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== id)
      })
    )
  }

  addTodo = async (title) => {
    let newTodoResp = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    });
    console.log(newTodoResp.data)
    this.setState(prevState => ({
        todos: prevState.todos.concat(newTodoResp.data)
      })
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodoForm addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
