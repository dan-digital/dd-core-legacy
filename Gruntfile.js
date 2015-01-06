module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var config = {
    dev: 'public/.dev',
    dist: 'public',
    views: 'app/views',
    views_dist: 'app/views.min',
    useminViews: [
      'includes/admin/script-tags.blade.php',
      'includes/admin/style-tags.blade.php'
    ]
  };

  grunt.initConfig({
    
    config: config,

    wiredep: {
      dd: {
        ignorePath: /^[\.\/]+\/public/,
        src: [
          '<%= config.views %>/includes/admin/script-tags.blade.php',
          '<%= config.views %>/includes/admin/style-tags.blade.php'
        ]
      }
    },

    html2js: {
      dd: {
        options: {
          base: 'scripts/dd',
          module: 'dd-templates'
        },
        src: 'scripts/dd/**/*.html',
        dest: '<%= config.dev %>/js/dd-templates.js'
      }
    },

    concat: {
      dd: {
        src: [
          'scripts/dd/app.js',
          'scripts/dd/**/*.js'
        ],
        dest: '<%= config.dev %>/js/dd.js'
      }
    },

    sass: {
      dd: {
        files: {
          '<%= config.dev %>/css/dd.css' : 'styles/dd/main.scss'
        }
      }
    },

    autoprefixer: {
      all: {
        src: '<%= config.dev %>/css/**/*.css'
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      views: {
        files: ['<%= config.views %>/**']
      },
      sass: {
        files: ['styles/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      ddJs: {
        files: ['scripts/dd/**'],
        tasks: ['html2js:dd', 'concat:dd']
      }
    },

    useminPrepare: {
      views: {
        options: {
          dest: '<%= config.dist %>'
        },
        files: [{
          expand: true,
          cwd: '<%= config.views %>',
          src: config.useminViews
        }]
      }
    },

    usemin: {
      html: '<%= config.views_dist %>/**/*.php'
    },

    copy: {
      useminViews: {
        files: [{
          expand: true,
          cwd: '<%= config.views %>',
          src: config.useminViews,
          dest: '<%= config.views_dist %>'
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: [
            'css/build',
            'js/build'
          ]
        },
        {
          src: [
            '<%= config.views_dist %>/*',
            '!<%= config.views_dist %>/.gitignore'
          ]
        }]
      },
      tmp: {
        src: ['.tmp']
      }
    }

  });
  
  grunt.registerTask('default', ['build']);

  grunt.registerTask('dev', [
    'wiredep',
    'html2js',
    'concat',
    'sass',
    'autoprefixer',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'html2js',
    'concat:dd',
    'sass',
    'autoprefixer',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'copy:useminViews',
    'usemin',
    'clean:tmp'
  ]);

};