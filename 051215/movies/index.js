var hapi = require("hapi");
var listings = require("./moviesData.json")

//load my movie listings by showing the path
  console.log(listings)
var server = new hapi.Server();
//constructors are always capitalized
server.connection({ port: 8000});
server.start();

//set up our view system
server.views({
  //register the templates
  engines: {
    html: require("handlebars")
  },
  path: "templates",
  //let hapi know about the layout template folder
  layoutPath: "layouts",
  layout: "default",
  //add a partials path here
  partialsPath: "templates/partials",
  isCached: false
});

server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply) {
    //we still just reply with a view
    reply.view("inner", { title: "Text Page", movies: listings.movies})
  }
});

server.route({
  method: "GET",
  //we must use "param" here, not another route varibale name
  path: "/assets/{param*}",
  handler:  {
    directory: {
      path: "public"
    }
  }
});



var JsonMovies;
fs.readFile() {


}

sever.route({
  method: "GET",
  path: "/",
    handler: function(req, reply) {
      fs.readFile("movies.json", "utf8", function(err, data) {
        reply.view("movies", {
          title: "Movies",
          movies: JsonMovies

          });
      }
});

server.route({
  method: "GET",
  path: "/movie/{{index}}",
  handler: function(req, reply) {
    var movie = JsonMovies[req.params.index];

    reply.view("movie", ){ //this is movie.html
      title:  movie.title

      });
    }
});
