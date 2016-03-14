var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: "./",
          directory: true
      }
  });

  gulp.watch('./Stage*/**/*.html').on("change", browserSync.reload);
  gulp.watch('./Stage*/**/*.css').on("change", browserSync.reload);
  gulp.watch('./Stage*/**/*.js').on("change", browserSync.reload);
});

gulp.task('default', ['serve']);
