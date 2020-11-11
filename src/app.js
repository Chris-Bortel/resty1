import React from "react";

import "./styles.scss";

import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Form from "./form/form.js";
import Results from "./results/results.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false, 
      // count: 0, 
      header: [], 
      results: '',
    };
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(data) {
    this.setState({results: data })
    console.log(data)
  }

  // async componentDidMount() {
  //   this.setState({fetching:true}) 
    
    
  //   const header = 
  //   this.setState({header:header, results:results, fetching:false})
  // }


  render() {
    console.log('line 36', this.state)
    return (
      <>

        <Header />
        
        <Form handler = {this.handleForm}/>
        
        <Results results = {this.state.results} />
        {/* <Results count = {this.state.count}   header = {this.state.header} results = {this.state.results} /> */}
        
        <main>
          <div className="App"></div>
        </main>
        
        <Footer />

      </>
    );
  }
}
export default App;
