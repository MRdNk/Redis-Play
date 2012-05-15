var redis = require('redis')
	, client = redis.createClient();

client.on('error', function (err) {
	console.log('error: ' + err);
});

client.on('connect', runSample);

function runSample() {
	// Set a value
	client.set('string key', 'hello world', function (err, reply) {
		console.log(reply.toString());
	});

	// Get a value
	client.get('string key', function (err, reply) {
		console.log(reply.toString());
	});
}
