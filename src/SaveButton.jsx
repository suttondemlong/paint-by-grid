import axios from 'axios';
import React, { useState } from 'react';


function SaveButton(props) {
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const [color3, setColor3] = useState("")
  const [color4, setColor4] = useState("")
  const [color5, setColor5] = useState("")
  const [title, setTitle] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      color1,
      color2,
      color3,
      color4,
      color5,
      title
    }
    // make post request to our endpoint to create new data
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/color-schemes`
    await axios.post(airtableURL, { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
    setColor1("");
    setColor2("");
    setColor3("");
    setColor4("");
    setColor5("");
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title, color1, color2, color3, color4, color5"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setColor1(props.number1)
            setColor2(props.number2)
            setColor3(props.number3)
            setColor4(props.number4)
            setColor5(props.number5)
          }
          } />
        <button>Save Color Scheme</button>
      </form>
    </div>
  );
}

export default SaveButton;