'use strict';

// Imports para o SASS/SCSS
var gulp = require('gulp');
var sass = require('gulp-sass');


// SASS/SCSS
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/app/sass/**/*.scss', ['sass']);
});
