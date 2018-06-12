const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
  gulp.src('src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  gulp.src('src/images/*.{jpg,png}')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      }))
      .on('error', sass.logError)
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
  return gulp.src('src/js/*js')
    .pipe(babel())
    .pipe(concat('main.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['images', 'html', 'sass', 'scripts']);

gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*{jpg,png}', ['images']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['html']);
});