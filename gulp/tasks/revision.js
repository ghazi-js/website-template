// =========================================================
// Gulp Task: revision
// Description: CSS and JavaScript cache busting
// npm install --save-dev
// =========================================================
const config              = require('../config.js');
const merge               = require('merge-stream');
const del                 = require('del');

module.exports = function(gulp, plugins) {
    const revision = () => {
        return merge([
            gulp.src(config.revision.js.src)
                .pipe(plugins.rev())
                .pipe(plugins.revDeleteOriginal())
                .pipe(gulp.dest(config.revision.js.dest))
                .pipe(plugins.rev.manifest())
                .pipe(gulp.dest(config.revision.js.dest)),
            gulp.src(config.revision.css.src)
                .pipe(plugins.rev())
                .pipe(plugins.revDeleteOriginal())
                .pipe(gulp.dest(config.revision.css.dest))
                .pipe(plugins.rev.manifest())
                .pipe(gulp.dest(config.revision.css.dest))
        ]);
    };
    const revisionReplace = () => {
        const manifestJs = gulp.src(config.revision.manifest.js);
        const manifestCSS = gulp.src(config.revision.manifest.css);
        return (
            gulp.src(config.revision.template.src)
                .pipe(plugins.revReplace({manifest: manifestJs, replaceInExtensions: ['.php']}))
                .pipe(plugins.revReplace({manifest: manifestCSS, replaceInExtensions: ['.php']}))
                .pipe(gulp.dest(config.revision.template.dest))
        );
    };
    const stream = (...args) => {
        return gulp.series(revision, revisionReplace)(...args);
    };
    
    return function(...args) {
        return stream(...args);
    }
};