angular.module('ngD3', []).constant('d3', null).config(['$provide', function ($provide) {
  var ctx = {
    h: (function () { {{lib}} }())
  }
  $provide.constant('d3', ctx.d3);
}]);
