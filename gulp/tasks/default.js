'use strict';

const gulp = require('gulp');

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('serve');
});
