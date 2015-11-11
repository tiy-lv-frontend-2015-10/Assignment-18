
var Movie = Backbone.Model.extend({
  initialize: function () {
    console.log("New movie added.");
  },
  defaults: {
    title: null,
    type: null,
    releaseYear: null
  },
  _parse_class_name: "Movie",
  idAttribute: "objectId"
});
  /*
 var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },

  routes: {
    "movie/:objectId":"movie",
    "": "index"
  }

});

var router = new Router();

router.on("route:movie", function(objectId) {
  var movie = new Movie({objectId: objectId});
  movie.fetch();
  console.log(movie);
});

router.on("route:index", function () {
  console.log("home page");
});


  $("a").on("click", function(e){
  e.preventDefault();
  var href = $(this).attr("href");
  href = href.substr(1);
  router.navigate(href, {trigger:true});
});*/

var movie = new Movie({
  title: "The Martian",
  type: "Drama",
  releaseYear: 2015
})

var Movies = Backbone.Collection.extend({
  model: Movie,
  _parse_class_name: "Movie"
});

var MovieCollection = new Movies();
movie.save(null, {
 success: function(resp) {
   console.log("success: ",resp)
 },
 error: function(err) {
   console.log("error: ",err)
 }
});
 
    MovieCollection.fetch({
        success: function(resp) {
          console.log("success: ", resp);
        },error: function (err) {
          console.log("error: ", err);
        }
  });
  


