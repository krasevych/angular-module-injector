const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    package = require('./package.json');

var options = {
    output: 'dist/',
    scripts: [
        'src/angular-module-injector.ts'
    ],
    test: [
        'test/spec/**/*.js'
    ]
};

const header = `/** <%= package.name %> v<%= package.version %>
    * (c) ${new Date().getFullYear()} <%= package.author %>
    * License: MIT
    * <%= package.homepage %>
    */ \n`;

gulp.task('scripts', ['clean'], function () {
    return gulp.src(options.scripts)
        .pipe($.plumber())
        .pipe($.tslint())
        .pipe($.tslint.report('prose', {emitError: false}))
        .pipe($.typescript({target: 'es5'}))
        .pipe($.header(header, {package: package}))
        .pipe(gulp.dest('dist/'))
        .pipe($.rename({suffix: '.min'}))
        .pipe($.uglify())
        .pipe($.header(header, {package: package}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
    return gulp.src(options.output, {read: false})
        .pipe($.plumber())
        .pipe($.clean());
});

gulp.task('default', [
    'clean',
    'scripts'
]);