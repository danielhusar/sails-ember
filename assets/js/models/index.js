(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.IndexRoute = App.AuthRoute.extend({
    model: function(){
      var user = this.controllerFor('login').get('currentUser');
      return Ember.$.post('todo/listTodos', {email: user.email});
    }
  });

})(this, this.Ember);
