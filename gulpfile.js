// v.1.0

var gulp = require('gulp'),                 // npm install gulp --save-dev
    sass = require('gulp-sass'),            // npm install gulp-sass --save-dev                 
    watch = require('gulp-watch'),          // npm install gulp-watch --save-dev
    minify = require('gulp-clean-css'),     // npm install gulp-cleancss --save-dev
    rename = require('gulp-rename'),        // npm install gulp-rename --save-dev
    concat = require('gulp-concat');        // npm install gulp-concat --save-dev

// Watch
gulp.task('default', function () {
    gulp.watch('./sass/*.scss');
});

// SASS into CSS
gulp.task('styles', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass())                       // SASS into CSS
        .pipe(concat('./style.css'))        // Concatenates
        .pipe(minify())                     // Minify
        .pipe(rename('style.min.css'))      // Create file with different name
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', ['styles']);
