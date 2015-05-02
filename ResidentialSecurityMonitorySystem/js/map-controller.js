/**
 * 
 */
angular.module("ss.MapCtrlModule",[])
.controller("MapCtrl",["$scope",function($scope){
	var id = document.getElementById("map");
	console.log(id);
	var mapOptions = {
	      center: new google.maps.LatLng(35.784, -78.670),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	$scope.myMap = new google.maps.Map(document.getElementById("map"), mapOptions);
}]);