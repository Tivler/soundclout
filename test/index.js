const expect = require("chai").expect;
const request = require("request");

describe("Api Routes Test", () => {
  it("Get Request Made From Albums", done => {
    request("http://localhost:4000/albums", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request Made From Contacts", done => {
    request("http://localhost:4000/contacts", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

});
