define(["backbone", "router", "event"], function (Backbone, AppRouter, vent) {
  const initialize = function () {
    const appRouter = new AppRouter();
    Backbone.history.start();
  };
  return {
    initialize: initialize,
  };
});
