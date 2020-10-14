import React, { Component } from 'react';
import Image from "./Image"
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number1: [],
      number2: [],
      number3: [],
      number4: [],
      number5: [],
      number6: [],
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      selected5: "",
      selected6: "",
      label: "",
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
  
    // -----------------------------------------------
    const numberChoice1 = data.filter((num) => {
      return num.fields.numbers === 1
    })

    this.setState({ number1: numberChoice1.map(d => ({
      "label": d.fields.colors
      }))
    });
    // -----------------------------------------------
    const numberChoice2 = data.filter((num) => {
      return num.fields.numbers === 2
    })

    this.setState({
      number2: numberChoice2.map(d => ({
        "label": d.fields.colors
      }))
    });
  //--------------------------------------------------
    const numberChoice3 = data.filter((num) => {
      return num.fields.numbers === 3
    })

    this.setState({
      number3: numberChoice3.map(d => ({
      "label": d.fields.colors
     }))
    });
  //--------------------------------------------------  
  const numberChoice4 = data.filter((num) => {
    return num.fields.numbers === 4
  })

  this.setState({
    number4: numberChoice4.map(d => ({
      "label": d.fields.colors
    }))
  });
//--------------------------------------------------
const numberChoice5 = data.filter((num) => {
  return num.fields.numbers === 5
})

this.setState({
  number5: numberChoice5.map(d => ({
    "label": d.fields.colors
  }))
});
//--------------------------------------------------
const numberChoice6 = data.filter((num) => {
  return num.fields.numbers === 6
})

this.setState({
  number6: numberChoice6.map(d => ({
    "label": d.fields.colors
  }))
});

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.getOptions()
  }


  render() {
    return (
      <div className="body">
        <Image
          number1={this.state.selected1}
          number2={this.state.selected2}
          number3={this.state.selected3}
          number4={this.state.selected4}
          number5={this.state.selected5}
          number6={this.state.selected6}
        />
        <div className="select-menus">
          <select className="select-css" name="selected1" onChange={this.handleChange} >
            <option disabled defaultValue>Number 1 Color</option>
            {this.state.number1.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
          <select className="select-css" name="selected2" onChange={this.handleChange} >
            <option disabled defaultValue>Number 2 Color</option>
            {this.state.number2.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
          <select className="select-css" name="selected3" onChange={this.handleChange} >
            <option disabled defaultValue>Number 3 Color</option>
            {this.state.number3.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
          <select className="select-css" name="selected4" onChange={this.handleChange} >
            <option disabled defaultValue>Number 4 Color</option>
            {this.state.number4.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
          <select className="select-css" name="selected5" onChange={this.handleChange} >
            <option disabled defaultValue>Number 5 Color</option>
            {this.state.number5.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
          <select className="select-css" name="selected6" onChange={this.handleChange} >
            <option disabled defaultValue>Number 6 Color</option>
            {this.state.number6.map(color => (
              <option style={{color: `${color.label}`}} value={color.label}>{color.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

}
