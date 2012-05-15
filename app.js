var redis = require('redis');
	client = redis.createClient();

client.on('error', function (err) {
	console.error('Error ' + err);
});

// Set a value
client.set('string key', 'hello world', redis.print);

//Get the value back
client.get('string key', function (err, reply) {
	console.log(reply.toString());
});

// Clean quit (waits for client to finish)
client.quit();


