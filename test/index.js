const expect = require("chai").expect;
const request = require("request");

describe("API Routes Test", () => {
  it("Get Request To Root", done => {
    request("http://localhost:4000/api", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request Made From Testimonials", done => {
    request("http://localhost:4000/api/testimonials", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request Made From Albums", done => {
    request("http://localhost:4000/api/albums", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request That Filters Album Title from A to Z", done => {
    request("http://localhost:4000/api/namefromatoz", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request That Filters Album Title from Z to A", done => {
    request("http://localhost:4000/api/namefromztoa", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request That Filters Album Price from Low to High", done => {
    request("http://localhost:4000/api/pricelowtohigh", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request That Filters Album Price from High to Low", done => {
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

  it("Get Request Made From Contacts", done => {
    request("http://localhost:4000/api/pricehightolow", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("Get Request Made To Filter Albums In Input", done => {
    request("http://localhost:4000/api/albums/title/:title", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

});
