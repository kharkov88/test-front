const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3030);
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log('app up on http://localhost:' + app.get('port'));
});