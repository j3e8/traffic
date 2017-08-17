var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('sass', function() {
  gulp.src(['src/**/*.+(scss|css)'])
  .pipe(concat('bundle.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});

gulp.task('js', function() {
  gulp.src(['src/js/main.js', 'src/**/*.js'])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('all', function() {
  gulp.start('sass');
  gulp.start('js');
});

gulp.task('watch', function() {
  gulp.start('all');

	watch([
		'src/**/*.+(scss|css)',
	], function() {
		gulp.start('sass');
	});

	watch([
		'src/**/*.js',
	], function() {
		gulp.start('js');
	});
});
