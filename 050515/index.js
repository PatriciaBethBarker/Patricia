var hapi = require("hapi");

var server = new hapi.Server();
server.connection({port: 8000});
server.start();

serever.views({
  path: "templates",
  engines: {
    html: require("handlebars")
  }
});

server.route({
  method:  "GET",
  path: "/",
  handler: function(req, reply){
    reply.view("index");
  }
});
