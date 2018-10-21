var pr = require("./data");

pr.then(function (data) {
    console.log(data);
    module.exports = "test";
});

console.log("...rest of the code goes inside .then(), not here!");