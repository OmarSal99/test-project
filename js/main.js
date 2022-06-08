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
const Cars = Backbone.Collection.extend({
  model: Car, // the model of elements that will be populated in this collection
});

// create new instance of the collection
const cars = new Cars([
  new Car({
    carId: "1",
    model: "Seat Leon",
    year: "2018",
    img: "https://i.auto-bild.de/ir_img/2/4/8/5/4/1/5/f68d3fc19372bc2d.jpg",
  }),
  new Car({
    carId: "2",
    model: "Toyota",
    year: "2019",
    img: "https://im-efahrer.chip.de/files/608afd5bc2f6e-microsoftteams-image-22.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=4c48d12f38a9435c365e8edcd9eea521f24300d0f22f9791380e564924f154f1",
  }),
  new Car({
    carId: "3",
    model: "Seat Leon",
    year: "2018",
    img: "https://i.auto-bild.de/ir_img/2/4/8/5/4/1/5/f68d3fc19372bc2d.jpg",
  }),
  new Car({
    carId: "4",
    model: "Toyota",
    year: "2019",
    img: "https://im-efahrer.chip.de/files/608afd5bc2f6e-microsoftteams-image-22.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=4c48d12f38a9435c365e8edcd9eea521f24300d0f22f9791380e564924f154f1",
  }),
  new Car({
    carId: "5",
    model: "Seat Leon",
    year: "2018",
    img: "https://i.auto-bild.de/ir_img/2/4/8/5/4/1/5/f68d3fc19372bc2d.jpg",
  }),
  new Car({
    carId: "6",
    model: "Toyota",
    year: "2019",
    img: "https://im-efahrer.chip.de/files/608afd5bc2f6e-microsoftteams-image-22.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=4c48d12f38a9435c365e8edcd9eea521f24300d0f22f9791380e564924f154f1",
  }),
]);

const CarView = Backbone.View.extend({
  className: "car-item",

  render: function () {
    const source = $("#carTemplate").html(); //get the template element
    const template = _.template(source); // parse the template useing underscore js template method
    this.$el.html(template(this.model.toJSON())); //inject our view to the template
    return this;
  },
});

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
const carsView = new CarsView({ collection: cars });
$("body").html(carsView.render().$el);
