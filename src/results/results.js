// state with count, results, header

import React from 'react';

import superagent from 'superagent';
import beautify from 'json-beautify';

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
    const response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
    // const response = await fetch('https://swapi.dev/api/people/');
    // const response = await fetch('https://auth-server-cb.herokuapp.com/api/v1/categories')
    console.log(response)
    const results = response.body.results
    const header = response.headers || [];
    console.log(header)
    // const results = response.body.results || [];
    console.log(results)
    this.setState({header:header, results:results, fetching:false})
  }

  render(){
    return (
      <>
      <ul>
        {
       beautify(this.state.header)
      
        }
      </ul>

      {
          this.state.results.map((results) => {
            return <li>{beautify(results)}</li>
          })
        }
      </>
    )
  }
}
export default Results;