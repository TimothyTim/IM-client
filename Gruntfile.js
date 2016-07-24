/**
 * Created by timpritchard on 23/11/14.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'public/stylesheets'
                }
            }
        },

        autoprefixer: {
            no_dest: {
                src: 'public/stylesheets/*.css' // globbing is also possible here
            }
        },
        browserify:     {
            /* Roughly equivalent to:
            * jsx --watch ./public/javascripts/src/ ./public/javascripts/build/
            * browserify ./public/javascripts/build/bundle.js > ./public/javascripts/build/bundle-browserified.js
            */
            options:      {
                transform:  [ require('grunt-react').browserify ]
            },
            app:          {
                src:        'public/javascripts/src/bundle.jsx',
                dest:       'public/javascripts/build/bundle.js'
            }
        },

        watch: {
            scripts: {
               files: ["public/javascripts/src/*.jsx"],
               tasks: ["browserify"],
               options: {
                   spawn: false,
               },
            },
            css: {
               files: ["public/**/*.scss"],
               tasks: ["compass", "autoprefixer"]
            },
            options: {
                livereload: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');


    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['browserify', 'compass', 'autoprefixer']);

};
