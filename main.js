$.ajaxSetup({
    headers: {
      'X-Parse-Application-Id': 'YZa1r8vJforgRvO3RJCOnTNEQb085HIHOevDg9G3',
      'X-Parse-REST-API-Key': '6mVCUbcHv9MESLSNAgQlEAzXucdCvwBbg2aeBBc5'
    }
  });

  //modules
  var Scientist = Backbone.Model.extend({
    initialize: function () {
      console.log ("A new Scientist has been created");
    },
    defaults:{
      genre:"Famous Scientist"
    },
    
    });


    var Scientist = new Scientist();

    Scientist.set("field", "Theoretical Physicist")
    Scientist.set({
    Scientist:"Albert Einstien",
    contributions:"Theory of Relativity",
    });

    var field = Scientist.get("field");


    var Scientists = Backbone.Collection.extend({
   
    model: Scientist,

    });

    var ScientistsCollection  = new Scientists();

    var Scientist = new Scientist ([
    new Scientist({ Scientist: "Albert Einstien"}),
    new Scientist({ Scientist: "Nikoli Tesla"}),
    new Scientist({ Scientist:"Issac Newton"})

    ]);

  Scientists.add(new Scientist({Scientist:"Marie Curie"}));


var ScientistsCollection = new Scientists();

Scientist.save(null, {
  success: function(resp) {
    console.log(resp)

    ScientistsCollection.fetch({
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





