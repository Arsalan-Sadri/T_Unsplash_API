var axios = require("axios");

var accKey = "1b7c6a4fc60537946402771ed99da19afa9e662b8f4fcf5f80dfc6256e41f34d";
var pr = new Promise(function (resolve, reject) {
    axios
        .get('https://api.unsplash.com/photos/?per_page=12&client_id=' + accKey)
        .then(data => {
            console.log("data fetched!");
            resolve(data.data);
        })
        .catch(err => {
            reject(err);
        });
});

module.exports = pr;