import React from "react";

function NumberOfDogs(props) {
  return (
    <div>
      <label htmlFor="dogcount">Number of Pictures </label>
      <input onChange={props.handleInputChange} type="text" name="dogcount" id="dogcount" value={props.input} />
    </div>
  );
}

export default NumberOfDogs;
