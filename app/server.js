var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(serveStatic(path.join(__dirname, 'dist')))
}


app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

var port = process.env.PORT || 5000

app.listen(port)
console.log('server started on port ' + port)