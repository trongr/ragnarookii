// mach custom mongoose error message

var http       = require("http")
var express    = require('express');
var app        = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session')

// app.use(morgan('dev'));
app.use(morgan('combined', {
    // toggle to see request logs
    skip: function(req, res) { return res.statusCode < 400 }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cross-origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin) // allows all
    res.header("Access-Control-Allow-Credentials", "true")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next()
});

app.use("/public", express.static('public'));

app.get('/', function(req, res){res.sendFile(path.join(__dirname + '/public/index.html'))});
app.get('/test_babylon', function(req, res){res.sendFile(path.join(__dirname + '/public/test/babylon.html'))});

var port = process.env.PORT || 8080;
server = http.createServer(app);
server.listen(port);
console.log('Welcome to port ' + port);
