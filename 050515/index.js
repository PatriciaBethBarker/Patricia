var hapi = require("hapi");

var server = new hapi.Server();
server.connection({port: 8000});
server.start();

serever.views({
  path: "templates",
  engines: {
    html: require("handlebars")
  },
  layoutPath: "layouts", //this is a wrapper
  layout: "default",
  inCached: false
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
  path: "/classes" //making a new page
  handler: function(req, reply){
    fs.readFile("classes.json", utf8, function(err, data){
    reply.view("classes", {
      title: "Classes",
      classes: JSON.parse(data)
    });
  });
  }
})

server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory:{
      path: "public"
    }
    }
})
