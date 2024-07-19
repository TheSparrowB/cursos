import path = require("path");
import fs = require("fs");

const maxsize = 5120000;
const maxFiles = 5;

const pathDirectoryLog = path.join(__dirname, "..", "logs");
fs.existsSync(pathDirectoryLog) || fs.mkdirSync(pathDirectoryLog);


export { maxsize, maxFiles, pathDirectoryLog }