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
  handler: function(request, reply) {
    reply.view("index", {
      title: "Home"
    });
  }
});

server.route({
  method:  "GET",
  path: "/public/{file}",
  handler: function(request, reply) {
    //load the file
    //pass it into reply

  }
})

server.route({
  method: "GET",
  path: "/classes", //matches the name in your html files
  handler: function(request, reply) {
    fs.readFile("classes.json", "utf8", function(err, data) {//read the file 1st
      reply.view("classes", {// then you can do the next task,
        title: "Classes",
        classes: JSON.parse(data).classes //pass the data to your json files
      });
    });
  }
});

server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: function(request, reply) {
    directory:{
      path: "public"
    }
  }
});
