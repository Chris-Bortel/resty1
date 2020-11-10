
import React from 'react';

import beautify from 'json-beautify';

class Results extends React.Component {
    constructor(props) {
      super(props);
    } 

  render(){
    return (
  <>
      
      <h3> {beautify(this.props.header)} </h3>
      <h3> {this.props.count} </h3>
      
      <ul>

      {this.props.results.map((results) => {
        return <li> {beautify(results)} </li>
      })  
      }

      </ul>
</>
    )
  }
}
export default Results;