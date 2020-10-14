import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GalGrids(props) {

  const [schemes, setSchemes] = useState([]);
  
  useEffect(() => {
    const getGrids = async () => {
      const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/color-schemes?sort%5B0%5D%5Bfield%5D=createdAt&sort%5B0%5D%5Bdirection%5D=desc`
      const galResp = await axios.get(airtableUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      setSchemes(galResp.data.records)
    }
    getGrids();
  }, []);

    return (
    <div className="tiles">
      {schemes.map((scheme) => (
        <div key={scheme.id} className="gallery-grids">
          <p>{scheme.fields.title}</p>
      <div className="individual-grids">
      <div classID="row-1">
            <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color1,
              backgroundColor: scheme.fields.color1
            }}>1</div>
      </div>
      <div classID="row-2">
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color2,
              backgroundColor: scheme.fields.color2
            }}>2</div>
      </div>
      <div classID="row-props.number5">
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color3,
              backgroundColor: scheme.fields.color3
            }}>3</div>
      </div>
      <div classID="row-4">
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color4,
              backgroundColor: scheme.fields.color4
            }}>4</div>
      </div>
      <div classID="row-5">
        <div className="gallery-square" style={{
              color: scheme.fields.color5,
              backgroundColor: scheme.fields.color5
            }}>5</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color5,
              backgroundColor: scheme.fields.color5
            }}>5</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color5,
              backgroundColor: scheme.fields.color5
            }}>5</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color5,
              backgroundColor: scheme.fields.color5
            }}>5</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color5,
              backgroundColor: scheme.fields.color5
            }}>5</div>
        <div className="gallery-square" style={{
            color: scheme.fields.color5,
            backgroundColor: scheme.fields.color5
            }}>5</div>
          </div>
          <div classID="row-6">
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
            }}>6</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
            }}>6</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
            }}>6</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
            }}>6</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
            }}>6</div>
        <div className="gallery-square" style={{
              color: scheme.fields.color6,
              backgroundColor: scheme.fields.color6
              }}>6</div>
          </div>
          </div>
          </div>
            ))}
    
    </div>
  );
}

export default GalGrids;