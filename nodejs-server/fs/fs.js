// const fs = require("fs");

// fs.writeFile("index.html", "hello welcome", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//   }
// });

// const fs = require("fs/promises");

// const createfile = async () => {
//   try {
//     await fs.writeFile("login.html", "welcome to login page");
//   } catch (error) {
//     console.log(error);
//   }
// };
// createfile();

// const fs = require("fs/promises");

// const createfile = async (filetocreate, content) => {
//   try {
//     await fs.writeFile(filetocreate, content);
//   } catch (error) {
//     console.log(error);
//   }
// };
// createfile("aboutus.pdf", "this is my pdf");

// const fs = require("fs");

// const result = fs.readFileSync("aboutus.pdf");
// console.log(result.toString());

// fs.readFile("aboutus.pdf", (err, data) => {
//   if (data) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// fs.copyFile("aboutus.docx", "aboutme.pdf", (err) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log("file copied");
// });

// fs.appendFile("aboutme.pdf", " world", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file appended");
// });

// fs.stat("aboutme.pdf", (err, stats) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(stats);
// });

// fs.unlink("aboutus.docx", (err) => console.log(err));

// const os = require("os");
// console.log(os.userInfo());

// const Color = require("color");

// const color = Color("#7743CE").alpha(0.5).lighten(0.5);

// const singlecolor = color.hsl().toString();
// console.log(singlecolor);
