module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		js_files: ['public/javascripts/*.js'],
		css_files: ['public/styles/*.js'],
		html_files: ['public/*.html'],
		phantomas: {
			perf : {
				options : {
					indexPath : './phantomas/',
					options   : {},
					url: 'http://localhost:9999/',
				}
			}
		},

		concat: {
			js: {
				src: ['<%= js_files %>'],
				dest: 'public/javascripts/app.concat.js',
			}
		},
		
		uglify: {
			js: {
				files: {
					'public/javascripts/app.min.js': ['<%= js_files %>']
				}
			}
		},

		uncss: {
		  dist: {
		    files: {
		      'public/used.css': ['<%= html_files %>']
		    }
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.loadNpmTasks('grunt-phantomas');

	grunt.loadNpmTasks('grunt-uncss');

	grunt.registerTask('default', ['concat', 'uglify', 'phantomas']);
};