/*
	方便開發用的, 利用grunt-nodemon, 檔案有改動就會自動重啟
	npm install -g grunt-cli
	grunt => dev mode
	grunt production => production mode
*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	nodemon: {
	    def: {
	        script: 'app.js',
	        options: {
	            file: 'app.js',
	            args: [],
	            ignoredFiles: ['public/**'],
	            watchedExtensions: ['js'],
	            nodeArgs: ['--debug'],
	            delayTime: 1,
	            env: {
	                PORT: 2502
	            },
	            cwd: __dirname
	        }
	    },
	    production: {
	        script: 'app.js',
	        options: {
	            file: 'app.js',
	            args: ['production'],
	            ignoredFiles: ['public/**'],
	            watchedExtensions: ['js'],
	            nodeArgs: ['--debug'],
	            delayTime: 1,
	            env: {
	                PORT: 2502
	            },
	            cwd: __dirname
	        }
	    }
}
  });


  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', [ 'nodemon:def' ]);
  grunt.registerTask('production', [ 'nodemon:production' ]);
};