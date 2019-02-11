'use strict';

// Imports para o SASS/SCSS
var gulp = require('gulp');
var sass = require('gulp-sass');

// Imports para o TypeScript
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


// SASS/SCSS
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

// TypeScript
gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('./src/js'));
});