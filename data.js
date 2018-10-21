var axios = require("axios");
var ref = require("./catch");


var accKey = "1b7c6a4fc60537946402771ed99da19afa9e662b8f4fcf5f80dfc6256e41f34d";
axios
    .get('https://api.unsplash.com/photos/?per_page=12&client_id=' + accKey)
    .then(data => {
        console.log("data fetched!");
        
        
    })
    .catch(err => {
        console.log('Error happened during fetching!', err);
    });





var pr = new Promise(function (resolve, reject) {
    fs.readFile("../Files/example.txt", "utf8", function (err, data) {
        if (err) return reject(err);
        console.log("4: Reading started!");
        console.log("5: Reading completed!");
        resolve(data);
    }); // fs.readFile()
    console.log("3: fs.readFile() bypassed");
}); // Promise object