const assert = require('chai').assert;
const Admin = require('../models/admin');

describe('Admin Model', function() {
  it('should create a new admin', function() {
    const adminData = {
      email: 'John Doe',
      username: 1200
    };

    const admin = new Admin(adminData);

    assert.equal(admin.email, adminData.email);
    assert.equal(admin.username, adminData.username);
  });
});
