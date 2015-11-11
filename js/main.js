$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'HDSKUFLKzJWxz1aLcLqNc8jdnE2Twt61JLlwkKMf',
    'X-Parse-REST-API-Key': 'muxdDbLUqj2HSYbDZLPV1puTAwXfJnCdu1wa2J3n'
  }
});

///////////////////////////////

var Pets = Backbone.Model.extend({
  initialize: function () {
    console.log("A new pet has been created");
  },
  defaults: {
    name: null,
    alive: null,
    type: null,
    age: null,
  },
  validate: function (attrs) {
    if (!attrs.name) {
      return "Name is required";
    }
    if(!attrs.alive){
      return "alive is required"
    }
    if(!attrs.type){
      return "type must be required"
    }
    if (typeof attrs.name !== 'string') {
      return "Name is must be a string";
    }
    if(typeof attrs.alive !== 'string'){
      return "alive is required"
    }
    if (typeof attrs.type !== 'string') {
      return "type must a string";
    }
    if (!attrs.age) {
      return "age is required";
    }
    if (isNaN(Number(attrs.age))) {
      return "Published Year should be a number";
    }

  },
  _parse_class_name: "Pets"
});

var pets = new Pets({
    name: "Cisco",
    age: 7,
    alive: true,
    type: "dog"
})

var Pets = Backbone.Collection.extend({
  model: Pets,
  _parse_class_name: "Pets"
});

var PetsCollection = new Pets();

pets.save (null, {
  success: function(resp) {
    console.log(resp)

    PetsCollection.fetch({
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





