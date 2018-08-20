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

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

var {mongoose} = require('./config/database');
var {User} = require('./app/Models/User');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.get('/', (req, res) => {
	res.json({
		message: "Hello world"
	});
})

app.get('/user', (req, res) => {
	res.render('hbs/user.hbs');
})


app.get('/elastic', (req, res) => {
	res.render('hbs/elastic.hbs');
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

app.get('/elastic-data', (req, res) => {
	const dsl = {
		query: {
			match_all: {
				
			}
		}
	};
	const URL = 'https://t7xq0569xx:fdndydi74l@jaiduls-first-sandbo-4682322014.us-west-2.bonsaisearch.net/customers/_search?size=100';
	axios.get(URL, {
		params: {
			source: dsl,
			source_content_type: 'application/json'
		}
	})
		.then((response) => {
			res.json({
				data: response.data.hits.hits
			})
		})
		.catch((err) => {
			console.log(err.response.data);
		})
})

app.get('/elastic-data/:id', (req, res) => {
	const dsl = {
		query: {
			ids: {
				values: [req.params.id]
			}
		}
	};
	const URL = 'https://t7xq0569xx:fdndydi74l@jaiduls-first-sandbo-4682322014.us-west-2.bonsaisearch.net/customers/_search';
	axios.get(URL, {
		params: {
			source: dsl,
			source_content_type: 'application/json',

		}
	})
		.then((response) => {
			res.json({
				data: response.data.hits.hits
			})
		})
		.catch((err) => {
			console.log(err.response.data);
		})
})

app.post('/elastic-data', (req, res) => {
	const URL = 'https://t7xq0569xx:fdndydi74l@jaiduls-first-sandbo-4682322014.us-west-2.bonsaisearch.net/customers/online';
	const payload = req.body;
	axios.post(URL, payload)
		.then((response) => {
			res.json({
				status: true
			})
		})
		.catch((error) => {
			res.json({
				status: false,
				error: error.response.data
			})
		})
})

app.delete('/elastic-data/:id', (req, res) => {
	const URL = 'https://t7xq0569xx:fdndydi74l@jaiduls-first-sandbo-4682322014.us-west-2.bonsaisearch.net/customers/online/' + req.params.id;
	axios.delete(URL)
		.then((response) => {
			res.json({
				status: true
			})
		})
		.catch((error) => {
			res.json({
				status: false,
				error: error.response.data
			})
		})
})

app.post('/user', (req, res) => {
	let newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		age: req.body.age,
	});

	newUser.save()
		.then((doc) => {
			res.send(doc);
		})
		.catch((err) => {
			res.status(400).send(e);
		})
})

app.get('/user/:id', (req, res) => {
	User.findById(req.params.id)
		.then((doc) => {
			res.send(doc);
		})
		.catch((err) => {
			res.status(404).send(e);
		})
});	