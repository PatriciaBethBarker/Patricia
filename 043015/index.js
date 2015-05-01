var hapi = require("hapi");

var server = new hapi.Server(); //make sure the Server is in caps, constructor uses new -yes I want to build a new Object
server.connection({ port: 8000});
server.start();
server.views({
  engines: {
    html: require("handlebars")
  },
  path: "templates",
  isCached: false
})

server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply){
    reply.view("index");
  }
});
