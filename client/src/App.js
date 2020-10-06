import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      money: 0,
      value: 0
    }
  }

  componentDidMount() {
    axios.get("/data").then(response => {
      this.setState({ data: response.data.result })
    })
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onChange2 = (event) => {
    if (event.target.value === "USD") {
      this.setState({ money: this.state.data.USD })
      console.log(this.state.data.USD)

    } else {
      this.setState({ money: this.state.data.JPY })
      console.log(this.state.data.JPY)
    }
  }

  render() {
    // USD 1.17796
    // JPY 124.316066
    // THB 36.787079
    let a = this.state.money
    let b = parseInt(this.state.value)
    let c = (b * this.state.data.THB) / a
    return (
      <div>
        <label >
          <input type="text" onChange={this.onChange}></input>
          <select onChange={this.onChange2}>
            <option>Select</option>
            <option value="USD" >USD</option>
            <option value="JPY" >JPY</option>
          </select>
        </label>

        <label>
          <h1>{c} บาท</h1>
        </label>
      </div>
    );
  }
}

export default App;
