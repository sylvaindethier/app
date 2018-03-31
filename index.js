// @ts-check
const { writeFileSync } = require("fs");
const { execSync } = require("child_process");
const { join } = require("path");
const toArgString = require("./lib/toArgString");
const generateContent = require("./lib/generateContent");
const generateCommitMessage = require("./lib/generateCommitMessage");

// define constants
const filePath = join(__dirname, "./src/app.js");

// define git functions
const gitAddFileContent = (path, content) => {
  writeFileSync(path, content);
  execSync(`git add ${path}`);
};
const gitCommitWithDate = (date, args) =>
  execSync(
    `GIT_AUTHOR_DATE='${date}' GIT_COMMITTER_DATE='${date}' git commit ${toArgString(
      args
    )}`
  );

(function() {
  const content = generateContent();
  const date = new Date();
  const message = generateCommitMessage();
  //   const author = `${AUTHOR_NAME} <${AUTHOR_EMAIL}>`;

  gitAddFileContent(filePath, content);
  gitCommitWithDate(date, {
    message
    // ,author
  });
})();
