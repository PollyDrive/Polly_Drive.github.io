var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');


gulp.task('sass', function(){
	return gulp.src('public/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'public'
		},
	});
});

gulp.task('w', ['browser-sync', 'sass'], function(){
	gulp.watch('public/sass/**/*.scss',['sass']);
	gulp.watch('public/*.html',browserSync.reload);
	gulp.watch('public/js/*.js',browserSync.reload);
});