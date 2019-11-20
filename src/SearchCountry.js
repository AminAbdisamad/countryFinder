import React from "react";

class SearchCountry extends React.Component {
  state = { term: "" };
  //   this funciton will be called we press enter or search button
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onChange(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui fluid action input">
          <input
            type="text"
            value={this.state.term}
            placeholder="Search..."
            onChange={e =>
              this.setState({ term: e.target.value.toUpperCase() })
            }
          />
          <button className="ui button">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchCountry;
