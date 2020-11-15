import React from 'react';
import './history.scss';

class History extends React.Component {
 
reRun(input) {
this.props.reRunForm(input)
}

  render(){
    return (
      <>
      {
      
        this.props.history.map((history) => {
        return (
          <div onClick = {() => this.reRun(history)} key = {Math.random()}>

          {history.method} - {history.input}
          
          </div>
        )
      }
      )
      }
      </>
        
    )
  }
}

export default History;
