var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    react = require('gulp-react');

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/components/**/*.*', 'index.html'], function () {
        buildJSX();
        livereload.changed('index.html');
    });
});

gulp.task('webserver', function() {
    connect.server();
});


gulp.task('build', buildJSX);

var buildJSX = function () {
    return gulp.src('src/components/**/*.*')
        .pipe(react())
        .pipe(gulp.dest('dist'));
};
