module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var config = {
    app: 'app',
    views: 'app/views',
    includes: 'app/views/includes',
    layouts: 'app/views/layouts',
    dist: 'dist'
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
    }

  });

  grunt.registerTask('dev', [
    'wiredep',
    'watch'
  ]);

};