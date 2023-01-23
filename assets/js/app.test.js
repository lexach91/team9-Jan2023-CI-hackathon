// jest testing file
// virtual dom testing
// load index.html
// load script.js
// load app.test.js
//

const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require("jsdom");

describe("DOM", () => {
  let dom;
  let document;
  let window;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      runScripts: "dangerously",
      resources: "usable",
    });
    document = dom.window.document;
    window = dom.window;
  });

  afterAll(async () => {
    dom.window.close();
  });

  test("should have a navbar", () => {
    const navbar = document.querySelector("nav");
    expect(navbar).toBeTruthy();
  });

  test("should have a modal", () => {
    const modal = document.querySelector(".modal");
    expect(modal).toBeTruthy();
  });

  test("should have a carousel", () => {
    const carousel = document.querySelector("#carousel");
    expect(carousel).toBeTruthy();
  });

  test("should have a search section", () => {
    const search = document.querySelector("#search-section");
    expect(search).toBeTruthy();
  });

  test("should have an about-us section", () => {
    const about = document.querySelector("#about-us");
    expect(about).toBeTruthy();
  });

  test("should have a footer", () => {
    const footer = document.querySelector("footer");
    expect(footer).toBeTruthy();
  });
});
