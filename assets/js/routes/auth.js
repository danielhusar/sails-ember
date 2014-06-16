(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.AuthRoute = Ember.Route.extend({

    beforeModel: function(transition) {
      if (!this.controllerFor('login').get('token')) {
        this.redirectToLogin(transition);
      }
    },

    redirectToLogin: function(transition) {
      var loginController = this.controllerFor('login');
      loginController.set('attemptedTransition', transition);
      this.transitionTo('login');
    },

  });

})(this, this.Ember);
