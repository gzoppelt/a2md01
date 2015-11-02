var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass')

;

// Scripts Task
// uglifies,..
gulp.task('scripts', function (){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
    ;
});

// Styles Task
// compiles sass
gulp.task('styles', function (){
    //gulp.src('scss/**/*.scss')
    //    .pipe(sass())
    //    .pipe(gulp.dest('css/'))
    return sass('scss/**/*.scss').pipe(gulp.dest('css/'));
});

// Watch Task
// watches JS
gulp.task('watch', function (){
    gulp.watch('js/*.js', [
        'scripts'
    ]);
});

gulp.task('default', [
    'scripts',
    'styles',
    'watch'
]);