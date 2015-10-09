var gulp = require('gulp');
var sass = require('gulp-sass');
var renames = require('gulp-rename');
var concats = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('default',['sass','js']);

gulp.task('sass',function(){
    gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(renames('rola.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

// This task only compile SASS
gulp.task('sass:compile',function(){
    gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(renames('rola.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js',function(){
    gulp.src(['src/libs/js/**/*.js','src/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concats('all.js'))
        .pipe(renames('rola.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch:sass',function(){
    return gulp.watch('src/sass/**/*.scss',['sass'])
});
