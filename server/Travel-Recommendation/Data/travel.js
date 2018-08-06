

module.exports.flying = function (name) {
    console.log("Hello");
    var spawn = require("child_process").spawn;
    name = "ATL";
    passengers = 50,000;
    var dirname = __dirname;
    var pyprocess = spawn('python3',[ __dirname + "/Amadeus.py", name, passengers, dirname]);
//   pyprocess.stdout.pipe(process.stdout)
//    pyprocess.stderr.pipe(process.stderr)

    pyprocess.stdout.on('data', function (data){
        console.log(data.toString());
    });
}
