require.config({
  paths: {
    jquery: "lib/jquery-3.6.0.min",
    underscore: "lib/underscore-min",
    backbone: "lib/backbone-min",
  },
});

define(["app"], function (App) {
  App.initialize();
});
