var gulp = require('gulp');
var concatCss = require('gulp-concat-css');


gulp.task('cssconcat', function () {
  return gulp.src('app/**/*.css')
    .pipe(concatCss("css/bundle.css"))
    .pipe(gulp.dest('dist'));
});


var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify({
          mangle: false
        }),
        gulp.dest('dist/js')
    ],
    cb
  );
});


//DO NOT TOUCH!!
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});



gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});
