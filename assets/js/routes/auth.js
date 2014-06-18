(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.AuthRoute = Ember.Route.extend({

    beforeModel: function(transition) {
      if (!this.controllerFor('login').get('currentUser')) {
        this.redirectToLogin(transition);
      }
    },

    redirectToLogin: function(transition) {
      var loginController = this.controllerFor('login');
      loginController.set('attemptedTransition', transition);
      this.transitionTo('login');
    },

    actions: {
      events: {
        error: function(reason, transition) {
          if (reason.status === 404) {
            this.redirectToLogin(transition);
          }
        }
      }
    }

  });

})(this, this.Ember);
