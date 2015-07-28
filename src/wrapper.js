angular.module('ngD3', []).constant('d3', null).config(['$provide', function ($provide) {
  this.d3 = null;

  {{lib}}

  $provide.constant('d3', this.d3);
}]);
