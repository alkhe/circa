var gulp = require('gulp'),
	cached = require('gulp-cached'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	cssnext = require('gulp-cssnext')
	jade = require('gulp-jade');

var jsSrc = './client/js/**/*.js',
	jsDst = './public/js/app',
	cssSrc = './client/css/**/*.css',
	cssDst = './public/css',
	htmlSrc = './client/html/*.jade',
	htmlDst = './public/';

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
gulp.task('compile', ['js', 'css', 'html'], function() {

});

/**
 * Compile assets on change for production
 */
gulp.task('watch', ['jsw', 'cssw', 'htmlw'], function() {

});

/**
 * Compile assets for development
 */
gulp.task('compile-dev', ['js-dev', 'css-dev', 'html-dev'], function() {

});

/**
 * Compile assets on change for development
 */
gulp.task('watch-dev', ['jsw-dev', 'cssw-dev', 'htmlw-dev'], function() {

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
 * Compile Jade for production
 */
gulp.task('html', function() {
	gulp.src(htmlSrc)
		.pipe(plumber())
		.pipe(cached('html'))
		.pipe(jade({ compileDebug: false }))
		.pipe(gulp.dest(htmlDst));
});

/**
 * Compile Javascript/JSX for development
 */
gulp.task('js-dev', function() {
	gulp.src(jsSrc)
		.pipe(plumber())
		.pipe(cached('js'))
		.pipe(babel())
		.pipe(gulp.dest(jsDst));
});

/**
 * Compile Stylus for development
 */
gulp.task('css-dev', function() {
	gulp.src(cssSrc)
		.pipe(plumber())
		.pipe(cached('css'))
		.pipe(cssnext())
		.pipe(gulp.dest(cssDst));
});

/**
 * Compile Jade for development
 */
gulp.task('html-dev', function() {
	gulp.src(htmlSrc)
		.pipe(plumber())
		.pipe(cached('html'))
		.pipe(jade({ compileDebug: true }))
		.pipe(gulp.dest(htmlDst));
});


gulp.task('jsw', function() {
	gulp.watch(jsSrc, ['js']);
});

gulp.task('cssw', function() {
	gulp.watch(cssSrc, ['css']);
});

gulp.task('htmlw', function() {
	gulp.watch(htmlSrc, ['html']);
});

gulp.task('jsw-dev', function() {
	gulp.watch(jsSrc, ['js']);
});

gulp.task('cssw-dev', function() {
	gulp.watch(cssSrc, ['css']);
});

gulp.task('htmlw-dev', function() {
	gulp.watch(htmlSrc, ['html-dev']);
});
