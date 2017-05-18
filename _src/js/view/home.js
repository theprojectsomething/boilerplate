/*

  Default application template.

*/

define([
  "framework",
  "text!template/home.html",
], function (MediumFramework, Template) {

  return MediumFramework.View.extend({

    name: "home",

    el: {
      selector: ".body-wrap",

      bind: {
        '$el:main': '.main',
      },

      on: {

      }
    },

    props: {

    },

    fn: {

      init: function() {
        this.autoBind();
      },

      render: function () {
        this.$el.html(Template);
      }
    }
  });

});
