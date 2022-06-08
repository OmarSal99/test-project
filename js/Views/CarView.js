define(["jquery", "underscore", "backbone", "models/carModel"], function (
  $,
  _,
  Backbone,
  Car
) {
  const CarView = Backbone.View.extend({
    className: "car-item",

    render: function () {
      const source = $("#carTemplate").html(); //get the template element
      const template = _.template(source); // parse the template useing underscore js template method
      this.$el.html(template(this.model.toJSON())); //inject our view to the template
      return this;
    },
  });
  return CarView;
});
