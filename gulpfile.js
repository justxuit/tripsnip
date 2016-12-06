var gulp = require('gulp');

var useref = require('gulp-useref');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});



// Other requires...
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});



var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});



var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});



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
})
