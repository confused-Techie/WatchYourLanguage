const fs = require("fs");

try {
  let words = fs
    .readFileSync("./data/strings.en.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n");

  words.sort((a, b) => a.localeCompare(b));

  let newWords = [];
  let duplicates = 0;

  for (let i = 0; i < words.length; i++) {
    if (newWords.indexOf(words[i]) === -1) {
      newWords.push(words[i]);
    } else {
      duplicates++;
    }
  }

  console.log(`Duplicates: ${duplicates}`);

  let text = newWords.join("\n");

  fs.writeFileSync("./data/strings.en.txt", text, "utf8");

  console.log("Done...");
} catch (err) {
  console.error(err);
  process.exit(1);
}
