define(["underscore", "backbone"], function (_, Backbone) {
  const Car = Backbone.Model.extend({
    urlRoot: "https://myfakeapi.com/api/cars/",

    // this function is used to validate any instance of the model,
    //it returns true if the model is valid, else it returns error string
  });
  return Car;
});
