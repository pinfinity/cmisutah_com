module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy :{
      main: {
        files: [
        { src: 'bower_components/jquery/dist/jquery.min.js', dest: '../utah/js/jquery.min.js'}, 
        { src: 'bower_components/modernizr/modernizr.js', dest: '../utah/js/modernizr.js'},
        { src: 'bower_components/foundation/js/foundation.min.js', dest: '../utah/js/foundation.min.js'}
        ]
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss',
                        '../utah/scss/']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          '../utah/css/utah.css' : 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}
