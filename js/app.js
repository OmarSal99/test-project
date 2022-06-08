define([
  "jquery",
  "underscore",
  "backbone",
  "models/carModel",
  "collections/CarsCollection",
  "views/CarsView",
], function ($, _, Backbone, Car, Cars, CarsView) {
  const initialize = function () {
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

    const carsView = new CarsView({ collection: cars });
    $("body").html(carsView.render().$el);
  };
  return {
    initialize: initialize,
  };
});
