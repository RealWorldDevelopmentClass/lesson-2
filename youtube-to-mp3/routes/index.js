var express = require('express');
var router = express.Router();
var downloader = require('../modules/downloader');
var converter = require('../modules/converter');


/* GET home page. */
router.get('/a', function (req, res, next) {
    var code = req.param('code');
    downloader(code, function (fileSource) {

        converter(fileSource, function (file) {
            res.download(file);
        });
    });
    //res.render('index', { title: 'Express' });
});


module.exports = router;
