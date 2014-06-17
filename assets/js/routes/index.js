(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.IndexRoute = App.AuthRoute.extend({
    model: function(){
      var token = this.controllerFor('login').get('currentUser');
      var email = '';
      if (token) {
        email = token.email;
      }
      return Ember.$.post('todo/listTodos', {email: email});
    }
  });

})(this, this.Ember);
