var express = require('express');
var app = express();
var http = require('http').createServer(app);
var swagger = require('swagger-tools');
var fs = require('fs');
var contact = require('./app/routes/contact.js');
var upload = require('./app/controllers/UploadCtrl.js');
var path = require('path');
var parseurl = require('parseurl');
var session = require('express-session');
var config = fs.readFileSync('./config/config.json');
var configDB = JSON.parse(config.toString());

app.set('port', process.env.PORT || configDB.port);

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(function (req, res, next) {
    var views = req.session.views

    if (!views) {
        views = req.session.views = {}
    }

    // get the url pathname
    var pathname = parseurl(req).pathname

    // count the views
    views[pathname] = (views[pathname] || 0) + 1

    next()
});

app.use('/', express.static(__dirname + '/public/client'));
app.use('/admin', express.static(__dirname + '/public/admin'));
// app.use('/upload', express.static(__dirname));

app.use('/contact', contact);
app.use('/api', upload);

app.get('/admin', function(req, res){
    res.sendFile(path.join(__dirname + '/public/admin/index.html'));
});

var LoadSwagger = () => {
    var root = require('./app/apis/swagger.json');
    var pathFile = path.join(__dirname, '/app/apis/paths');
    var pathfiles = fs.readdirSync(pathFile);
    pathfiles.forEach((file) => {
        var pathJson = require('./app/apis/paths/' + file);
        Object.keys(pathJson.paths)
            .forEach((path) => {
                root.paths[path] = pathJson.paths[path];
            });
    });
    var definitionFile = path.join(__dirname, '/app/apis/definitions');
    var definitionfiles = fs.readdirSync(definitionFile);
    definitionfiles.forEach((file) => {
        var definitionJson = require('./app/apis/definitions/' + file);
        Object.keys(definitionJson.definitions)
            .forEach((definition) => {
                root.definitions[definition] = definitionJson.definitions[definition];
            });
    });
    return root;
};

// swagger
var swaggerObj = LoadSwagger();

var options = {
    swaggerUi: '/swagger.json',
    controllers: __dirname + '/app/controllers'
};

swagger.initializeMiddleware(swaggerObj, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerSecurity({
        oauth2: function (req, def, scopes, callback) {
        // Do real stuff here
        }
    }));
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());

    http.listen(app.get('port'),() => {
        console.log(`link: http://localhost:${app.get('port')}/api/... => Apis of DoraemonCare`);
        console.log(`link: http://localhost:${app.get('port')}/docs => Document Apis`);
        console.log(`link: http://localhost:${app.get('port')}/api-docs => Resource Listing JSON`)
    });
});

exports = module.exports = app;