const Request = require("request");

let key = process.argv[2];
fetch(key);

function fetch(key) {
    function getUrlByID(id) {
        let key = id;
        let service = "/multi-" + key.charAt(0);
        let url = "http://127.0.0.1:3000" + service + "/" + key;
        return url;
    }

    let url = getUrlByID(key);
    console.log(url);
    Request.get({
        url: url,
        json: true,
    }, antwortErhalten);

    function antwortErhalten(error, response, body) {
        console.log(response.statusCode);
        console.log(body);
        // for (let user of body) {
        //     console.log(user.name);
        // }
    }
}
