// state with count, results, header

import React from 'react';

import superagent from 'superagent';

import Form from '../form/form.js'

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: false, 
      count: 0, 
      header: [], 
      results: []
    }
    console.log(this.state)
  }

  // I will want to set fetching to false and then onSubmit I will want to change fetching to true
  async componentDidMount() {
    this.setState({fetching:true}) 
    // const response = await superagent.get('https://swapi.dev/api/people/');
    // const response = await fetch('https://swapi.dev/api/people/');
    const response = await fetch('https://auth-server-cb.herokuapp.com/api/v1/categories')
    const results = await response.json()
    const header = response.headers || [];
    console.log(response)
    console.log(header)
    // const results = response.body.results || [];
    this.setState({header:header, results:results.results, fetching:false})
    console.log(results)
  }

  render(){
    return (
      <>
      <ul>
        {
        
           <li >{this.state.header}</li>
        }
      </ul>

      {/* <ul>
        {
            <li>{this.state.results}</li>
       
        }
      </ul> */}
      </>
    )
  }
}
export default Results;