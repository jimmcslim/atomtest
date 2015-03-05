module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		'download-atom-shell': {
			version: '0.21.3',
			outputDir: 'atom-shell'
		}
	});

	grunt.registerTask('default', ['download-atom-shell']);
}