// required
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');


// Scripts task
gulp.task('scripts', function() {
  gulp.src('app/**/*.js')
  .pipe(reload({stream:true}));
});

// CSS tasks
gulp.task('css', function(){
	gulp.src('app/**/*.css')
	.pipe(reload({stream:true}));
});

// HTML task
gulp.task('html', function(){
	gulp.src('app**/*.html')
	.pipe(reload({stream:true}));
});

// Browser-Sync tasks
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./app/"
		}
	})
});

// watch tasks
gulp.task('watch',function(){
	gulp.watch('app/css/**/*.css', ['css']);
	gulp.watch('app**/*.html',['html']);
	gulp.watch('app/**/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['html','scripts','css','browser-sync','watch']);