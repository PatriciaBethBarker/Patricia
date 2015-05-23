var hapi = require("hapi");
var fs = require ("fs");

var server = new hapi.Server();
server.connection({port: 8000});
server.start();

server.views({ //define templates on a per type
  path: "templates",
  engines: {
    html: require("handlebars")
  },
  isCached: false,
  layoutPath: "layouts", // this is a wrapper
  layout: "default", // here is the default layout
  partialsPath:
    "templates/partials",
});

server.route({
  method:  "GET",
  path: "/",//Home page path
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
  path: "/classes", //path matches the name of the html files
  handler: function(request, reply) {
    fs.readFile("classes.json", "utf8", function(err, data) {//read the file 1st
      reply.view("classes", {// then you can do the next task,
        title: "Classes",
        classes: JSON.parse(data).classes //pass the data to my json files
      });
    });
  }
});

server.route({
  method: "GET",
  path: "/assets/{param*}", //access everything after; /assets/
  handler: function(request, reply) {//a Static Resource Route, serves up the entire directory
    directory:{
      path: "public"
    }
  }
});
