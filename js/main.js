$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': "C7JsFyh0LjVP4nE6m6HFYvnVQGsEWK1MAZhinFRz",
    'X-Parse-REST-API-Key': "oXKxZIFugZAW7a8MckhwCs0oMhWaoiGOs6VBJsLM"
  }
});

var Restaurant = Backbone.Model.extend({
  initialize: function () {
    console.log("A new restaurant check it out");
  },
  defaults: {
    restaurantName: null,
    typeFood: null,
    priceRate: null,
    chef: null
  },
  validate: function (attrs) {
    if (!attrs.restaurantName) {
      return "Restaurant name is required";
    }
    if (!attrs.typeFood) {
      return "Type of food is required";
    }
    if (typeof attrs.restaurantName !== 'string') {
      return "restaurantName must be a string";
    }
    if (typeof attrs.typeFood !== 'string') {
      return "Type of food must be a string";
    }
    if (!attrs.priceRate) {
      return " Price rate is required";
    }
    if (isNaN(Number(attrs.priceRate))) {
      return "Price should be a number";
    }
    if (!attrs.chef){
      return "Cheff is required"
    }
    if (typeof attrs.chef !== 'string') {
      return "Type of cheff must be a string";
    }
  },
  _parse_class_name: "Restaurant"
});

var Restaurant = new Restaurant({
  restaurantName: "Aureole",
  typeFood: "American",
  priceRate: 30,
  chef: "Christopher lee"

})

var Restaurants = Backbone.Collection.extend({
  model: Restaurant,
  _parse_class_name: "Restaurant"
});

var RestaurantsCollection = new Restaurants();

Restaurant.save(null, {
  success: function(resp) {
    console.log(resp)

    RestaurantsCollection.fetch({
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

var Restaurant =Backbone.Model.extend();

var Restaurant = Backbone.Collection.extend({
  model: Restaurant
});

var RestaurantView = Backbone.View.extend({
    render: function(){
      this.$el.html(this.model.get("restaurantName"));

      return this;
    } 
  
});

var RestaurantsView = Backbone.View.extend({
  render: function(){
    this.model.each(function(Restaurant){
      var RestaurantView = new RestaurantView({ model: Restaurant});
      this.$el.append(songView.render().$el);

    });
  }
});

var Restaurant = new Restaurants([
  new Restaurant({ restaurantName: "Ruku"});
  new Restaurant({ restaurantName: "Aureole"});
  new Restaurant({ restaurantName: "twist"})
  ]);

var Restaurant = new Restaurant({
  restaurantName: "Raku"
})
var RestaurantView = new RestaurantView ({
  el: "#container", model: Restaurant})
RestaurantView.render();


