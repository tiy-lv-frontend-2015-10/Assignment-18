
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
  _parse_class_name: "Senator",
  idAttribute: "objectId"
});

// var cSchumer = new Senator();
// cSchumer.set({
//   name: "Charles Schumer",
//   state: "NY",
//   party: "D",
//   yearElected: 1998
// });
//
// cSchumer.save({}, {
//         success: function(resp){
//           console.log("Senator successfully saved");
//         },
//         error: function(err) {
//           console.log("error: ", err);
//         }
//       });


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

    var Router = Backbone.Router.extend({
      initialize: function () {
        Backbone.history.start({pushState: true});
      },
      routes: {
        "member/:objectID": "member",
        "": "index"
      }
    });

    var router = new Router();

    router.on('route:member', function(objectId) {
      var joe = new Senator({objectId: objectId});
      joe.fetch({
        success: function(resp){
          console.log(resp);
          var joeResponse = {
            fact: resp
           };
          var joeTemplate = $('#joe').text();
          var joeHTML = Mustache.render(joeTemplate, joeResponse);
          $('#here-is-joe').html(joeHTML);
        },
        error: function(err){
          console.log(err);
        }
      });

    });

    router.on('route:index', function () {
      console.log('home page');
    });



    $("a").on('click', function(e){
      e.preventDefault();
      var href = $(this).attr('href');
      href = href.substr(1);
      router.navigate(href, {trigger:true});
    });
