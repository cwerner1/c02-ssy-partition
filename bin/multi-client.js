const Request = require('request');

let key = process.argv[2];
fetch(key);


function fetch(key) {
    let service = key.charAt(0);
    let url = 'http://127.0.0.1:3000/multi-' + service + "/" + key;

    // bei Service anfragen
    Request.get({
        url: url,
        json: true
    }, serviceAntwort);

    function serviceAntwort(srvErr, srvResp, srvBody) {
        console.log(srvResp.statusCode);
        console.log(srvBody);
    }
}
