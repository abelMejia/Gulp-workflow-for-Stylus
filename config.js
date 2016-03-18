var dev = 'dev'

var $ = {
	babel: require('gulp-babel'),
	concat: require('gulp-concat'),
	data: require('gulp-data'),
	del: require('del'),
	extend: require('extend'),
	express: require('express'),
	fs: require('fs'),
	gulp: require('gulp'),
	jade: require('gulp-jade'),
	notify: require('gulp-notify'),
	open: require('open'),
	path: require('path'),
	runSequence: require('run-sequence'),
	stylus: require('gulp-stylus'),
	uglify: require('gulp-uglify'),
	wrap: require('gulp-wrap'),

	server: './../server/server',
	task: `./${dev}/tasks`,

	dev: {	
		dir: './dev',
		public: {
			dir: './dev/public',
			img: './dev/public/img'
		},
		bower: './bower_components',
	},

	deploy: {
		dir: './deploy',
		public: {
			dir: './deploy/public',
			img: './deploy/public/img',
			vendorJS: './deploy/public/js/vendor',
			css: './deploy/public/css',
			vendorCss: './deploy/public/css/vendor'
		}
	}

}

$.fn = {
	dataJade(file) {
		const FILE =  $.path.basename(file.path, '.jade')

  		const DIRFILE = $.path.dirname(file.path)

  		const ROUTE = $.path.resolve(__dirname, DIRFILE, `_${FILE}.js`)
  		const ROUTEGLOBAL = $.path.resolve(__dirname, './dev/_global.js')


  		delete require.cache[ROUTE]
  		delete require.cache[ROUTEGLOBAL]

  		const dataJSon = {}
  		const dataJsonFile = ($.fs.existsSync(ROUTE)) ? require(ROUTE) : {}
        const dataJsonGlobal = ($.fs.existsSync(ROUTEGLOBAL)) ? require(ROUTEGLOBAL) : {}


        $.extend(true, dataJSon, dataJsonGlobal)
        $.extend(true, dataJSon, dataJsonFile)

  		return dataJSon

	},

	readFolder: function(folder) {
		var PATH = $.path.join(__dirname, folder)

		var FILES = $.fs.readdirSync(PATH)

		FILES.forEach(function(file){
			return require(`${$.task}/${file}`)($)
		})

	}
}

module.exports = $