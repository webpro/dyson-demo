var dyson = require('dyson');

dyson.bootstrap(__dirname + '/services', 3000);

// Provided dyson is installed globally,
// the equivalent for this script from the CLI would be: `dyson services`
