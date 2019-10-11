import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class ProductInventoryMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Product Inventory</h1>
        <SearchBar />
        <div>
          <ProductTable />
        </div>
      </div>
    );
  }
}

export default ProductInventoryMain;
