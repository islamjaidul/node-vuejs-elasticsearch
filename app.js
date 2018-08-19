const express = require('express');
const hbs = require('hbs');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

MongoClient.connect('mongodb://islamjaidul:Ind38maK@ds263989.mlab.com:63989/weather_app', (err, client) => {
	if (err) {
		console.log("Unable to connect to server");
	} else {
		console.log("Connection established");
	}

	let db = client.db('weather_app');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: true
	});*/

	app.post('/user', (req, res) => {
		console.log('Hello');

	})


	/*db.collection('Todos').find({completed: true}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	})*/

	client.close();
})

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.send({
		name: 'Jidul Islam',
		profession: 28
	});
});

app.get('/about', (req, res) => {
	let data = {
		firstName: 'Jidul',
		lastName: 'Islam'
	};
	res.render('hbs/about.hbs', data);
})

app.get('/user', (req, res) => {
	res.render('hbs/user.hbs');
})

app.get('/all-users', (req, res) => {
	User.find()
		.then((doc) => {
			res.send(doc);
		})
		.catch((err) => {
			res.status(400).send(e);
		})
})

app.get('/weather-data/:lat/:lng', (req, res) => {
	const apiKey = "82ebb19b335218514ee0771e053195c3";
    const URL = `https://api.darksky.net/forecast/82ebb19b335218514ee0771e053195c3/${req.params.lat},${req.params.lng}`;
    axios.get(URL)
    	.then((response) => {
    		res.send(response.data.currently);
    	})
    	.catch((err) => {
    		console.log(err.response.data);
    	})

})


console.log("Running in port 3000");

app.listen(3000);