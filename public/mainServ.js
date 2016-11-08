angular.module("googleTrends").service("mainServ", function($http){
	
	this.getInfo = function(searchTerm){
		return $http({
			method: "GET",
			url: "/data/"+searchTerm
		})
		.then(function(response){
			return response;
		})
	};
	
	
	
	
});



