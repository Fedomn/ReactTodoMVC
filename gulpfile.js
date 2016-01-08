var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('app/**/*.*', function (file) {
        livereload.changed(file);
    });
});

gulp.task('webserver', function() {
    connect.server();
});