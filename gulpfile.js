// =========================================================
// NOTE: Using Gulp 4
// npm install --save-dev gulp-load-plugins gulpjs/gulp.git#4.0
// =========================================================
const gulp 		    = require('gulp');
const config 		= require('./gulp/config.js');
const plugins		= require('gulp-load-plugins')();

// ---------------------------------- Gulp Terminal Commands
// ---- gulp build

// --------------------function to get tasks from gulp/tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins);
}

// ---------------------------------------------- Gulp Tasks
gulp.task('sass',       getTask('sass'));
gulp.task('scripts',    getTask('scripts'));
gulp.task('php',        getTask('php'));
gulp.task('image',      getTask('image'));
gulp.task('static',     getTask('static'));
gulp.task('revision',   getTask('revision'));
gulp.task('clean',      getTask('clean'));
gulp.task('sync',       getTask('browsersync'));
gulp.task('watch',   	() => {
	gulp.watch(config.styles.src, gulp.series('sass'));
	gulp.watch([...new Set(Object.values(config.scripts.src).flat(Infinity))], gulp.series('scripts'));
	gulp.watch([config.php.src, config.php.htaccess.src, config.php.lang.src], gulp.series('php'));
	gulp.watch(config.images.src, gulp.series('image'));
	gulp.watch([...config.assets.src, config.statics.src], gulp.series('static'));
});

// --------------------------------------- Default Gulp Task
gulp.task('default', gulp.series(
	gulp.parallel('sass', 'scripts', 'php', 'image', 'static'), gulp.parallel('watch', 'sync')
));

// ---------------------------------------------- gulp build
gulp.task('build', gulp.series('clean',
    gulp.parallel('sass', 'scripts', 'php', 'image', 'static'), 'revision'
));