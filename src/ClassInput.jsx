import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['test', 'test2'],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  } 

  handleDelete(todo) { 
    console.log(todo)
    this.setState((state) => ({
      todos: state.todos.filter(selectedTodo => selectedTodo !== todo)
    }))
  }

  render() {
    return (
      <> 
      
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            // todo.id = crypto.randomUUID(), 
            // cannot create property id on string 'test'
            <li key={todo}> {todo}
            <button onClick={(() => { 
              // console.log(todo.id)
              this.handleDelete(todo);
            })}>Delete Task</button>
            </li>
          ))}
        </ul>
      </section>

      <Count currentTodos={this.state.todos.length}></Count>

      </>
    );
  }
} 

export default ClassInput;




// delete btn needs to be set with a specific todo, 
// once we click the delete btn, we should be able to access the todo
// that was clicked on

// I can access the specific todo when its delete btn is pressed 
// remove that todo from the state array, 
// make a copy of the state with the removed todo

// can access a single todo, it is passed to the function and I can log back the value 
// I feel like I Need to access the key as well. 
// because if the keys do not match, that is how we can use the filter method. 

// filter out the selected item, 
// you have the selected item, filter it out or find a way to remove from the array
// give the todo an id, 