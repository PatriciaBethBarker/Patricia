


























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
