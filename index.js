let express  = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
		res.send('<h1>Welcome Ben!!</h1>')
		console.log(req)
})

app.get('/test', function(req, res) {
	var str = JSON.stringify(req.body, null, 2);
	console.log('**GET**');
	console.log(str);
	res.sendStatus(200);
})
app.post('/test', function(req, res) {
	var str = JSON.stringify(req.body, null, 2);	
	console.log('**POST**');
	console.log(str);
	res.sendStatus(200);
})

app.listen(3000, function(){
		console.log("Server started on port: 3000")
})
