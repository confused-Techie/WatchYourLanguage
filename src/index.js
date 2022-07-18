const fs = require("fs");

class WatchYourLanguage {
  constructor(opt) {
    this.path;
    this.words;
    this.lang = opt.lang ? opt.lang : "en";

    if (opt) {
      if (opt.dev) {
        this.path = `./data/strings.${this.lang}.txt`;
      } else {
        this.path = `./node_modules/@confused-techie/WatchYourLanguage/data/strings.${this.lang}.txt`;
      }
    } else {
      // no config specified, use the default english words.
      this.path =
        "./node_modules/@confused-techie/WatchYourLanguage/data/strings.en.txt";
    }

    try {
      this.words = fs
        .readFileSync(this.path, "utf8")
        .replace(/\r/g, "")
        .split("\n");
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }

  getList() {
    return this.words;
  }

  searchStrict(phrase) {
    let res = this.words.indexOf(phrase);
    return res > -1 ? true : false;
  }

  searchWithin(phrase) {
    for (let i = 0; i < this.words.length; i++) {
      if (phrase.includes(this.words[i])) {
        // This code is used from a pull request I made to @coffeeandfun/google-profanity-words
        // while this determines that the profanity is within our term, it may result in false positives
        // hello - hell : true
        // So we will use Regex, to check if the profanity is
        // followed by -, _, *, a space, or a capital character like we see in camelCase,
        // or the end of the string.
        let re = `(${this.words[i]})(\\s|\\-|\\_|\\*|[A-Z]|$)`;
        let reg = new RegExp(re, "g");
        if (reg.test(phrase)) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = {
  WatchYourLanguage,
};
