import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectOptions: [],
      color: []
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
    console.log(data)
    
    const options = data.map(d => ({
      "value": d.fields.numbers,
      "label": d.fields.colors
      
    }))

    this.setState({ selectOptions: options });

  }

  handleChange(e) {
    this.setState({ value:e })
  }

  componentDidMount() {
    this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti/>
      </div>
    );
  }

}
