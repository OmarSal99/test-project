define(["jquery", "underscore", "backbone", "event"], function (
  $,
  _,
  Backbone,
  vent
) {
  const CarView = Backbone.View.extend({
    initialize: function (options) {
      this.isSingle = options.isSingle;
    },
    className: "car-item",
    events: {
      click: "onClickCar",
    },
    onClickCar: function () {
      Backbone.history.navigate("cars/" + this.model.id, { trigger: true });
    },
    render: function () {
      if (this.isSingle) {
        const source = $("#singleCarTemplate").html(); //get the template element
        const template = _.template(source); // parse the template useing underscore js template method
        this.$el.html(template(this.model.toJSON())); //inject our view to the template
        return this;
      } else {
        const source = $("#carTemplate").html(); //get the template element
        const template = _.template(source); // parse the template useing underscore js template method
        this.$el.html(template(this.model.toJSON())); //inject our view to the template
        return this;
      }
    },
  });
  return CarView;
});
