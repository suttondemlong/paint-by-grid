import React, { Component } from 'react';
import Image from "./Image"
import axios from 'axios';
import Select from 'react-select'
import chroma from 'chroma-js'

// Code below found at https://react-select.com/home
const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
// code above found at https://react-select.com/home, I did not write ^this code.

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
      numberX: [],
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      selected5: "",
      selected6: "",
      label: "",
      name: "",
      color: "",
      background: ""
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
    // -----------------------------------------------
    const numberChoice1 = data.filter((num) => {
      return num.fields.numbers === 1
    })

    this.setState({
      number1: numberChoice1.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });

    // Each of these below is responsible for filtering the data
    // recieved from airtable to group the color codes with their
    // number designations and set their state as that color with
    // its number
    // -----------------------------------------------
    
    const numberChoice2 = data.filter((num) => {
      return num.fields.numbers === 2
    })

    this.setState({
      number2: numberChoice2.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });
    //--------------------------------------------------

    const numberChoice3 = data.filter((num) => {
      return num.fields.numbers === 3
    })

    this.setState({
      number3: numberChoice3.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });
    //--------------------------------------------------  
    const numberChoice4 = data.filter((num) => {
      return num.fields.numbers === 4
    })

    this.setState({
      number4: numberChoice4.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });
    //--------------------------------------------------
    const numberChoice5 = data.filter((num) => {
      return num.fields.numbers === 5
    })

    this.setState({
      number5: numberChoice5.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });
    //--------------------------------------------------
    const numberChoice6 = data.filter((num) => {
      return num.fields.numbers === 6
    })

    this.setState({
      number6: numberChoice6.map(d => ({
        "label": d.fields.colors,
        "value": d.id,
        "color": d.fields.colors,
      }))
    });
    //--------------------------------------------------
  }

  // Each instance of the Select tag needs its own handleChange
  // because of the way the airtable data is configured, which
  // has caused the above code to be written the way it is written
  handleChange1 = (e) => {
    this.setState({ 'selected1': e.label })
  }
  handleChange2 = (e) => {
    this.setState({ 'selected2': e.label })
  }
  handleChange3 = (e) => {
    this.setState({ 'selected3': e.label })
  }
  handleChange4 = (e) => {
    this.setState({ 'selected4': e.label })
  }
  handleChange5 = (e) => {
    this.setState({ 'selected5': e.label })
  }
  handleChange6 = (e) => {
    this.setState({ 'selected6': e.label })
  }
  // A friend helped me refactor the above handleChange functions,
  // to remove the logic from the select tags (as they were before)
  // and to make Select (react-select) work, which allowed the styling
  // from above to be implemented.

  componentDidMount() {
    this.getOptions()
  }

  render() {
    return (
      <div className="body">
        <Image
                    /* Passing props to Image, so that the
          selected option can be used to style the 
          grid squares */
          number1={this.state.selected1}
          number2={this.state.selected2}
          number3={this.state.selected3}
          number4={this.state.selected4}
          number5={this.state.selected5}
          number6={this.state.selected6}
        />
       {/* Select tags being populated by the information coming back from airtable that is being organized by the
       filter and map functions above. */}
        <div className="select-menus">
          <Select options={this.state.number1} styles={colourStyles} id="selected1" onChange={this.handleChange1} />
          <Select options={this.state.number2} styles={colourStyles} id="selected2" onChange={this.handleChange2} />
          <Select options={this.state.number3} styles={colourStyles} id="selected3" onChange={this.handleChange3} />
          <Select options={this.state.number4} styles={colourStyles} id="selected4" onChange={this.handleChange4} />
          <Select options={this.state.number5} styles={colourStyles} id="selected5" onChange={this.handleChange5} />
          <Select options={this.state.number6} styles={colourStyles} id="selected6" onChange={this.handleChange6} />
        </div>
      </div>
    );
  }
}
