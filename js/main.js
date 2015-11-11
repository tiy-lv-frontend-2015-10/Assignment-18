$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'C8UunLQpeoGY6uHaEBP25soQhgiDe8jhvIJ3qVT7',
    'X-Parse-REST-API-Key': 'dnbGpoIqBOpJIXf3s9sPfV74i44XmxcbJzOZYJF4'
  }
});

var Movie = Backbone.Model.extend({
  initialize: function () {
    console.log("New movie added.");
  },
  defaults: {
    title: null,
    artist: null,
    releaseYear: null
  },
  validate: function (attr) {
    if (typeof attr.title !== 'string') {
      return "Title must be a string";
    }
    if (typeof attr.artist !== 'string') {
      return "Type must be a string";
    }
    if (isNaN(Number(attr.publishYear))) {
      return "Release Year must be a number";
    }
  },
  _parse_class_name: "Movie"
});

var movie = new Movie({
  title: "The Martian",
  type: "Drama",
  releaseYear: 2015
})

var movie = new Movie({
  title: "Ready to Rumble",
  type: "Comedy",
  releaseYear: 2000
})

var Movies = Backbone.Collection.extend({
  model: Movie,
  _parse_class_name: "Movie"
});

var movieCollection = new Movies();
  movie.save(null, {
    success: function(resp) {
      console.log(resp)
    },error: function (err) {
      console.log(err)
    }
  })
   movieCollection.fetch({
        success: function(resp) {
          console.log("success: ", resp);
        },error: function (err) {
          console.log("error: ", err);
        }
  });
  


