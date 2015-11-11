$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'TgEoY41rqce8V1jaiqVL4eJzIbA7rEYvxFH0Hx1H',
    'X-Parse-REST-API-Key': 'rB2NIpEfQu0v5zNyZltLSCpdy4RpcdfXnQ14T0ep'
  }
});


var Music = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
  defaults: {
    title: null,
    artist: null,
    album: null
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
    if (!attrs.artist) {
      return "Artist is required";
    }
     if (!attrs.album) {
      return "Album is required"; 
     }
    if (typeof attrs.title !== 'string') {
        return "Title must be a string";
      }
    if (typeof attrs.artist !== 'string') {
        return "Artist must be a string";
    }
      if (typeof attrs.album !== 'string') {
        return "Album must be a string";
    }
  },
  _parse_class_name: "Music"
});

var music = new Music({
  title: "Breathe",
  artist: "The Prodigy",
  album: "The Fat of the Land"
})

var Music = Backbone.Collection.extend({
  model: Music,
  _parse_class_name: "Music"
});

var MusicCollection = new Music();

music.save(null, {
  success: function(resp) {
    console.log(resp)
s
    MusicCollection.fetch({
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

