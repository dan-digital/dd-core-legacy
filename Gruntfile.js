module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    html2js: {
      dd: {
        options: {
          base: 'scripts/dd',
          module: 'dd-templates'
        },
        src: 'scripts/dd/**/*.html',
        dest: 'templates/dd-templates.js'
      }
    },

    concat: {
      dd: {
        src: [
          'templates/dd-templates.js',
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

    jasmine: {
      dd: {
        src: [
          'scripts/libs/jquery-1.11.1.js',
          'scripts/libs/angular.js',
          'scripts/libs/angular-mocks.js',
          'templates/dd-templates.js',
          'scripts/dd/**/*.js'
        ],
        options: {
          specs: 'specs/**/*.spec.js'
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
        tasks: ['concat', 'uglify', 'jasmine']
      },
      app: {
        files: ['app/views/**', 'app/controllers/**', 'app/models/**']
      }
    }

  });

  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['html2js', 'concat', 'uglify', 'sass', 'autoprefixer', 'jasmine', 'watch']);
};