var gulp = require('gulp');
var sass = require('gulp-sass');
var autopf = require('gulp-autoprefixer');
var notify = require('gulp-notify');


gulp.task('sass', function () {
  return gulp.src('htdocs/content/themes/themosis/resources/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('htdocs/content/themes/themosis/style'))
    .pipe(notify('Sass Compiled!'));
});

gulp.task('watch', function() {
	// Watch .scss files
	gulp.watch('htdocs/content/themes/themosis/resources/assets/sass/**/*.scss', ['sass']);
});
