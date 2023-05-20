const assert = require('chai').assert;
const Client = require('../models/client');

describe('Client Model', function() {
  it('should create a new client', function() {
    const clientData = {
      fullName: 'John Doe',
      city: 'Paris',
      phoneNumber: '1234567890',
      shippingAddress: '123 Main Street',
      orderedProduct: 'Product ABC'
    };

    
    const client = new Client(clientData);

    assert.equal(client.fullName, clientData.fullName);
    assert.equal(client.city, clientData.city);
    assert.equal(client.phoneNumber, clientData.phoneNumber);
    assert.equal(client.shippingAddress, clientData.shippingAddress);
    assert.equal(client.orderedProduct, clientData.orderedProduct);
  });
});
