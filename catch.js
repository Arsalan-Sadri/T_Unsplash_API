var ax = require("./data");

ax.then(data => {
        console.log(data.data.results);
    })
    .catch(err => {
        console.log(err);
    });