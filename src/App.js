import React from "react";
import axios from "axios";
import SearchCountry from "./SearchCountry";
import CountryInfo from "./CountryInfo";
const style = {
  marginTop: "30px"
};
class App extends React.Component {
  state = { country: [], error: "" };
  submitHandler = term => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${term}`)
      .then(response => this.setState({ country: response.data }))
      .catch(err => this.setState({ error: err }));
  };
  render() {
    console.log(this.state.error);
    return (
      <div className="App ui container" style={style}>
        <SearchCountry onChange={this.submitHandler} />
        <CountryInfo country={this.state.country} />
      </div>
    );
  }
}

export default App;
