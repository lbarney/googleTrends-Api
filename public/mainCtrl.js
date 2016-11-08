angular.module("googleTrends").controller("mainCtrl", function($scope, mainServ){

	$scope.searchTerm = "";
	$scope.getData = function(searchTerm){
		mainServ.getInfo(searchTerm)
		.then(function(response){
			console.log(response.data);
			$scope.data = response.data;
		});
	};



});