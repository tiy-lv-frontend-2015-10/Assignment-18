var Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
  defaults: {
    title: null,
    artist: null,
    isCool: true,
    publishYear: null
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
    if (!attrs.artist) {
      return "Artist is required";
    }
    if (typeof attrs.title !== 'string') {
      return "Title must a string";
    }
    if (typeof attrs.artist !== 'string') {
      return "Artist must a string";
    }
    if (!attrs.publishYear) {
      return "Published Year is required";
    }
    if (isNaN(Number(attrs.publishYear))) {
      return "Published Year should be a number";
    }
  }
});

var Songs = Backbone.Collection.extend({
  model: Song
});