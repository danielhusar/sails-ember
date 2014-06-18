(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.ApplicationController = App.AuthController.extend({
    actions: {
      logout: function() {
        this.set('error', null);
        Ember.$.post('user/logout').then(function(data) {
          if(data.error) {
            this.set('error', data.error);
          } else {
            this.set('error', null);
            this.controllerFor('login').set('currentUser', null);
            this.transitionToRoute('login');
          }
        }.bind(this));
      }
    }
  });

})(this, this.Ember);
