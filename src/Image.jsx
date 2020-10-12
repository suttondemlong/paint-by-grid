import React from 'react';
import SaveButton from "./SaveButton"
function Image(props) {
 
  const oneStyles = {
    color: props.number1,
    backgroundColor: props.number1
  }

  const twoStyles = {
    color: props.number2,
    backgroundColor: props.number2
  }
  const threeStyles = {
    color: props.number3,
    backgroundColor: props.number3
  }
  const fourStyles = {
    color: props.number4,
    backgroundColor: props.number4
  }
  const fiveStyles = {
    color: props.number5,
    backgroundColor: props.number5
  }

  return (
    <div className="grid">
      <div classId="row-1">
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
      </div>
      <div classId="row-2">
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>3</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
      </div>
      <div classId="row-props.number5">
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
      </div>
      <div classId="row-4">
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
      </div>
      <div classId="row-5">
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
      </div>
      <SaveButton />
    </div>
  );
}

export default Image;