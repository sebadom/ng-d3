angular.module('ngD3', []).constant('d3', null).config(['$provide', function ($provide) {
  var d3Export;

  {{lib}}

  $provide.constant('d3', d3Export);
}]);
