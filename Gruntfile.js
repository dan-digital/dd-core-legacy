module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var config = {
    app: 'app',
    dev: 'public/.dev',
    views: 'app/views',
    includes: 'app/views/includes',
    layouts: 'app/views/layouts'
  };

  grunt.initConfig({
    
    config: config,

    wiredep: {
      dd: {
        ignorePath: /^[\.\/]+\/public/,
        src: [
          '<%= config.includes %>/admin/script-tags.blade.php',
          '<%= config.includes %>/admin/style-tags.blade.php'
        ]
      }
    },
    
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      views: {
        files: ['<%= config.views %>/**']
      }
    },

    html2js: {
      dd: {
        options: {
          base: 'scripts/dd',
          module: 'dd-templates'
        },
        src: 'scripts/dd/**/*.html',
        dest: 'scripts/dd/dd-templates.js'
      }
    },

    concat: {
      dd: {
        src: [
          'scripts/dd/dd-templates.js',
          'scripts/dd/app.js',
          'scripts/dd/**/*.js'
        ],
        dest: '<%= config.dev %>/js/dd.js'
      }
    },

  });

  grunt.registerTask('dev', [
    'wiredep',
    'html2js',
    'concat',
    'watch'
  ]);

};