const { WatchYourLanguage } = require("./index.js");

let language = new WatchYourLanguage({
  dev: true,
});

describe("Profanity Tests", () => {
  it("Should return array for all profanity words.", () => {
    const all = language.getList();
    expect(Array.isArray(all)).toEqual(true);
  });

  it("Should return false for normal word.", () => {
    const checkWord = language.searchStrict("atom");
    expect(checkWord).toEqual(false);
  });

  it("Should return false for empty word.", () => {
    const checkWord = language.searchStrict("");
    expect(checkWord).toEqual(false);
  });

  it("Should return true for profane word", () => {
    const checkWord = language.searchStrict("hell");
    expect(checkWord).toEqual(true);
  });

  it("Should return false for normal string", () => {
    const checkPhrase = language.searchWithin("hello world");
    expect(checkPhrase).toEqual(false);
  });

  it("SHould return true for profane string", () => {
    const checkPhrase = language.searchWithin("what a bitch");
    expect(checkPhrase).toEqual(true);
  });
});
