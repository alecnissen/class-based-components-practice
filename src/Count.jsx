import { Component } from "react";
import ClassInput from "./ClassInput";

class Count extends Component { 
  constructor(props) { 
    super(props);

    // eslint-disable-next-line react/prop-types
    console.log(this.props);
    
    // eslint-disable-next-line react/prop-types
    // this.state = { 
    //     // eslint-disable-next-line react/prop-types
    //     todos: this.props
    //   }
    //   console.log(this.state.todos.currentTodos);
  
    // eslint-disable-next-line react/prop-types
    console.log(props.currentTodos)
    }



    // I'm not sure if I need to update state again within this component? 
    // make a copy of the array, then add the new todo items, 
    
    // handleChange(e) {
    //   this.setState((state) => ({ 
    //     ...state
    //   }))
    // }

    

  render() { 
    return ( 
        <> 
        {/* <h5>Count:{this.state.todos.currentTodos}</h5> */}
        <h5>{this.props.currentTodos}</h5>
        </>
    )
  }

} 

export default Count

// Implement a new class component, Count 

// that displays the count of the number of todos, at any given time.

// 

// I need someway to access the data within another component, 
// props? 
// but how can I pass props to the other component? 

// I don't understand how I can pass props to another component usijng classes 
// I dont see a way of how I can get access the todos within a different component? 

// OK I can display the count of the numnber of todo items, 
// how can I display a live/update count, I add another item and it will updated the count
