module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		css_files: ['public/styles/*.css'],
		html_files: ['public/*.html'],
		phantomas: {
			perf : {
				options : {
					indexPath : './phantomas/',
					options   : {},
					url: 'http://localhost:9999/'
				}
			}
		},

		concat: {
			styles: {
                src: ['<%= css_files %>'],
                dest: 'public/styles/app.css'
			}
		},

		cssmin: {
			minify: {
				src: 'public/styles/app.css',
				dest: 'build/styles/app.css'
				// ext: '.min.css'
			}
		},

        uncss: {
            dist: {
                files: {
                    'public/styles/app.css': ['public/index.html']
                }
            }
        },


		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.min.html': ['<%= html_files %>']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-phantomas');
    grunt.loadNpmTasks('grunt-responsive-images');

	grunt.registerTask('default', ['concat', 'uncss', 'cssmin',  'htmlmin']);
};