$(document).ready (function() {

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': '6I2jpXltxlR2OPvGzBgCU98IzhYjhU72Yh2GXHHL',
    'X-Parse-REST-API-Key': '9RwXUylAHdl2bv8nHpIBbAFHnLlVNduSIlq0tI7O'
  }
});


var size = Backbone.Model.extend({
  initialize: function () {
    console.log("A new type of dog has been added");
  },
  defaults: {
    Name: null,
    size: null,
    group: null
  },
   validate: function (attrs) {
    if (!attrs.Name) {
      return "Name is required";
    }
    if (!attrs.size) {
      return "Size is required";
    }
    if (typeof attrs.Name !== 'string') {
      return "Name must a string";
    }
    if (typeof attrs.size !== 'string') {
      return "Size must a string";
    }
    if (!attrs.group) {
      return "Group is required";
    }
    if (typeof attrs.group !== 'string') {
      return "Group must be a string";
    }
  },
  _parse_class_name: "size"
});

var dogSize = new size({
  Name: "St. Bernard",
  size: "Large",
  group: "Working"
})

var sizes = Backbone.Collection.extend({
  model: size,
  _parse_class_name: "size"
});

var sizeCollection = new sizes();

dogSize.save(null, {
  success: function(resp) {
    console.log(resp)  /*console.log(resp.toJSON());*/
   

    sizeCollection.fetch({
      success: function(resp) {
        console.log("success: ", resp);   /*console.log(resp.toJSON());*/
       /* var dogTemplate = $("#dogTemplate").text();
        var theHTML = Mustache.render(dogTemplate, resp.toJSON());
        $("#data").html(theHTML);*/
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

