var router = require("express").Router();
var request = require('request');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'ZZd9nkRObqyUruNcyW_U-Q',
  consumer_secret: 'yXYdTu1alsTgKyzCCntLqV83sZY',
  token: 'MxzzUU3nyH6whuUH_ugISQW69jjsubCP',
  token_secret: 'MiI3lxjFjLCIGnYWr9w0bS3dpP4',
});

router.post("/yelpAPI", function(req, res) {    
  yelp.search({ 
      term: req.body.category, 
      location: req.body.location,
      limit: 10,
      sort: 2,
      radius_filter: 400
     })
  .then(function (data) {
    // console.log(data);
    // console.log(data.rating);
    res.send(data);
  })
  .catch(function (err) {
    // console.error(err);
  });
});


router.get("/citibikeAPI", function (req, res) {
  var options = { method: 'GET',
   url: 'http://api.citybik.es/citi-bike-nyc.json',
   headers: 
    { 'postman-token': 'f07205c3-1c34-4b21-a140-aaab96a8fb34',
     'cache-control': 'no-cache' } 
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

   console.log(body);
  });

});


module.exports = router;
