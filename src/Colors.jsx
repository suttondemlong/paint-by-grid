import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from "axios";

function Colors(props) {
  const [color, setColor] = useState("")

  useEffect(() => {
    const getColor = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/painted-grits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      console.log(response.data.records);
    };
    getColor();
  }, []);


  return (
    <div>
      <Select options={color.map(() => numbers === 1 ? colors : null)} />
    </div>
  );
}

export default Colors;