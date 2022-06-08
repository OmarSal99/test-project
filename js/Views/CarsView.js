define(["jquery", "underscore", "backbone", "views/carView"], function (
  $,
  _,
  Backbone,
  CarView
) {
  const CarsView = Backbone.View.extend({
    id: "cars",

    tagName: "div",
    className: "cars-container",

    render: function () {
      this.collection.each(function (car) {
        const carView = new CarView({ model: car });
        this.$el.append(carView.render().$el);
      }, this);
      return this;
    },
  });
  return CarsView;
});
