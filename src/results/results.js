
import React from 'react';

import JSONPretty from 'react-json-pretty'
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
  <>
      
      {/* <h3> {beautify(this.props.header)} </h3>
      <h3> {this.props.count} </h3> */}
      <JSONPretty data={this.props.results} />
      <ul>

      {/* {this.props.results.map((results) => {
        return <li> {beautify(results)} </li>
      })  
      } */}

      </ul>

</>
    )
  }
}
export default Results;