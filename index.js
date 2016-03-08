var spawn = require("cross-spawn-async");
var path = require("path");
var mochaPath = path.join(path.dirname(require.resolve("mocha")),
						  "bin", "mocha");

module.exports = runTests;

function runTests(tests) {
  var pth = tests.shift();
	var child = spawn("node", [mochaPath, pth], {
		stdio: "inherit"
	});
	child.on("exit", function(code){
		if(code !== 0) {
			process.exit(code);
		} else if(tests.length) {
			runTests(tests);
		} else {
			process.exit(code);
		}
	});
}
