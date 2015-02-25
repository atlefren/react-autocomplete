module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      react: {
        build: {
          files: {
            'dist/<%= pkg.name %>.js': [
              'src/Autocomplete.jsx'
            ]
        }
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd.mm.yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/**/*.jsx',
        tasks: 'default',
      },
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/react-auocomplete.min.css': ['css/autocomplete.css']
        }
      }
    },
    build: {
      tasks: ['default'],
      gitAdd: 'package.json bower.json dist/*'
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-react');

  grunt.loadNpmTasks('grunt-bump-build-git');

  // Default task(s).
  grunt.registerTask('default', ['react', 'uglify']);

};