var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var trendsCtrl = require("./trendsCtrl.js");
var googleTrends = require('google-trends-api');

var app = express();

var options = {
    geo: 'US',
    date: '201610',
    keywords: ['some', 'list', 'of', 'keywords'],
    category: 'some category'
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get('/data/:searchTerm', function(req, res){
	console.log(req.params.searchTerm);
	googleTrends.trendData([req.params.searchTerm])
	.then(function(result){
		console.log(result);
		res.send(result);
	});
});

	



app.listen(8000, function(){
	console.log("The magic happens on 8000");
});