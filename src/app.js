import React from "react";
import superagent from 'superagent';

import "./styles.scss";

import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Form from "./form/form.js";
import Results from "./results/results.js"
// write an app componet that serves as the container for all sub-components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false, 
      header: [], 
      results: [],
      count: 0, 
    };
  }

  handleForm() {
    this.setState({count: this.state.count,header: this.state.header, results: this.state.results })
  }



  

  // write a function for the superagent call which will be passed as a prop to form. will be called onSubmit for the form 
  // I will want to set fetching to false and then onSubmit I will want to change fetching to true
  async componentDidMount() {
    this.setState({fetching:true}) 
    const response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
  
    console.log(response)
    const results = response.body.results
    const header = response.headers || [];
    console.log(header)
    // const results = response.body.results || [];
    console.log(results)
    this.setState({header:header, results:results, fetching:false})
  }
  // 
  
  // this.handleSubmit = this.handleSubmit.bind(this);
  render() {
    return (
      <>
        <Header />
        <Form handler = {this.handleForm}/>
        <Results count = {this.state.count}   header = {this.state.header} results = {this.state.results} />
        <main>
          <div className="App"></div>
        </main>
        <Footer />
      </>
    );
  }
}
export default App;
