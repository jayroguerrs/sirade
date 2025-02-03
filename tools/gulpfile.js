var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
var terser = require('gulp-terser');
var { parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('css', () => {
    return gulp.src('../dev/**/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('../prod/'));
  });

gulp.task('img', function () {
    return gulp.src('../dev/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('../prod/'));
});

gulp.task('js', function () {
    return gulp.src('../dev/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('../prod/'));
});

gulp.task('html', () => {
    return gulp.src('../dev/**/*.php')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('../prod/'));
});

gulp.task('copy-php', () => {
    return gulp.src('../dev/**/*.php')
      .pipe(gulp.dest('../prod/'));
});

gulp.task('default', parallel('css', 'img', 'js', 'copy-php'));

gulp.task('watch', function () {    
    gulp.watch('../dev/admin/assets/css/*.css', parallel('css'));
    gulp.watch('../dev/admin/assets/img/*.+(png|jpg|gif|svg)', parallel('img'));
    gulp.watch('../dev/admin/assets/js/*.js', parallel('js'));
});