const path = require("path");
const fs = require("fs");

const imageFolder = path.join(__dirname, "../imgs/");

const imgArr = fs.readdirSync(imageFolder);
console.log(imgArr);
imgArr.forEach((value, index) =>
  fs.renameSync(
    path.join(imageFolder, value),
    path.join(imageFolder, index + 1 + ".jpg")
  )
);
