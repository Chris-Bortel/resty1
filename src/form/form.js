import React from "react";
import superagent from 'superagent';

import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      textarea: "",
      method: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.handleSuperagent();
    this.setState({
      textarea: `${this.state.method} ${this.state.input}`
    });
  }
  
  async handleSuperagent() {
    console.log(typeof this.state.textarea)
    if (this.state.method === 'get' || this.state.method === 'delete'){
      const response =  await superagent[this.state.method](this.state.input)
      const responseObj = {
        headers: response.headers || [],
        results: response.body
      }
      this.props.handler(responseObj, this.state)
    
    } else {

      const response =  await superagent[this.state.method](this.state.input)
      .send(JSON.parse(this.state.textarea))
      const responseObj = {
        headers: response.headers || [],
        results: response.body
      }
      this.props.handler(responseObj, this.state)
    }
  }

  handleMethod(event) {
    event.preventDefault();
    // let radio = event.target.value;
    const { name, value } = event.target;
    this.setState({ [name]: value });
    let method = event.target.value; 
    this.setState({method});

  }

  render() {
    console.log("41:::", this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label id="inputfield">URL: </label>
          <input
            // id="inputfield"
            name="input"
            placeholder="http://localhost:3001/category"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="GO!" />
          <div class="buttonfield">
            <label>
              <input
                onClick={this.handleMethod}
                name="method"
                type="radio"
                value="get"
              />
              <span>GET</span>
            </label>
            <label>
              <input
                onClick={this.handleMethod}
                name="method"
                type="radio"
                value="post"
              />
              <span>POST</span>
            </label>
            <label>
              <input
                onClick={this.handleMethod}
                name="method"
                type="radio"
                value="put"
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                onClick={this.handleChange}
                name="method"
                type="radio"
                value="delete"
              />
              <span>DELETE</span>
            </label>
          </div>
        </form>

        <label>
          <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
export default Form;
