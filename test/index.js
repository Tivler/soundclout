const expect = require("chai").expect;
const request = require("request");

describe("API Routes Test", () => {
  it("Should return Soundclout Database", done => {
    request("http://localhost:4000/api", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Contacts", done => {
    request("http://localhost:4000/api/testimonials", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Albums", done => {
    request("http://localhost:4000/api/albums", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Albums filtered by title from A to Z", done => {
    request("http://localhost:4000/api/namefromatoz", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Albums filtered by title from Z to A", done => {
    request("http://localhost:4000/api/namefromztoa", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Albums filtered by price from lowest to highest", done => {
    request("http://localhost:4000/api/pricelowtohigh", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should return Albums filtered by price from highest to lowest", done => {
    request("http://localhost:4000/api/pricehightolow", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("POST Request That allows you to add to Contacts", done => {
    request("http://localhost:4000/api/submit", (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("Should return Contacts that were added using the POST request", done => {
    request("http://localhost:4000/api/pricehightolow", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Should Return an Album or Albums filtered based on the input value", done => {
    request("http://localhost:4000/api/albums/title/:title", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

});
