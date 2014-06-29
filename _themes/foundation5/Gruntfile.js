module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      options: {
        force: true
      },
      build: ["../../_cache/_app"]
    },

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
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          //outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          '../utah/css/utah.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      clean: {
        files: ['../utah/layouts/*.html', 
          '../utah/partials/*.html', 
          '../utah/templates/*.html', 
          '../../_content/**/*.md',
          '../../_content/**/*.yaml'
        ],
        tasks: ['clean']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['clean', 'sass', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}
