module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      dd: {
        src: [
          'scripts/dd/app.js',
          'scripts/dd/**/*.js'
        ],
        dest: 'public/js/dd.js'
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      dd: {
        files: {
          'public/js/dd.min.js' : 'public/js/dd.js'
        }
      }
    },

    connect: {
      jasmine: {
        options: {
          port: 8001,
          hostname: 'localhost',
          livereload: true,
          open: {
            target: 'http://localhost:8001/_specrunner.html'
          }
        }
      }
    },

    jasmine: {
      dd: {
        src: [
          'scripts/libs/jquery-1.11.1.js',
          'scripts/libs/angular.js',
          'scripts/libs/angular-mocks.js',
          'scripts/dd/**/*.js'
        ],
        options: {
          specs: 'specs/**/*.spec.js',
          keepRunner: true
        }
      }
    },

    sass: {
      options: {
        style: 'compressed'
      },
      dd: {
        files: {
          'public/css/dd.min.css' : 'styles/dd/main.scss'
        }
      }
    },

    autoprefixer: {
      all: {
        src: 'public/css/**/*.css'
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      styles: {
        files: ['styles/**/*'],
        tasks: ['sass', 'autoprefixer']
      },
      scripts: {
        files: ['scripts/**/*', 'specs/**/*'],
        tasks: ['concat', 'uglify', 'jasmine:dd:build']
      },
      app: {
        files: ['app/views/**', 'app/controllers/**', 'app/models/**']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'connect', 'jasmine', 'watch']);
};