(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.LoginRoute = Ember.Route.extend({

    beforeModel: function(transition) {
      if (this.controllerFor('login').get('currentUser')) {
        this.transitionToRoute('index');
      }
    },

  });

})(this, this.Ember);
