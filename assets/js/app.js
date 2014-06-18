(function(window, Ember, undefined){
  'use strict';

  var App = window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource('users');
    this.resource('register');
    this.resource('login');
    this.resource('logout');
  });

})(this, this.Ember);
