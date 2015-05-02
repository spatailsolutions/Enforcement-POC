/**
 * 
 */
angular.module("ss.DirectivesModules",[])
.directive("ssNav", [function(){
	return{
		restrict:"EA",
		templateUrl:"templates/header.html"
	}
}]);