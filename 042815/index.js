var hapi = require("hapi");

console.log(hapi);

var server = new hapi.Server();
server.connection({ port: 8000 });
server.start(function(){
  console.log("Server running!");
  console.log(server.info);

});

server.route({
  method:  "GET",
  path: "/{name}",
  handler: function(request, reply){  // post it data, cookies, form data, set headers, etc
    //console.log(request.headers);
    console.log(request.params);

    reply("Hello," + request.params.name + ", from Hapi.js");

  }

});
