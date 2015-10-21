
var port = 6014;

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var flatten = require('gulp-flatten');
var connect = require('gulp-connect');
var open = require('gulp-open');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function () {
  return del([
    'bin'
  ]);
});

gulp.task('build:html', ['clean'], function(){
  return gulp.src('src/index.html')
        .pipe(gulp.dest('bin'));
});

gulp.task('build:tsc', ['clean'], function () {
  return tsProject.src()
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('bin'));
});

gulp.task('lib:debug', ['clean'], function(){
  return gulp.src(['./lib/*/*.js', '!./lib/*/*.min.js'])
    .pipe(flatten())
    .pipe(gulp.dest('./bin'));
});

gulp.task('lib:release', ['clean'], function(){
  return gulp.src(['./lib/*/*.min.js'])
    .pipe(flatten())
    .pipe(gulp.dest('./bin'));
});

gulp.task('serve', ['build:debug'], function(){
  connect.server({
    root: 'bin',
    port: port,
    livereload: true
  });
});

gulp.task('live-reload', ['build:debug'], function(){
  return gulp.src(['*', '!bin/*'])
    .pipe(connect.reload());
})

gulp.task('watch', function(){
  gulp.watch(['*', '!bin/*'], ['live-reload']);
  
});

gulp.task('build:debug', ['build:html', 'build:tsc', 'lib:debug']);
gulp.task('build:release', ['build:html', 'build:tsc', 'lib:release']);

gulp.task('debug', ['serve', 'watch'], function(){
  gulp.src(__filename)
    .pipe(open({uri: 'http://localhost:'+port}));
});

gulp.task('default', ['debug']);