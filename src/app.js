import React from "react";
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
      firstname: "",
      lastname: "",
      count: 0
    };
  }
  // this.handleSubmit = this.handleSubmit.bind(this);
  render() {
    return (
      <>
        <Header />
        <Form />
        <Results />
        <main>
          <div className="App"></div>
        </main>
        <Footer />
      </>
    );
  }
}
export default App;
