// =========================================================
// Gulp Task: browsersync
// Description:  Sync sass, javascript, html, php and browser
// using external config or add modify src
// npm install --save-dev browser-sync gulpjs/gulp.git#4.0 gulp-load-plugins
// =========================================================
const config              = require('../config.js');
const browsersync         = require('browser-sync');

module.exports = function(gulp, plugins) {
    return function () {
        plugins.connectPhp.server(config.connectPhp, () => {
            browsersync({
                proxy: config.browsersync.proxy
            });
        });
        
        const scriptSrcFiles = [...new Set(Object.values(config.scripts.src).flat())];
        const browserSyncObj = browsersync.create();
        browserSyncObj.watch([...config.styles.src, ...scriptSrcFiles, config.php.src]).on('change', browsersync.reload);
    };
};