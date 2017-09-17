var PythonShell = require('python-shell');


module.exports.flying = function (name) {
    PythonShell.run('Amadeus.py', options, function (err, results) {
        console.log(results);
    });

}
