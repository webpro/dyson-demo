var dyson = require('dyson');

dyson.bootstrap({
  configDir: __dirname + '/services',
  port: process.env.PORT || 3000,
  quiet: false
});
