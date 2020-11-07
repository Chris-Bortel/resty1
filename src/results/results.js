// state with count, results, header

import React from 'react';

import superagent from 'superagent';

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
    const response = await superagent.get('https://auth-server-cb.herokuapp.com/api/v1/categories');
    const results = response.body.results || [];
    this.setState({results, fetching:false})
    console.log(results)
  }

  render(){
    return (
      <>
      <ul>
        {
          this.state.results.map((results) => {
            return <li>{results._id}</li>
          })
        }
      </ul>
{/* 
      <ul>
        {
          this.state.results.map((results) => {
            return <li>{this.state.results} {results._id}</li>
          })
        }
      </ul> */}
      </>
    )
  }
}
export default Results;