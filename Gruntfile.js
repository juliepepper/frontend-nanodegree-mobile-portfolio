module.exports = function(grunt) {
//load plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-respimg');

  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },

        files:[{
          expand: true,
          cwd: 'views/images/',
          src: ['**/*.png'],
          dest: 'dist/views/images/',
          ext: '.png'
        }]
      },
      jpeg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '/',
          src: ['**/*.jpg'],
          dest: 'dist',
          ext: '.jpg'

        }]
      }
    },
    cssmin:{
      target: {
        files: [{
          expand: true,
          cwd: '/',
          src:['**/*.css'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },
    htmlmin: {
      dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
          files: {                                   // Dictionary of files
              'dist/index.html': 'index.html',     // 'destination': 'source'
              'dist/project-2048.html': 'project-2048.html',
              'dist/project-mobile.html': 'project-mobile.html',
              'dist/project-webperf.html': 'project-webperf.html',
              'dist/views/pizza.html': 'views/pizza.html'
            }
        }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target:{
        files: {
        'dist/js/perfmatters.js': ['js/perfmatters.js'],
        'dist/views/js/main.js':  ['views/js/main.js']
        }
      }
    },

    default: {
      options: {
        widths: [200, 400]
      },
      files: [{
        expand: true,
        cwd: 'views/img/pizzeria.jpg',
        src: ['**.{jpg}'],
        dest: 'build/img/'
      }]
    }
  },
});

  grunt.registerTask('default', ['imagemin', 'htmlmin', 'cssmin', 'uglify', 'grunt-respimg']);
  //grunt.registerTask('default', ['imagemin']);
  //grunt.registerTask('default', ['htmlmin']);
  //grunt.registerTask('default', ['cssmin']);
  //grunt.registerTask('default', ['uglify']);
  //grunt.registerTask('default', ['grunt-respimg']);
};