$(document).ready(function(){

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': '1wipDReIH2jNUkIz31YId79fBcNT7vnzvfrIoC7D',
    'X-Parse-REST-API-Key': 'dOPocNIhcGuRnCiE7Ba0rgBEfPjafHrJ8p2RGWtw'
  }
});

var Game = Backbone.Model.extend({
  initialize: function () {
    console.log("A new game has been added");
  },
  defaults: {
    title: null,
    developer: null,
    releaseYear: null
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
    if (!attrs.developer) {
      return "Developer is required";
    }
    if (typeof attrs.title !== 'string') {
      return "Title must be a string";
    }
    if (typeof attrs.developer !== 'string') {
      return "Developer must be a string";
    }
    if (!attrs.releaseYear) {
      return "Release Year is required";
    }
    if (isNaN(Number(attrs.releaseYear))) {
      return "Release Year should be a number";
    }
  },
  _parse_class_name: "Games"
});

var game = new Game({
  title: "The Last of Us",
  developer: "Naughty Dog",
  releaseYear: 2013
})

var Games = Backbone.Collection.extend({
  model: Game,
  _parse_class_name: "Games"
});

var GamesCollection = new Games();

game.set({
  title: "Grand Theft Auto V",
  developer: "Rockstar Games",
  releaseYear: 2013
});

game.save(null, {
  success: function(resp) {
    console.log(resp)

    GamesCollection.fetch({
      success: function(resp) {
        console.log("success: ", resp);
        }, error: function (err) {
          console.log("error: ", err);
        }
      })
    },
  error: function (err) {
    console.log(err)
  }
});
});


