$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'tpCuWkangBABmhFa82CNG0Lrd9gJeiga0qzOHh2C',
    'X-Parse-REST-API-Key': 'gJusPaZ9YAMbDlWgDY9b6fHGkihaDkxCYNHpmaG1'
  }
});


var Dinosaur = Backbone.Model.extend({
  initialize: function () {
    console.log("You created a Dinosaur!!");
  },
  defaults: {
    name: null,
    period: null,
    diet: null,
    scary: true

  },
  validate: function (attrs) {
    if (!attrs.name) {
      return "Name is required";
    }
    if (!attrs.period) {
      return "Period is required";
    }
    if (!attrs.diet) {
      return "Diet is required";
    }
    if (!attrs.scary) {
      return "Scary is required";
    }
  },

  _parse_class_name: "Dinosaur"
});

var dinosaur = new Dinosaur({
  name: "Tyrannosaurus Rex",
  period: "Cretaceous",
  diet: "Carnivore",
  scary: true
})

  var dinoPull = {
    "dinosaur": dinosaur
  };
    var dinoTemplate = $("#dinoTemplate").text();
    var dinoHTML = Mustache.render(dinoTemplate, dinoPull);
    $("#dinoProducts").html(dinoHTML);

var Dinosaurs = Backbone.Collection.extend({
  model: Dinosaur,
  _parse_class_name: "Dinosaur"
});

var DinosaursCollection = new Dinosaurs();

dinosaur.save(null, {
  success: function(resp) {
    console.log(resp)

    DinosaursCollection.fetch({
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
