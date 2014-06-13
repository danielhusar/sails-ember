(function(window, Ember, undefined){
  'use strict';

  var App = window.App = Ember.Application.create();

  App.Router.map(function() {
    // put your routes here
  });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return ['red', 'yellow', 'blue'];
    }
  });

})(this, this.Ember);
