// =========================================================
// Project: PROJECT-NAME
// =========================================================
// ------------------------------------------ Export Configs
module.exports = {
    production: false,
    // --------------------------------------------- browsersync
    connectPhp: {
        port: 8000,
        keepalive: true,
        base: './dist/'
    },
    browsersync: {
        opts: {
            server: './src/',
            open: true,
            watch: true
        },
        proxy: '127.0.0.1:8000'
    },
    // -------------------------------------------------- template
    php: {
        src: './src/**/*.php',
        dest: './dist/',
        htaccess: {
            src: './src/**/.htaccess',
            dest: './dist/'
        },
        lang: {
            src: './src/lang/**/*.php',
            dest: './dist/lang'
        },
        init: {
            dev: {
                src: './prod/init-dev.php',
                dest: './dist/',
            },
            prod: {
                src: './prod/init-prod.php',
                dest: './dist/',
            }
        }
    },
    // -------------------------------------------------- statics
    statics: {
        src: './static/**',
        dest: './dist'
    },
    // -------------------------------------------------- Assets
    assets: {
        src: [
            './src/assets/**',
            '!./src/assets/images/**'
        ],
        dest: './dist/assets'
    },
    images: {
        src: './src/assets/images/**',
        dest: './dist/assets/images/',
        quality: 80
    },
    // ------------------------------------------------- scripts
    scripts: {
        src: {
            'template': [
                './src/js/template.js',
                // another dependency will save to file template.js
            ],
            'common': [
                './src/js/es6-promise.auto.min.js',
                './src/js/axios.min.js',
                './src/js/animate.min.js',
                './src/js/modules/class-bulk.js',
                './src/js/modules/modal.js',
                './src/js/modules/buttonSpinner.js',
                './src/js/modules/snackbar.js',
                './src/js/common.js'
            ]
        },
        dest: './dist/js/'
    },
    // -------------------------------------------------- styles
    styles: {
        src: [
            './src/sass/**/*.scss',
        ],
        dest: './dist/css/'
    },
    revision: {
        manifest: {
            js: './dist/js/rev-manifest.json',
            css: './dist/css/rev-manifest.json'
        },
        js: {
            src: './dist/js/**/*.js',
            dest: './dist/js'
        },
        css: {
            src: './dist/css/**/*.css',
            dest: './dist/css'
        },
        template: {
            src: './dist/**/*.php',
            dest: './dist'
        }
    },
    clean: {
        folders: [
            './dist/'
        ]
    }
}