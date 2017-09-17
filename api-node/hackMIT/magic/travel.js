var j = require('data.json');
var spawn = require("child_process").spawn;

module.exports.flying = function (name) {
    var process = spawn('python', ['../Amadeus.py', arg1])
    process.stdout.on('data', function(data) {
        return data;
    });
    
}
