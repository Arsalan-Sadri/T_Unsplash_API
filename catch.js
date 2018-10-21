var pr = require("../Async/async-promise");

pr.then(function (data) {
    console.log("6: " + data);
    module.exports = "test";
});