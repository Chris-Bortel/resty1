import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      textarea: "",
      radiotracker: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }
  handleChange(event) {
    //dynamically accessing the target
    const { name, value } = event.target;
    // same as above
    // const {input, textarea, radiotracker}= this.state
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      textarea: `${this.state.radiotracker} ${this.state.input}`
    });
  }

  handleChangeRadio(event) {
    event.preventDefault();
    // let radio = event.target.value;
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // need to reset the state ti be equal to the button that had been clicked
    // need to make sure that we dio not overwrite the button
    // https://reactjs.org/docs/handling-events.html
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
                onChange={this.handleChangeRadio}
                name="radiotracker"
                type="radio"
                value="get"
              />
              <span>GET</span>
            </label>
            <label>
              <input
                onChange={this.handleChangeRadio}
                name="radiotracker"
                type="radio"
                value="post"
              />
              <span>POST</span>
            </label>
            <label>
              <input
                onChange={this.handleChangeRadio}
                name="radiotracker"
                type="radio"
                value="put"
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                onChange={this.handleChange}
                name="radiotracker"
                type="radio"
                value="delete"
              />
              <span>DELETE</span>
            </label>
          </div>
        </form>

        <label>
          <textarea value={this.state.textarea} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
export default Form;
