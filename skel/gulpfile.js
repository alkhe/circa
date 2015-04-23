var gulp = require('gulp'),
	cached = require('gulp-cached'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	cssnext = require('gulp-cssnext');

var jsSrc = ['./client/js/**/*.js', './client/js/**/*.jsx'],
	jsDst = './public/js/app',
	cssSrc = './client/css/**/*.css',
	cssDst = './public/css';

/**
 * Compile and watch assets in production mode
 */
gulp.task('default', ['compile', 'watch'], function() {

});

/**
 * Compile and watch assets in development mode
 */
gulp.task('dev', ['compile-dev', 'watch-dev'], function() {

});

/**
 * Compile assets for production
 */
gulp.task('compile', ['js', 'css'], function() {

});

/**
 * Compile assets on change for production
 */
gulp.task('watch', ['jsw', 'cssw'], function() {

});

/**
 * Compile assets for development
 */
gulp.task('compile-dev', ['js-dev', 'css-dev'], function() {

});

/**
 * Compile assets on change for development
 */
gulp.task('watch-dev', ['jsw-dev', 'cssw-dev'], function() {

});

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js', function() {
	gulp.src(jsSrc)
		.pipe(plumber())
		.pipe(cached('js'))
		.pipe(sourcemaps.init())
			.pipe(babel())
			.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(jsDst));
});

/**
 * Compile Stylus for production
 */
gulp.task('css', function() {
	gulp.src(cssSrc)
		.pipe(plumber())
		.pipe(cached('css'))
		.pipe(cssnext({ compress: true }))
		.pipe(gulp.dest(cssDst));
});

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js-dev', function() {
	gulp.src(jsSrc)
		.pipe(plumber())
		.pipe(cached('js'))
		.pipe(babel())
		.pipe(gulp.dest(jsDst));
});

/**
 * Compile Stylus for production
 */
gulp.task('css-dev', function() {
	gulp.src(cssSrc)
		.pipe(plumber())
		.pipe(cached('css'))
		.pipe(cssnext())
		.pipe(gulp.dest(cssDst));
});


gulp.task('jsw', function() {
	gulp.watch(jsSrc, ['js']);
});

gulp.task('cssw', function() {
	gulp.watch(cssSrc, ['css']);
});


gulp.task('jsw-dev', function() {
	gulp.watch(jsSrc, ['js']);
});

gulp.task('cssw-dev', function() {
	gulp.watch(cssSrc, ['css']);
});
