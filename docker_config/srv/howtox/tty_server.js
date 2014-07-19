var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  port: 3133
});

app.listen();
