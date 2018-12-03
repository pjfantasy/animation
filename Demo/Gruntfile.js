function config(name) {
	return require('./tasks/' + name + '.js');
}

module.exports = function(grunt) {
	// cach 1: automatic load Grunt plugins.
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// concat: config('concat'),
		// jshint: config('jshint'),
		uglify: config('uglify'),
		less: config('less'),
		watch: {
			options: { keepalive: true },
			files: [
				'src/less/**/*.less',
				'src/less/**/*.css',
				'src/js/**/*.js'],
			tasks: ['less', 'uglify']
		}
	});
	
	// Tasks - npm - grunt dist or grunt
	grunt.registerTask('dist', ['uglify', 'less']);
	grunt.registerTask('default', ['watch', 'uglify']);
};