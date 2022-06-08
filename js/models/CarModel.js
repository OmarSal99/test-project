define(["underscore", "backbone"], function (_, Backbone) {
  const Car = Backbone.Model.extend({
    idAttribute: "carId", //  the attribite tht will be used as an id for each instance of the model
    defaults: {
      // in this defaults object we can set some initial values for all new instances of the Car model
      model: "",
      year: "",
    },

    // this function is used to validate any instance of the model,
    //it returns true if the model is valid, else it returns error string
    validate: function (attrs) {
      if (!attrs.model) return "Model is required.";
    },
  });
  return Car;
});
