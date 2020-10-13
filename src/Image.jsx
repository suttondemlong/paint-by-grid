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
  const sixStyles = {
    color: props.number6,
    backgroundColor: props.number6
  }

  return (
    <div className="grid">
      <div classID="row-1">
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
        <div className="square" style={oneStyles}>1</div>
      </div>
      <div classID="row-2">
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
        <div className="square" style={twoStyles}>2</div>
      </div>
      <div classID="row-props.number5">
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
        <div className="square" style={threeStyles}>3</div>
      </div>
      <div classID="row-4">
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
        <div className="square" style={fourStyles}>4</div>
      </div>
      <div classID="row-5">
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
        <div className="square" style={fiveStyles}>5</div>
      </div>
      <div classID="row-6">
        <div className="square" style={sixStyles}>6</div>
        <div className="square" style={sixStyles}>6</div>
        <div className="square" style={sixStyles}>6</div>
        <div className="square" style={sixStyles}>6</div>
        <div className="square" style={sixStyles}>6</div>
        <div className="square" style={sixStyles}>6</div>
      </div>
      <SaveButton
        colorOne={oneStyles.color}
        colorTwo={twoStyles.color}
        colorThree={threeStyles.color}
        colorFour={fourStyles.color}
        colorFive={fiveStyles.color}
        colorSix={sixStyles.color}
      />
    </div>
  );
}

export default Image;