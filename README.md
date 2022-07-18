# WatchYourLanguage

A Simplistic approach to avoiding profanity within an environment.

## Usage

To install:

```bash
npm install @confused-techie/watchyourlanguage
```

To use:

```javascript
const { WatchYourLanguage } = require("@confused-techie/watchyourlanguage");

let config = {
  lang: "en",
};

let language = new WatchYourLanguage(config);
```

### Config

The `config` object, allows you to define what language to use when checking for profane language.

If no `config` is provided, it defaults to `"en"`.

Currently Supported Languages:

* English : `"en"`

### Functions

#### getList()

```javascript
let language = new WatchYourLanguage({ lang: "en" });

let allBadWords = language.getList();
```

Returns an array, of all profane words that are checked for.

#### searchStrict()

```javascript
let language = new WatchYourLanguage();

let isExactBadWord = language.searchStrict(userInput);
```

Returns a boolean, true or false, indicating if the word provided matches **Exactly** with a profane word thats checked for. If it does `true` is returned, if not `false` is returned.

#### searchWithin()

```javascript
let language = new WatchYourLanguage();

let containsBadWord = langauge.searchWithin(userInput);
```

Returns a boolean, true or false, indicating if the phrase provided contains a profane word within it. Returning `true` if it does and `false` if it does not.

While `searchWithin()` does its best to avoid a false positive here, by nature false positives are possible during this check.

To avoid a false positive if a profane word is found within the phrase passed, `searchWithin()` will check that the profane word within the phrase is immediately followed by `_`, `-`, `*`, ` `, a capital letter (like we would see in camelCase), or the end of the phrase.


## Contributing

Contributions are always welcome, and to use the dev version of `WatchYourLanguage` when initiating the class use:

```javascript
let language = WatchYourLanguage({
  dev: true,
});
```

This will allow the class to find its word list within the local directory rather than `node_modules`.

Additionally to run the built in unit tests use:

```bash
npm run test
```

Lastly if you'd like to add additional words to the list feel free to do so, then run

```bash
npm run build-strings
```

This will organize the word list in alphabetical order, as well as remove any duplicates found.

## Attribution

The general structure of this code shares similarities with [coffee-and-fun/google-profanity-words](https://github.com/coffee-and-fun/google-profanity-words) although has been completely rewritten to support additional features needed for the intended use, as well as needed to support ES6 Modules instead of CommonJS Modules, while lastly expanding the used word list. With that said this rewrite is intended as an original work, and is licensed as such, but to respect the contributions of the author for the structure, that while their work has no license other than within `package.json` as `ISC` that will be listed here.

```
Copyright <2022> <coffee-and-fun>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```