// =========================================================
// Gulp Task: scripts
// Description: Move php file, add analytics to production env and strip html comments
// npm install --save-dev gulp-environments gulp-replace gulp-strip
// =========================================================
const config              = require('../config.js');
const merge               = require('merge-stream');
const fs                  = require('fs');

module.exports = function(gulp, plugins) {
    return function() {
        // TODO: CHANGE HOSTNAME
        const analytics     = plugins.environments.production() ? fs.readFileSync('./prod/analytics.html', "utf8") : '';
        const init          = plugins.environments.production() ? config.php.init.prod : config.php.init.dev;
        const hostname      = plugins.environments.production() ? 'http://domain.com' : 'http://localhost/dirname';
        return merge([
            gulp.src(config.php.src)
                .pipe(plugins.replace('<!!-- google_analytics -->', analytics))
                .pipe(plugins.stripComments())
                .pipe(gulp.dest(config.php.dest)),
            gulp.src(init.src)
                .pipe(plugins.rename(`init.php`))
                .pipe(gulp.dest(init.dest)),
            gulp.src(config.php.htaccess.src)
            .pipe(plugins.replace('<!--HOSTNAME--!>', hostname))
                .pipe(gulp.dest(config.php.htaccess.dest)),
            gulp.src(config.php.lang.src)
            .pipe(gulp.dest(config.php.lang.dest))
        ]);
    }
};