var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index/index");
});
router.use("/login",function(req,res,next){
  res.render("index/login");
})

module.exports = router;
