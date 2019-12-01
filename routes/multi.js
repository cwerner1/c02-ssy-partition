function getRouter(shard_nr) {
    const express = require('express');
    const database = require('../src/multi-database');
    const router = express.Router();

    router.get('/:id', getItem);
    router.put('/:id', putItem);
    router.delete('/:id', delItem);


    function getItem(req, res) {
        let collection = database.getCollection('multi-' + shard_nr);
        let item = collection.findOne({key: req.params.id});
        res.json(item);
    }


    function putItem(req, res) {

    }


    function delItem(req, res) {

    }

    return router;
}

module.exports = getRouter;
