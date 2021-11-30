import { Component } from "react";
import Dog from "./Dog";
import NumberOfDogs from "./NumberOfDogs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 1
    }
  }

  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({
      input: value,
    })
  }

  render() {
    const { input } = this.state
    return (
      <>
        <h1> Random Dog Pictures v1 </h1>
        <NumberOfDogs handleInputChange={this.handleInputChange} input={input} />
        <Dog input={input}/>
      </>
    );
  }
};

export default App;
