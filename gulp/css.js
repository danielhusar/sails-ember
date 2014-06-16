'use strict';

var rename = require('gulp-rename');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var prefix = require('gulp-autoprefixer');

module.exports = function(gulp){

  //run less
  gulp.task('less', function () {
    gulp.src(['./assets/less/style.less'])
      .pipe(less({
        sourceMap: true,
        paths: [ './assets/less' ]
      }))
      .pipe(prefix('last 5 versions', '> 1%', 'ie 8', 'ie 9', {
        map:  true,
        from: 'style.css',
        to:   'style.css'
      }))
      .pipe(gulp.dest('./assets/css'))
      .pipe(cssmin({
        expand: true,
        keepSpecialComments: 0,
        noAdvanced: true
      })).pipe(rename({
        suffix: '.min',
        extname: '.css'
      })).pipe(gulp.dest('assets/css'));
  });
};
