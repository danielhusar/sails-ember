(function(window, Ember, undefined){
  'use strict';

  var App = window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource('register');
    this.resource('login');
    this.resource('users');
    this.resource('user', { path: ':id' });
  });

  App.IndexRoute = Ember.Route.extend({
    model: function(){
      return [];
    }
  });

  App.IndexController = Ember.Controller.extend({
    error: 'test'
  });



  App.LoginController = Ember.Controller.extend({
    login: function() {
      var newUser = App.Login.create({
        email: this.get('loginEmail'),
        password: this.get('loginPassword')
      });
      newUser.save();
    }
  });

  App.Login = Ember.Model.extend({
    email: Ember.attr(),
    password: Ember.attr(),
  });

  App.Login.adapter = Ember.RESTAdapter.create();
  App.Login.url = 'login';
  App.Login.collectionKey = 'error';

})(this, this.Ember);
