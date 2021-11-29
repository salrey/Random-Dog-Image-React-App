import React from "react";

class Dog extends React.Component {
    constructor() {
        super();
        this.state = {
          imgURL: ""
        };
    }

    getRandomImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              imgURL: json.message,
            });
          })
          .catch((err) => {
            console.log("error fetching image");
          });
    };
      
    componentDidMount() {
        this.getRandomImage();
    }
      
      
    render() {
        const { imgURL } = this.state;
        const styles = {
            img: {
              height: "15em"
            }
        };

        return (
            <>
                <img style={styles.img} alt="Dog" src={imgURL} />
                <button onClick={this.getRandomImage}>Load new dog</button>   
            </>
        );
    }      
}

export default Dog;
