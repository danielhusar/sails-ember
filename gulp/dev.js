'use strict';
var browser = require('open');

module.exports = function(gulp, jsFiles){

  //watch Files For Changes
  gulp.task('watch', function () {

    require('child_process').spawn('sudo', ['mongod'], {stdio: 'inherit'});
    require('child_process').spawn('sails', ['lift'], {stdio: 'inherit'});
    browser('http://localhost:1337', 'Google Chrome');

    gulp.watch(['less/*.less', 'less/**/*.less', 'less/**/**/*.less', 'less/**/**/**/*.less'], ['less']);
    gulp.watch(jsFiles, ['lint']);
  });

};
