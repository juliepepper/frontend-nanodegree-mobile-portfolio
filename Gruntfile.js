module.exports = function(grunt) {
//load plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },

        files:[{
          expand: true,
          cwd: 'src/views/images/',
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
          cwd: 'src/',
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
          cwd: 'src/',
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
              'dist/index.html': 'src/index.html',     // 'destination': 'source'
              'dist/project-2048.html': 'src/project-2048.html',
              'dist/project-mobile.html': 'src/project-mobile.html',
              'dist/project-webperf.html': 'src/project-webperf.html',
              'dist/views/pizza.html': 'src/views/pizza.html'
            }
        }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target:{
        files: {
        'dist/js/perfmatters.js': ['src/js/perfmatters.js'],
        'dist/views/js/main.js':  ['src/views/js/main.js']
        }
      }
    }


  });

  grunt.registerTask('default',['imagemin']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['uglify']);
};