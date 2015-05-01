var hapi = require("hapi");

var server = new hapi.server();
server.connection([ port: 8000]);
server.start();
server.views({
  engines: {
    html: require("handlebars")
  },
  path: "templates",
  isCached: false
})

server.route({
  medoth: "GET",
  path: "/",
  handler: function(req, reply){
    reply.view("index");  
  }
});
