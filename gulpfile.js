var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync'); 
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function() {
	return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/')) 
        .pipe(reload({stream: true})); 
        
});


gulp.task('jshint', function() {
  	return gulp.src('js/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('jshint-stylish'))
	    .pipe(reload({stream: true}));

});


gulp.task('browser-sync', function() {
  	browserSync({
    	server: { baseDir: "./" }
 	});
});


gulp.task('default', ['browser-sync','styles', 'jshint', 'watch']);


//Watch task

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('*.html', reload);
});


