module.exports = function(grunt) {

	// Revise according tips
	//   https://github.com/html5rocks/www.html5rocks.com/tree/master/content/tutorials/tooling/supercharging-your-gruntfile/static/sample

    // 1. All configuration goes here
    grunt.initConfig({

        // Object definitions
        //   load theme and plugins information
        pkg: grunt.file.readJSON('package.json'),
        data: {
		  "theme": {
			"sass": {
			  "src": "themes/nextissue-new/sass",
			  "dest": "themes/nextissue-new",
			  "relocate": true
			},
			"scripts": {
			  "src": "themes/nextissue-new/javascripts",
			  "dest": "",
			  "relocate": false
			},
			"images": {
			  "src": "themes/nextissue-new/images",
			  "dest": "",
			  "relocate": false
			},
			"fonts": {
			  "src": "themes/nextissue-new/fonts",
			  "dest": "",
			  "relocate": false
			}
		  },
		},


        // Grunt plugin objects
        exec: {
          new_mag: {
            cmd: 'echo This stub will create a new magazine scaffolding'
          }
        },

        jshint: {
          files: ['package.json','Gruntfile.js'],
          options: {
			eqnull: false, // true: tolerate use of '== null'
			eqeqeq: false, // true: Require triple equals (===) for comparison
			laxbreak: false, // true: tolerate possibly unsafe line breaking
			camelcase: false, // true: Indentifiers must be in camelCase
            globals: {
              jquery: true
            }
          }
        },

        concat: {
        },

        sass: {
            dist: {
              files: {
                  'main.css': '/main.scss'
              } // dest: target  '*.css': 'targetname.scss'
            }
        },

        csslint: {
          strict: {
            options: {
              import: 2
            },
            src: []
          },
          lax: {
            options: {
              import: false
            },
            src: []
          }
        },

        cssmin: {
        },

        uglify: {
        },

        imagemin: {
        },

        watch: {
          options: {
          },

          scripts: {
            files: ['package.json','Gruntfile.js',
                    'src/**/*.js'
                   ],
            tasks: ['jshint']
          },

          styles: {
            files: ['src/**/*.scss'],
            tasks: ['sass','csslint']
          }
        }

    });

    // 3. Where we tell Grunt we plan to use all installed grunt-* plug-ins.
	///   Possible plugins to add
	///   http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    // grunt.registerTask('prod', ['uglify']);

};
