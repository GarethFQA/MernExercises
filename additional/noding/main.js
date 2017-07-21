var fs = require("fs");
var data = '';

//Create a readable stream
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

//Set the encoding to be utf8
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
	
});

readerStream.on('end', function() {
	console.log(data);
	writerStream.write(data, 'UTF8');
	writerStream.end();
});

readerStream.on('error', function(err) {
	console.log(err.stack);
	
});

//Handle stream events --> finish and error

writerStream.on('finish', function(){
	console.log('Write completed.');
});


writerStream.on('error', function(err){
	console.log(err.stack);
	
});
