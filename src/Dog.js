import React from "react";

class Dog extends React.Component {
    constructor() {
        super();
        this.state = {
          imgURL: "",
          images: []
        };
    }

    getRandomImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random/" + this.props.input)
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            Array.isArray(json.message) ? this.setState({images: json.message}) : this.setState({imgURL: json.message})
          })
          .catch((err) => {
            console.log("error fetching image");
          });
    };
      
    componentDidMount() {
        this.getRandomImage();
    }
      
    render() {
        const { imgURL, images } = this.state;
        const styles = {
            img: {
              height: "15em"
            }
        };

        const imageList = images.map((imgURL) => {
            return (<img key={imgURL} style={styles.img} alt="Dog" src={imgURL} />)
        })

        const dogImage = imgURL ? (<img style={styles.img} alt="Dog" src={imgURL} />) : imageList

        return (
            <>
                {dogImage}
                <button onClick={this.getRandomImage}>Load new dog</button>   
            </>
        );
    }      
}

export default Dog;
