const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const images = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/*.scss')
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(gulp.dest('.dist/css'));
}

function Imagemin() {
    return gulp.src('./src/images/*')
    .pipe(images())
    .pipe(gulp.dest('.dist/images'));
    
}

exports.default = gulp.parallel(styles, Imagemin);

exports.watch = function() {
    gulp.watch('./src/*.scss', gulp.parallel(styles));
}