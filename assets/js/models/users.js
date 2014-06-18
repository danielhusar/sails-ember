(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.UsersRoute = App.AuthRoute.extend({
    model: function(){
      var user = this.controllerFor('login').get('currentUser');
      return Ember.$.post('todo/users', {email: user.email});
    }
  });

})(this, this.Ember);
