import gulp from 'gulp';
import jade from 'gulp-jade';

gulp.task('html', () =>
	gulp.src('./src/html/*.jade')
		.pipe(jade({ compileDebug: false }))
		.pipe(gulp.dest('./public'))
);
