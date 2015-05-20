//pizza.js
var orders = require("./orders");

var hapi = require("hapi");
var server = new hapi.Server();

server.connection({
  port: 8000
});
server.start();
server.views({
  path: "templates",
  engines: {
    html: require("handlebars")
  },
  isCached: false
});

server.route({
  method: "GET",
  path: "/{name?}",
  handler: function(request, reply) {
    var name = request.params.name || "Anon";
    reply.view("index.html", {
      user: name
    });
  }
});

server.route({
  method: "POST",
  path: "/order",
  handler: function(request, reply) {
    console.log(request.payload);//I want to see what came in through this form
    reply.view("index.html");
    //orders.add(request.payload);
    //reply.view("index.html", {
      //pizzas: orders.pizzas
    //});
  }
});
