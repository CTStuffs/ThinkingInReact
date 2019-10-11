import React from "react";
import ProductSection from "./ProductSection";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <ProductSection title="Test1" />
        </tr>
        <tr>
          <ProductSection title="Test2" />
        </tr>
      </table>
    );
  }
}

export default ProductTable;
