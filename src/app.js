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
    // console.log(data)
  }

  // handleHistory(data) {
  //   console.log(this.state)
  //   const tempHistory = this.state.history;
  //   this.setState({})
  // // }
  // // async componentDidMount() {
  // //   this.setState({fetching:true}) 
    
    
  // //   const header = 
  // //   this.setState({header:header, results:results, fetching:false})
  // }


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
        
        <Footer />

      </>
    );
  }
}
export default App;
