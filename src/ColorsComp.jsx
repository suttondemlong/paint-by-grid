import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number1: [],
      id: "",
      label: ""
    }
  }

  async getOptions() {
    const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/painted-grits`
    const res = await axios.get(airTableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    });
  
    const data = res.data.records
    // console.log(data)
    
    const colorChoice = data.map(d => ({
      "label": d.fields.colors
    }))

    const numberChoice = data.filter((num) => {
      return num.fields.numbers === 1
    })

    // this.setState({ color: colorChoice });
    this.setState({ number1: numberChoice.map(d => ({
      "label": d.fields.colors
    }))});
  }

  handleChange(e) {
    this.setState({ number1: e })
  }

  componentDidMount() {
    console.log("compoenent mounted")
    this.getOptions()
  }

  render() {
    console.log(this.state.number1)
    return (
      <div>
        <Select options={this.state.number1} onChange={this.handleChange.bind(this)} />
        {/* {this.state.number1 === null ? "" : this.state.number1} */}
        {/* If the value returned by this.state.number is equal to 1, print out this.state.color, if not do nothing */}
      </div>
    );
  }

}
