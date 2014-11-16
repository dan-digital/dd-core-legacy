module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
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
      app: {
        files: ['app/**']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);
};