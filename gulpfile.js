var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('cssmin', function () {
    gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('docs/css'));
});



var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify({
          mangle: false
        }),
        gulp.dest('docs/js')
    ],
    cb
  );
});



var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('docs/images'))
});



gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('docs/fonts'))
});


gulp.task('partials', function() {
  return gulp.src('app/partials/**/*')
  .pipe(gulp.dest('docs/partials'))
});
