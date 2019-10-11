import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div>Search: </div>
          <input type="text" name="search" value="Search..." />
          <input type="submit" value="Submit" />
          <input type="checkbox" /> Only show products in stock...
        </form>
      </div>
    );
  }
}

export default SearchBar;
