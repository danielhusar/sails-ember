(function(window, Ember, undefined){
  'use strict';

  var App = window.App;

  App.LoginController = Ember.Controller.extend({

    reset: function(){
      this.setProperties({
        email: '',
        password: '',
        error: ''
      });
    },

    test: 'aa',

    actions: {
      login: function() {
        this.set('error', null);
        Ember.$.post('user/login', this.getProperties('email', 'password')).then(function(data) {
          if(data.error) {
            this.set('error', data.error);
          } else {
            this.set('error', null);
            this.set('currentUser', {
              id: data.id,
              email: data.email
            });

            var attemptedTransition = this.get('attemptedTransition');
            if (attemptedTransition) {
              attemptedTransition.retry();
              this.set('attemptedTransition', null);
            } else {
              this.transitionToRoute('index');
            }
          }
        }.bind(this));
      }
    }
  });

})(this, this.Ember);
