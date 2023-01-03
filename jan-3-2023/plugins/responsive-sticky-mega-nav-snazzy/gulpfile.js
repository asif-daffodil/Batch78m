'use strict';

// Load plugins
const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Compile scss into css/ add vendor prefixes/ compress css
function style() {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Minify images
function images() {
    return gulp
        .src('./images/*')
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
            ])
        )
        .pipe(gulp.dest('dist/images'));
}

// Watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html',
        },
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// Export tasks
exports.style = style;
exports.images = images;
exports.watch = watch;