

module.exports.flying = function (name, passengers) {
    console.log("Hello");
    var spawn = require("child_process").spawn;
    var process = spawn('python',["path/to/script.py", arg1, arg2]);
    console.log("Hello2");
    process.stdout.on('data', function (data){
        console.log("Hello3");
        console.log(data);
        console.log("Hello");
    });
    console.log("Hello4");
}
