// =========================================================
// Gulp Task: Images
// Description: Move images and optimize them
// npm install --save-dev imagemin gulp-replace gulp-strip
// =========================================================
const config              = require('../config.js');
const imageminMozjpeg     = require('imagemin-mozjpeg');

module.exports = function(gulp, plugins) {
    return function() {
        return (
            gulp.src(config.images.src)
                .pipe(
                    plugins.imagemin(
                        [
                            imageminMozjpeg({ quality: config.images.quality }),
                        ],
                        {
                            verbose: true
                        }
                    )
                )
                .pipe(gulp.dest(config.images.dest))
        );
    }
};