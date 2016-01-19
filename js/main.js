
///////////////////////////////

var Pets = Backbone.Model.extend({
  initialize: function () {
    console.log("A new pet has been created");
  },
  defaults: {
    name: null,
    type: null,
    age: null,
  },
  validate: function (attrs) {
    if (!attrs.name) {
      return "Name is required";
    }
    if(!attrs.type){
      return "type must be required"
    }
    if (typeof attrs.name !== 'string') {
      return "Name is must be a string";
    }
    if (typeof attrs.type !== 'string') {
      return "type must a string";
    }
    if (!attrs.age) {
      return "age is required";
    }
    if (isNaN(Number(attrs.age))) {
      return "age should be a number";
    }

  },
  _parse_class_name: "Pets",
  idAttribute: "objectId",
});

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "name": "name",
    " ":"index"
  }
});

 var PetsCollection = new Pets();

var Pets = Backbone.Collection.extend({
  model: Pets,
  _parse_class_name: "Pets"
});

var pets = new Pets({
    name: "Cisco",
    type: "dog",
    age: 7
})



/*pets.save(null, {
  success: function(resp) {
    console.log(resp)

    PetsCollection.fetch({
      success: function(resp) {
        console.log("success: ", resp);
      }, 
      error: function (err) {
        console.log("error: ", err);
      }

    })
  },

  error: function (err) {
    console.log(err)
  }
});

*/



var router = new Router();

router.on ('route:pets', function (objectId) {
  var pets = new Pets({objectId:objectId});
  pets.fetch();
  console.log(pets);
});

router.on('route:index', function(){
  console.log("home page");
});

router.on('route:pets', function() {
  console.log("pets pages");
});



$("a").on("click", function(e){
  e.preventDefault();
  var href = $(this).attr('href');
  href = href.substr(1);
  router.navigate(href, {trigger:true});
});



