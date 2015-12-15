$(document).ready(function(){

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': '1wipDReIH2jNUkIz31YId79fBcNT7vnzvfrIoC7D',
    'X-Parse-REST-API-Key': 'dOPocNIhcGuRnCiE7Ba0rgBEfPjafHrJ8p2RGWtw'
  }
});

var Game = Backbone.Model.extend({
  initialize: function () {
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
  _parse_class_name: "Games",
  idAttribute: "objectId"
});

var game = new Game({
  title: "The Last of Us",
  developer: "Naughty Dog",
  releaseYear: 2013
});

var Games = Backbone.Collection.extend({
  model: Game,
  _parse_class_name: "Games"
})

var GamesCollection = new Games();

GamesCollection.fetch({
  success: function(resp){
    console.log(resp);
  }
});

game.save(null, {
  success: function(resp){
    console.log(resp);
  }
  });


var Router = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start({pushState: true});
  },
  routes:{
    "game/:objectId": "game",
    "": "index"
  }
});

var router = new Router();

router.on('route:game', function(objectId){
  var game = new Game ({objectId: objectId});
  game.fetch();
  console.log("Game Page");
});

router.on('route:index', function(){
  console.log("home page");
});


$("a").on('click', function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  href = href.substr(1);
  router.navigate(href,{trigger:true});
});
});

