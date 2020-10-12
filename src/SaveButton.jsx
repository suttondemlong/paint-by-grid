import axios from 'axios';
import React, { useState } from 'react';


function SaveButton(props) {
  const [title, setTitle] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.colorOne !== "" && props.colorTwo !== "" && props.colorThree !== "" && props.colorFour !== "" && props.colorFive !== "") {
      const fields = {
        color1: props.colorOne,
        color2: props.colorTwo,
        color3: props.colorThree,
        color4: props.colorFour,
        color5: props.colorFive,
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
      setTitle("");
    } else {
      alert("missing field");
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }
          } />
        <button onClick={handleSubmit}>Save Color Scheme</button>
      </form>
    </div>
  );
}

export default SaveButton;