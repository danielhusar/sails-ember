/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
'use strict';

module.exports = {



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {},


  login: function (req, res) {
    var bcrypt = require('bcrypt');

    if(req.body.email) {

      User.findOneByEmail(req.body.email).done(function (err, user) {
        if (err) {
          res.json({ error: 'DB error' }, 404);
        }

        if (user) {
          bcrypt.compare(req.body.password, user.password, function (err, match) {
            if (err) {
              res.json({ error: 'Server error' }, 404);
            }

            if (match) {
              // password match
              req.session.user = user.id;
              res.json(user);
            } else {
              // invalid password
              if (req.session.user) {
                req.session.user = null;
              }
              res.json({ error: 'Invalid password' }, 404);
            }
          });
        } else {
          res.json({ error: 'User not found' }, 404);
        }
      });

    } else {
      res.json({ error: 'Email not present' }, 404);
    }
  },

  logout: function (req, res) {
    req.session.user = null;
    res.json({});
  },

  listUsers: function(req, res){
    if (!req.session.user) {
      res.json({ error: 'Not logged in' }, 404);
    } else {
      User.find().done(function (err, users) {
        if (err) {
          res.json({ error: 'DB error' }, 404);
        }
        if (users) {
          res.json(users);
        } else {
          res.json({ error: 'User not found' }, 404);
        }
      });

    }
  }


};
