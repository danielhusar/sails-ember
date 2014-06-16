(function(window, Ember, undefined){
  'use strict';

  var App = window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource('register');
    this.resource('login');
  });

})(this, this.Ember);
