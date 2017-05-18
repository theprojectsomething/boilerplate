/*

  Default application template.

*/

define([
  "framework",
  "controller/router",
  "view/home",
], function (MediumFramework, Router, HomeView) {

  return MediumFramework.Module.extend({

    name: 'app',

    fn: {
      init: function () {

        HomeView.init();
        Router.init();

      }
    }

  });
});
