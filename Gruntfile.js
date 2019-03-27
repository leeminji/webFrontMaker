const mozjpeg = require('imagemin-mozjpeg'); 

module.exports = function(grunt) {
	grunt.initConfig  ({
		//imagemin 설정 이미지를 압축해준다.
		imagemin: {
			static: {
				options: {
				optimizationLevel: 5,
				svgoPlugins: [{removeViewBox: false}],
				use: [ mozjpeg() ] // Example plugin usage
				}
			},
			dynamic: {
				files: [{
					expand: true,
					cwd: './public/cyclo/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: './output/cyclo/public/images/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);

};