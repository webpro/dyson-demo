var dyson = require('dyson');

dyson.bootstrap({
  configDir: __dirname + '/services',
  port: 3000,
  quiet: false
});
