// 1. Declare vars
const express = require('express'),
morgan = require('morgan'),
path = require('path'),
app = express();
 
require('./views/components/handlerEntryComponent');

// 2. settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(`${__dirname}/views`));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// 3. importing routes
app.use(require('./routes/index'));

// 4. middlewares
app.use(morgan('dev'));
app.use(express.urlencoded( { extended: true } ));

// 5. static files
app.use(express.static(path.join(`${__dirname}/public`)));

// 6. port start server
app.listen(app.get('port'), () => {
    console.log(`Listen on port: ${app.get('port')}`)
})