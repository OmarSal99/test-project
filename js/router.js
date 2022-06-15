define([
  "backbone",
  "views/CarsView",
  "views/CarView",
  "collections/CarsCollection",
  "collections/ServerCarsCollection",
  "models/carModel",
  "event",
], function (Backbone, CarsView, CarView, Cars, ServerCars, Car, vent) {
  const AppRouter = Backbone.Router.extend({
    routes: {
      "": "viewCarsList",
      "cars": "viewCarsList",
      "cars/:id": "viewCarById",
      "*other": "viewCarsList",
    },
    viewCarsList: function () {
      const cars = new Cars();
      const serverCars = new ServerCars();
      const carsView = new CarsView({ collection: cars });
      serverCars.fetch({
        success: function (data) {
          for (let i = 0; i < data.models[0].get("cars").length; i++) {
            cars.push(data.models[0].get("cars")[i]);
            if (i % 2 == 0) {
              cars
                .at(i)
                .set(
                  "img",
                  "https://im-efahrer.chip.de/files/608afd5bc2f6e-microsoftteams-image-22.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=4c48d12f38a9435c365e8edcd9eea521f24300d0f22f9791380e564924f154f1"
                );
            } else {
              cars
                .at(i)
                .set(
                  "img",
                  "https://i.auto-bild.de/ir_img/2/4/8/5/4/1/5/f68d3fc19372bc2d.jpg"
                );
            }
          }
          $("#container").html(carsView.render().$el);
        },
      });
    },
    viewCarById: function (id) {
      //  vent.trigger("car:show", id);
      const car = new Car({ id: id });
      const carView = new CarView({ model: car, isSingle: true});
      car.fetch({
        success: function (data) {
          car.set({ ...data.get("Car") });
          if (car.get("id") % 2 == 0) {
            car.set(
              "img",
              "https://i.auto-bild.de/ir_img/2/4/8/5/4/1/5/f68d3fc19372bc2d.jpg"
            );
          } else {
            car.set(
              "img",
              "https://im-efahrer.chip.de/files/608afd5bc2f6e-microsoftteams-image-22.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=4c48d12f38a9435c365e8edcd9eea521f24300d0f22f9791380e564924f154f1"
            );
          }
          car.unset("Car");
          $("#container").html(carView.render().$el);
        },
      });
    },
  });
  return AppRouter;
});
