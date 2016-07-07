'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  runner = require('run-sequence'),
  moduleImporter = require('sass-module-importer');

gulp.task('sass-dev', function () {
  var scss = ["./scss/**/*.s+(a|c)ss", "!./scss/clients/**/*.s+(a|c)ss"];

  return gulp.src(scss)
    .pipe(sass({ importer: moduleImporter() }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  var scss = ["./scss/**/*.s+(a|c)ss", "!./scss/clients/**/*.s+(a|c)ss"];

  return gulp.src(scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ importer: moduleImporter() }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.s+(a|c)ss', ['sass-dev']);  
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('js', function () {
  return gulp.src('./js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./jsdist'));
});

gulp.task('default', function () {
  runner('sass-dev', 'js');
});