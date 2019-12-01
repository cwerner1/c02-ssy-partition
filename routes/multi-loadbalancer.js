const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/:id', getItem);
router.put('/:id', handleItem);
router.delete('/:id', handleItem);


function getItem(req, res) {
    // Routing-Logik
    let key = req.params.id;
    let service = "/multi-" + key.charAt(0);  // key[0]
    let url = "http://127.0.0.1:3000" + service + "/" + key;

    // bei Service anfragen
    Request.get({
        url: url,
        json: true
    }, serviceAntwort);

    function serviceAntwort(srvErr, srvResp, srvBody) {
        res.status(srvResp.statusCode);
        res.json(srvBody);
    }
}


function handleItem(req, res) {

}

module.exports = router;
