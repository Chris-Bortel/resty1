import React from 'react';
import './history.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    // do I need the state here, or just pass props from app
  }
  render(){
    return (
      <>
      {
      
        this.props.history.map((history) => {
        return (
          <div>

          <span>{history.method}</span>
          <span>{history.input}</span>
          <span>{history.textarea}</span>
          
          </div>
        )
      }
      )
      }
      </>
        
    )
  }
}
 
      


// Show a simple history list on the main page
// TODO: Will want to store the state of history which will end up being something like this.state.input or, on click of GO, the state of the request will be stored and displayed in the history component

// where should I store the state?

//allow a user to click and re-run

export default History;

