import React from "react";

import "./styles.scss";

import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Form from "./form/form.js";
import Results from "./results/results.js";
import History from "./history/history.js";
import { forEachChild } from 'typescript';
// import If from './if/if.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false, 
      // count: 0, 
      header: [], 
      results: '',
      history: [] 
    };
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(responseObj, historyObj ) {
    let isUnique = false;
    this.state.history.forEach( obj => {
      if (obj.method === historyObj.method && obj.textarea === historyObj.textarea && obj.input === historyObj.input) {
        isUnique = true;
      }
    })

    if (isUnique === false) {
      let history = [...this.state.history, historyObj];
      let saved = localStorage.setItem('history', JSON.stringify(history))
  
  
      this.setState({results: responseObj, history: history })
      // this.handleHistory();
    }

  }

  // handleHistory() {
  //   localStorage.setItem('history', JSON.stringify(this.state.history))
  // }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    console.log(history, 'line 44')
    this.setState({ history });
  }

  render() {
    console.log('line 45', this.state)
    return (
      <>

        <Header />
        
        <Form handler = {this.handleForm} history = {this.state.history}/>
        
        <Results results = {this.state.results} />
        {/* <Results count = {this.state.count}   header = {this.state.header} results = {this.state.results} /> */}
        <History history = {this.state.history} />
        <main>
          <div className="App"></div>
        </main>
        
        {/* <Footer /> */}

      </>
    );
  }
}
export default App;
