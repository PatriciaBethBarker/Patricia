var hapi = require("hapi");
var fs = require ("fs");

var server = new hapi.Server();
server.connection({port: 8000});
server.start();

server.views({
  path: "templates",
  engines: {
    html: require("handlebars")
  },
  layoutPath: "layouts", //this is a wrapper
  layout: "default",
  partialsPath:
    "templates/partials",
  isCached: false
});

server.route({
  method:  "GET",
  path: "/",
  handler: function(req, reply){
    reply.view("index", {
      title: "Home"
    });
  }
});

server.route({
  method: "GET",
  path: "/classes", //matches the name in your html files
  handler: function(req, reply){
    fs.readFile("classes.json", "utf8", function(err, data){//read the file 1st
      reply.view("classes", {// then you can do the next task
        title: "Classes",
        classes: JSON.parse(data).classes
                });
              });
          }
});

server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory:{
      path: "public"
    }
    }
});
