const fs = require("fs");
module.exports = {
  devServer: {
    // https: {
    //   // key: fs.readFileSync("./certs/localhost-key.pem", "utf8"), //local - https
    //   // cert: fs.readFileSync("./certs/localhost.pem", "utf8"), //local - https
    //   key: fs.readFileSync("./certs/private.key"), //net - https
    //   cert: fs.readFileSync("./certs/certificate.crt"), //net - https
    // },
    disableHostCheck: true,
    port: 8081,
  },
};
