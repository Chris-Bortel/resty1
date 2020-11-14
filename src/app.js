import React from "react";

import "./styles.scss";

import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Form from "./form/form.js";
import Results from "./results/results.js";
import History from "./history/history.js";
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
    this.setState({results: responseObj, history: [...this.state.history, historyObj]  })
    this.handleHistory();
  }

  handleHistory() {
    console.log('inside hadndle history')
    // this.setState({ history: [...this.state.history, historyObj]  })
    localStorage.setItem('history', JSON.stringify(this.state.history))
    // console.log(data)
  }

  render() {
    console.log('line 45', this.state)
    return (
      <>

        <Header />
        
        <Form handler = {this.handleForm} handleHistory = {this.handleHistory}/>
        
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
