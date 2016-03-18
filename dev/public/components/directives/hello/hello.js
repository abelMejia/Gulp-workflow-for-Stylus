angular
.module('Hello', [])
.directive('helloWorld', function() {
	return {
		replace: true,
		controller: 'mainController as main',
		templateUrl: 'components/directives/hello/tpl.html'
	}

})