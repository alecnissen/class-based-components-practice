import { Component } from "react";
import ClassInput from "./ClassInput";

class Count extends Component { 
  constructor(props) { 
    super(props);
  }
  
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


// Implement an edit button for each task. 

// It should replace the todo with an input field, 

// and change the button itself to ‘Resubmit’, so the edits can be saved. 

// This is a comparatively harder task, kudos for when you finish it!
