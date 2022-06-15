
//the array parameter defines the dependencies that this module needs.
//the finction parameter will be used to define all the logic for this module and return needed data.
define(["underscore", "backbone", "models/carModel"], function (
  _,
  Backbone,
  Car
) {
  const ServerCars = Backbone.Collection.extend({
    model: Car, // the model of elements that will be populated in this collection
    url: "https://myfakeapi.com//api/cars"
  });
  return ServerCars;
});
