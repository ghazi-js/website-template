// =========================================================
// Gulp Task: scripts
// Description: bundle all js, concat and uglify
// npm install --save-dev gulp-concat gulp-environments gulp-uglify merge-stream gulp-rename gulp-filesize
// =========================================================
const config              = require('../config.js');
const merge               = require('merge-stream');

module.exports = function(gulp, plugins) {
    return function() {
        let streamList = [];
        for (let [output, srcFiles] of Object.entries(config.scripts.src)) {
            streamList.push(
                gulp.src(srcFiles)
                    .pipe(plugins.concat(output))
                    .pipe(plugins.environments.production(plugins.stripDebug()))
                    .pipe(plugins.uglify())
                    .pipe(plugins.rename(`${output}.js`))
                    .pipe(gulp.dest(config.scripts.dest))
                    .pipe(plugins.filesize())
            );
        }

        return merge(...streamList);
    }
};