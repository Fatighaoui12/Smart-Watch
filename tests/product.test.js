const assert = require('chai').assert;
const Product = require('../models/product');

describe('Product Model', function() {
  it('should create a new product', function() {
    const productData = {
      productName: 'Chocolate Product',
      productPrice: 1200
    };

    const product = new Product(productData);

    assert.equal(product.productName, productData.productName);
    assert.equal(product.productPrice, productData.productPrice);
  });
});
