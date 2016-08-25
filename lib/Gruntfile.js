"use strict"
module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js':['../scripts/quiz.js']
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"CarLot":true},
        browserify: true
      },
      files: ['../scripts/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['browserify', 'jshint', 'watch', 'sass'] );
}