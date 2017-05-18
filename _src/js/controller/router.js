/*

  Application Router

*/

define([
  "framework",
], function (MediumFramework) {
  return MediumFramework.Router.extend({

    name: 'router',

    props: {
      routes: {
        'home': '',
        'home': '*missing'
      }
    },

    fn: {
      init: function () {
        this.on(":router:before", this.fn.on.before);
        this.start();
      },

      on: {
        before: function () {
          $('body').attr('data-route-prev', this.props.current ? this.props.current.name : "");
        }
      }
    }
  });

});
