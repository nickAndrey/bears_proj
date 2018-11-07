'use strict';

let gulp = require('gulp'),
    watch = require('gulp-watch'),
    preFixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    cssMin = require('gulp-minify-css'),
    rimRaf = require('rimraf'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    reload = browserSync.reload;

let path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        css: 'src/styles/main.scss'
    },
    watch: {
        html: '',
        js: '',
        style: ''
    },
    clean: './build'
};

gulp.task('webserver', function () {
    browserSync({
        server: {
            baseDir: './build',
            directory: true
        },
        host: 'localhost',
        port: '3000',
        tunnel: true
    });
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.css)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(preFixer())
        .pipe(cssMin())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build'
]);

gulp.task('watch', function () {
    watch([path.watch.js], function (ev, callback) {
        gulp.start('js:build')
    });
    watch([path.watch.style], function (ev, callback) {
        gulp.start('style:build')
    });
    watch([path.watch.html], function (ev, callback) {
        gulp.start('html:build')
    });
});

gulp.task('clean', function (callback) {
    rimRaf(path.clean, callback);
});

gulp.task('default', ['build', 'webserver', 'watch']);
