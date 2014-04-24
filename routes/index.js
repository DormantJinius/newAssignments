var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Assignments' });
});

/* GET Phase1Sprint1 page. */
router.get('/ph1sp1', function (req, res) {
    res.render('ph1sp1', { title: 'Phase 1 Assignments' });
});

/* GET Phase1Sprint2 page. */
router.get('/ph1sp2', function (req, res) {
    res.render('ph1sp2', { title: 'Phase 1 Assignments' });
});

/* GET Phase2Sprint1 page. */
router.get('/ph2sp1', function (req, res) {
    res.render('ph2sp1', { title: 'Phase 2 Assignments' });
});

/* GET Phase2Sprint2 page. */
router.get('/ph2sp2', function (req, res) {
    res.render('ph2sp2', { title: 'Phase 2 Assignments' });
});

/* GET Phase1Admin page. */
router.get('/ph1sp1admin', function (req, res) {
    res.render('ph1sp1admin', { title: 'Phase 1 Assign | Admin' });
});
/* GET Phase2Admin page. */
router.get('/ph2sp1admin', function (req, res) {
    res.render('ph2sp1admin', { title: 'Phase 2 Assign | Admin' });
});

/* GET Userlist page. */
router.get('/userlist', function (req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({}, {}, function (e, docs) {
        res.render('userlist', {
            "userlist": docs
        });
    });
});

module.exports = router;
