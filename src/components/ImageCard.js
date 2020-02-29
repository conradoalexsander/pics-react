import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={spans: 0}

    // ref system is the React way to access DOM values like the height of an image laying in an <img/> tag 

    this.imageRef = React.createRef();
  }

  componentDidMount(){
      //adding a vanilla JS event load is a trick to make sure that you are getting the values after the page is loades
      //otherwise its height value would return 0, for example, because the browser didn't get this value right after the component did mount

      this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    
    /*calculating the number of spans necessary for an image based on 
    it's height and the grid-auto-row value in ImageList.css*/

    const spans = Math.ceil(height / 10);

    this.setState({spans})
  }
  
  render() {
    const { description, urls } = this.props.image;

    return (
        //styling the row end based in setSpans method
      <div style={{gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
