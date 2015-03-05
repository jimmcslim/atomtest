var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var MenuItem = require('menu-item');
var spawn = require('child_process').spawn;
var http = require('http');

var mainWindow = null;

var service = null;

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end("Hello world!");
}).listen(8181);

app.on('window-all-closed', function() {
	app.quit();
});

app.on('ready', function () {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});


	data = [{
		label: 'debug',
		submenu: [{
			label: 'dev&tools',
			click: function() {
				mainWindow.openDevTools();
			}
		}]
	}];

	var menu = Menu.buildFromTemplate(data);

	mainWindow.setMenu(menu);

	//service = spawn('..\\bin\\debug\\atomtest.exe');

	//service.stdout.on('data', function (data) {
	    //console.log('' + data);
	//});

	//service.stderr.on('data', function (data) {
	    //console.log('' + data);
	//});

	//service.on('close', function (code) {
	    //console.log('exited with code ' + code);
	//});
});
