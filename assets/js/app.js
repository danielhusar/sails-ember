(function(window, Ember, undefined){
  'use strict';

  var App = window.App = Ember.Application.create();

  App.Router.map(function() {
    this.resource('register');
    this.resource('login');
  });

  App.IndexRoute = Ember.Route.extend({
    model: function(){
      return [];
    }
  });

  App.IndexController = Ember.Controller.extend({

  });


  /** login controller **/

  App.LoginController = Ember.Controller.extend({
    error: '',
    actions: {
      login: function() {
        Ember.$.post('user/login', this.getProperties('email', 'password')).then(function(data){
          if(data.error) {
            this.set('error', data.error);
          } else {
            this.set('error', '');
          }
        }.bind(this));
      }
    }
  });

})(this, this.Ember);
