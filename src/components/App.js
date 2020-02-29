import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //binding the function with an arrow function, so it won't bug with state
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  // another method to get the response from a call
  // }).then((response)=>{
  //   console.log(response.data.results);
  // });

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>

        {/* props are passed to the children component, so it can use its values or functions */}
        
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
