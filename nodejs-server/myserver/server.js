const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
// create server

const server = http.createServer((req, res) => {
  //   console.log("someone has visited the server");
  // res header
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   //   send data to the user
  //   res.write("hello this is my server");
  //   // end response
  //   res.end();
});
// listen to the server
server.listen(7000, () => {
  console.log("server is running");
});

// http://localhost:7000

// fs.writeFile(
//   "login.html",
//   `
// <div>

// <h1>This is login page</h1>
// <p> please provide your credentials</p>
// </div>

// `,
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file has been created");
//   }
// );

// fs.writeFile(
//   "register.html",
//   `
//   <div>

//   <h1>This is register page</h1>
//   <p> please provide your details</p>
//   </div>

//   `,
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file has been created");
//   }
// );

// listen to event

server.on("request", (req, res) => {
  const url = req.url;
  if (url === "/login") {
    fs.readFile("login.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { Content_type: "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  if (url === "/home") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }

  //   parse incoming data (payload)

  if (url === "/create-post" && req.method === "POST") {
    // receive incomming data
    const post = [];
    req
      .on("data", (chunk) => {
        post.push(chunk);
      })
      .on("end", () => {
        const parseddata = Buffer.concat(post).toString();
        res.writeHead(200, { "Content-Type": "text/json" });
        console.log(parseddata);
        res.write("post created");
        res.end();
      });
  }
});
