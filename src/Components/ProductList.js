import React, { Component } from "react";
import Title from "./Title";

import { ProductConsumer } from "../context";
import Product from "./Product";

class ProductList extends Component {
  

  render() {
    // console.log(this.state.products);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} 
    
                    />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
