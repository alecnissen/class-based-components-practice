import React, { Component } from "react";
import Count from "./Count";
import Edit from "./editComponent";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['test', 'test2'],
      inputVal: "",
      showForm: false,
      showTodo: true,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
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



  // handleEdit() { 
  //   this.setState(() => { 
  //     this.editBtnValue = this.editBtnValue = true
  //   })
  // }



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
            <li key={todo}> {todo}
            <button onClick={(() => { 
              this.handleDelete(todo);
            })}>Delete Task</button>
            <button onClick={((e) => { 
              console.log('edit btn is pressed');


              
            //  this.handleDelete(todo);

            //  this.handleEdit(); // call a function which returns JSX

              // <Edit></Edit> // call a component? 


              
              // {this.editBtnValue && <Edit></Edit>} 


            })}>Edit
  
            </button>
              {/* <Edit></Edit>  */}

              <input hidden></input>
              <button hidden>Re-submit</button>

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



// Implement an edit button for each task. 

// It should replace the todo with an input field, 

// and change the button itself to ‘Resubmit’, so the edits can be saved. 

// This is a comparatively harder task, kudos for when you finish it!



// when edit btn is pressed, the todo should be deleted, 
// but an input field and btn should be rendered as well. 
// So far I can delete the todo, and I've tried calling a component which includes the input and 
// 

// state variable, which will control if the todo is displayed, 
// state variable which will control if the input and other btn is displayed, 
// can we use state to control what is being displayed, 
// can I switch over to App and control what is rendered from there? 
// init the state values there, 




// *** 
/// replace the todo with an input field when the edit btn is pressed, 
// give each todo its state, it will be false, 
// a function which will change the value, 
// when its true it will hide the todo, 

// give each todo its own state ? 
// how do we give each todo its own state, this makes no sense at all 

// 


// ***
// when the edit btn is pressed, it will change the state value to a boolean, 
// then use a conditional that if the edit btn value is false, then we render the input field, along with the resubmit btn, 
// try to first set a state value with the edit btn, can you change the value? 


// ***
// how am I supposed to replace the todo with an input field, call a component? 
// How am I supposed to replace the todo that was just deleted with an input field? 
// tried callinga component, returning some jsx


// determine if something got deleted, 
// if something got deleted (a todo) then attach this component or this code ? 


// do we first attach an edit btn within the li tag? 
// what happens when that edit btn is clicked? 
// it removes the todo, and replaces it with an input field, and also changes the edit btn to a resubmit 

// *** 
// condiitonal rendering, when the edit btn onClick is called, 
// render the input field, 

// what will happen once the edit btn is pressed? It removes the todo with an input field, 
// also changes the btn to a re-submit btn, 
// are we using state for this? 
// or some type of conditional rendering? 
// something is happening within the onClick but what ? 
// handleDelete is called? 
// how can we replace the current todo with the input field? 
// 