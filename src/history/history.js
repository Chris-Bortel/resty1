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

export default History;
