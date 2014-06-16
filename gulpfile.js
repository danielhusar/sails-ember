'use strict';

// Include gulp
var gulp = require('gulp');

//js files
var jsFiles = [
  'assets/js/**/*.js',
  '!assets/js/**/*.js'
  ];


// Include Our Plugins
require('./gulp/javascripts.js')(gulp);
require('./gulp/css.js')(gulp);
require('./gulp/dev.js')(gulp, jsFiles);

//tasks aliases
gulp.task('server', ['watch']);
gulp.task('default', ['less', 'scripts']);

