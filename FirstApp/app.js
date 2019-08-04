//including http  and file system module from package
const http = require("http");
const fs = require("fs");

//creating configuration values
const host_name = "127.0.0.1";
const port = 3000;

/**
 * file system read file function will read file content
 *  and call function to process
 * @param file random html file to load
 * @param annonymous_function to perform
 */
fs.readFile("index.html", (err, html) => {
  if (err) {
    throw err;
  }

  /**
   * short hand function to create server and set header value
   * @param req request
   * @param res response
   */
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write(html);
    res.end();
  });

  server.listen(port, host_name, () => {
    console.log("server started on port :" + port);
  });
});
