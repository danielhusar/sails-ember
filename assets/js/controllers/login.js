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

    actions: {
      login: function() {
        this.set('error', null);
        Ember.$.post('user/login', this.getProperties('email', 'password')).then(function(data) {
          console.log(data);
          if(data.error) {
            this.set('error', data.error);
          } else {
            this.set('error', '');
            this.set('token', {
              id: data.id,
              email: data.email
            });
          }
        }.bind(this));
      }
    }
  });

})(this, this.Ember);
