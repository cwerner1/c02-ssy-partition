const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/:id', handleItem);
router.put('/:id', handleItem);
router.delete('/:id', handleItem);


function handleItem(req, res) {

    let key = req.params.id;
    let service = "/multi-" + key.charAt(0);
    let url = "http://127.0.0.1:3000" + service + "/" + key;

    function serviceAntwort(srvErr, srvResp, srvBody) {
        res.status(srvResp.statusCode);
        res.json(srvBody);
    }

    Request.get({
        url: url,
        json: true,
    }, serviceAntwort);

}

module.exports = router;
