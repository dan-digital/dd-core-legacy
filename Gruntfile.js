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
        files: ['scripts/**/*'],
        tasks: ['concat', 'uglify']
      },
      app: {
        files: ['app/views/**', 'app/controllers/**', 'app/models/**']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'watch']);
};