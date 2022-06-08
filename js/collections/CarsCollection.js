define(["underscore", "backbone", "models/carModel"], function (
  _,
  Backbone,
  Car
) {
  const Cars = Backbone.Collection.extend({
    model: Car, // the model of elements that will be populated in this collection
  });
  return Cars;
});
