/**
 * 
 */
angular.module("ss.EnforcementApp",["ui.router","ui.map","ss.MainCtrlModule","ss.MapCtrlModule","ss.MiscCtrlModule", "ss.DirectivesModules"])
.run(function(){
	console.log("booting...");
})
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	//TODO add controller to the states
	$stateProvider.state("landing",{
		url:"/land",
		templateUrl:"templates/app-landing.html",
		controllerAs:"MainCtrl as mCtrl" 
	})
	.state("main", {
		url:"/main",
		abstract: true,
		templateUrl: "templates/main-view.html"
	})
	.state("main.cards", {
		url:"/cards",
		views: {
			"map-view": {
				templateUrl:"templates/map-view-card.html",
				controller: "MapCtrl"
			},
			"query-view": {
				templateUrl:"templates/query-view-card.html",
				controller: "QueryCtrl"
			},
			"info-view": {
				templateUrl:"templates/info-view-card.html",
				controller: "InfoCtrl"
			}
		}
		
	});
	$urlRouterProvider.otherwise("/land");
	
}]);
