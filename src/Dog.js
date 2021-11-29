import React from "react";

class Dog extends React.Component {
    constructor() {
        super();
        this.state = {
          imgURL: ""
        };
      }
      
  render() {
    return (
      <>
        <p>IMAGE PLACEHOLDER</p>
        <button>Load new Dog</button>
      </>
    );
  }
}

export default Dog;
