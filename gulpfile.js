const gulp = require('gulp');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const eslint = require('gulp-eslint');
const tsProject = ts.createProject("tsconfig.json");

const paths = {
    scripts: {
        src: [
            'src/ts/*.ts',
        ],
        dest: 'dist/js/',
        watch: [
            'src/ts/*.ts',
        ],
    }
};

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(ts())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest, { sourcemaps: '.' }));
}

function test() {
    return gulp.src(paths.scripts.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

gulp.task('build', scripts);
gulp.task('test', gulp.parallel(test));
gulp.task('watch', function () {
    gulp.watch(paths.scripts.watch, {interval: 200}, scripts);
});
gulp.task('default', gulp.series('build', 'watch'));
