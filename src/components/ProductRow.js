import React from "react";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.title}</div>;
  }
}

export default ProductRow;
