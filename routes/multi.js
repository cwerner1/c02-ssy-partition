function getRouter(shard_nr) {
    const express = require('express');
    const database = require('../src/multi-database');
    const router = express.Router();

    router.get('/:id', getItem);
    router.put('/:id', putItem);
    router.delete('/:id', delItem);

    /**
     *
     * @param req
     * @param res
     */
    function getItem(req, res) {
        let coll = database.getCollection("multi-" + shard_nr);
        let user = coll.find({key: req.params.id});
        res.json(user);
    }

    /**
     *
     * @param req
     * @param res
     */
    function putItem(req, res) {
        let u = req.body;
        let coll = database.getCollection("multi-" + shard_nr);
        let result = coll.insert(u);
        res.json(result);
    }

    /**
     *
     * @param req
     * @param res
     */
    function delItem(req, res) {
        let coll = database.getCollection("multi-" + shard_nr);
        let user = coll.find({key: req.params.id});
        coll.remove(user);
        res.json(user);

    }

    return router;
}

module.exports = getRouter;
