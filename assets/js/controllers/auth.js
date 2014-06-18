(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.AuthController = Ember.Controller.extend({
    needs: ['login'],
    currentUser: Ember.computed.alias('controllers.login.currentUser')
  });

})(this, this.Ember);
