// state with count, results, header

import React from 'react';

import beautify from 'json-beautify';

import Form from '../form/form.js'
// from app, the props being sent to results is going to be the data from the superagent results = this.state.data    results will render out whatever the data is ... this.props.results
class Results extends React.Component {
    constructor(props) {
      super(props);
    } 
// const countResults = this.state.count;
// const header = this.state.header;
// const results = this.state.results

  render(){
    return (
  <>
      <h3> {this.props.count} </h3>
      
      <h3>
        {
       beautify(this.props.header)
      
        }
      </h3>
      

      // {/* {
      //     this.renderResResults.map((results) => {
      //       return <li>{beautify(results)}</li>
      //     })
      //   } */}
</>
    )
  }
}
export default Results;