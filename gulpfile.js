var gulp = require('gulp');
var sass = require('gulp-sass');
var renames = require('gulp-rename');
var concats = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default',['sass','js']);

gulp.task('sass',function(){
    gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(renames('rola.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js',function(){
    gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concats('all.js'))
        .pipe(renames('rola.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});
