$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'VdpUcRAyrVKSMB1gkt5aNFEQ2HthRSFlEvWuDy6S',
    'X-Parse-REST-API-Key': 'evvpQDmb7CFPSUlinNRqYre2Z7scwVrwzA7Nlijf'
  }
});

var Senator = Backbone.Model.extend({
  initialize: function(){

  },
  defaults: {
    name: null,
    state: null,
    seniority: null,
    party: null,
    yearElected: null
  },
  validate: function (attrs) {
    if (!attrs.name) {
      return "Name is Required";
    }
    if (!attrs.state) {
      return "State is Required";
    }
    if (!attrs.party) {
      return "Party is Required";
    }
  },
  _parse_class_name: "Senator"
});

var cSchumer = new Senator();
cSchumer.set({
  name: "Charles Schumer",
  state: "NY",
  party: "D",
  yearElected: 1998
});

cSchumer.save({}, {
        success: function(resp){
          console.log("Senator successfully saved");
        },
        error: function(err) {
          console.log("error: ", err);
        }
      });


var Senators = Backbone.Collection.extend({
  model: Senator,
  _parse_class_name: "Senator"
});



var theSenate = new Senators();

theSenate.fetch({
      success: function(resp) {
        console.log("success: ", resp);
      var senData = {
        member: resp.models
      };
      var senTemplate = $('#bloviators').text();
      var senHTML = Mustache.render(senTemplate, senData);
      $('#here').html(senHTML);

      }, error: function (err) {
        console.log("error: ", err);
      }
    });







// var Song = Backbone.Model.extend({
//   initialize: function () {
//     console.log("A new song has been created");
//   },
//   defaults: {
//     title: null,
//     artist: null,
//     isCool: true,
//     publishYear: null
//   },
//   validate: function (attrs) {
//     if (!attrs.title) {
//       return "Title is required";
//     }
//     if (!attrs.artist) {
//       return "Artist is required";
//     }
//     if (typeof attrs.title !== 'string') {
//       return "Title must a string";
//     }
//     if (typeof attrs.artist !== 'string') {
//       return "Artist must a string";
//     }
//     if (!attrs.publishYear) {
//       return "Published Year is required";
//     }
//     if (isNaN(Number(attrs.publishYear))) {
//       return "Published Year should be a number";
//     }
//   },
//   _parse_class_name: "Song"
// });
//
// var song = new Song({
//   title: "Für Elise",
//   artist: "Beethoven",
//   publishYear: 1810
// });
//
// var Songs = Backbone.Collection.extend({
//   model: Song,
//   _parse_class_name: "Song"
// });
//
// var SongsCollection = new Songs();
//
// song.save(null, {
//   success: function(resp) {
//     console.log(resp);
//
//     SongsCollection.fetch({
//       success: function(resp) {
//         console.log("success: ", resp);
//       }, error: function (err) {
//         console.log("error: ", err);
//       }
//     });
//   },
//   error: function (err) {
//     console.log(err);
//   }
// });
