angular.module('your_app_name.feed.controllers', [])

.controller('FeedCtrl', function($scope,  $ionicScrollDelegate, ShoppingCartService) {
	$scope.getProductsInCart = function(){
		return ShoppingCartService.getProducts().length;
	};
})

.controller('FoodCtrl', function($scope, $http, $ionicPopover) {

  //Populate areas
  $http.get("http://localhost:3000/area/list").then(function(res, status) {
    $scope.areas = res.data.areas;
    console.log(res.data);
  }, function(res, status) {
    if(res.status == 401){
    }else{
    }
  });


  $scope.prodcuts = [];
  $scope.broadcast = function(selectedArea){

    //Populate products
    $http.get("http://localhost:3000/meal/list/"+selectedArea).then(function(res, status) {
      console.log(res.data.meals);
      $scope.meals = res.data.meals;
    }, function(res, status) {
      if(res.status == 401){
      }else{
      }
    });


    console.log("*****Selected area: "+ selectedArea);
    if(selectedArea){
       $scope.products = [
       {
       "id": 1,
       "price_range": 3,
       "image": "./img/sample-images/food/foodlogo1.png",
       "name": "NomNom",
       "rating": 4.3,
       "tags": [
       "vegetarian",
       "vegan",
       "desserts"
       ],
       "pictures": [
       "./img/sample-images/food/Cat1Foto1-1.1.png",
       "./img/sample-images/food/Cat1Foto2-1.1.png",
       "./img/sample-images/food/Cat1Foto3-1.1.png",
       "./img/sample-images/food/Cat1Foto4-1.1.png",
       "./img/sample-images/food/Cat1Foto5-1.1.png",
       "./img/sample-images/food/Cat1Foto1-1.1.png",
       "./img/sample-images/food/Cat1Foto2-1.1.png",
       "./img/sample-images/food/Cat1Foto3-1.1.png"
       ],
       "address": "6782 Bobwhite Crossing"
       }, {
       "id": 2,
       "price_range": 1,
       "image": "./img/sample-images/food/foodlogo2.png",
       "name": "HappyFoods",
       "rating": 3.7,
       "tags": [
       "mexican",
       "sushi",
       "vegetarian"
       ],
       "pictures": [
       "./img/sample-images/food/Cat2Foto1-1.1.png",
       "./img/sample-images/food/Cat2Foto2-1.1.png",
       "./img/sample-images/food/Cat2Foto3-1.1.png",
       "./img/sample-images/food/Cat2Foto4-1.1.png",
       "./img/sample-images/food/Cat2Foto5-1.1.png",
       "./img/sample-images/food/Cat2Foto1-1.1.png",
       "./img/sample-images/food/Cat2Foto2-1.1.png"
       ],
       "address": "1 Buhler Parkway"
       }, {
       "id": 3,
       "price_range": 2,
       "image": "./img/sample-images/food/foodlogo3.png",
       "name": "Tasty",
       "rating": 2.5,
       "tags": [
       "meats",
       "indian",
       "currys",
       "desserts"
       ],
       "pictures": [
       "./img/sample-images/food/Cat3Foto1-1.1.png",
       "./img/sample-images/food/Cat3Foto2-1.1.png",
       "./img/sample-images/food/Cat3Foto3-1.1.png",
       "./img/sample-images/food/Cat3Foto4-1.1.png"
       ],
       "address": "7104 Burning Wood Park"
       }, {
       "id": 4,
       "price_range": 2,
       "image": "./img/sample-images/food/foodlogo4.png",
       "name": "Debbie’s",
       "rating": 5,
       "tags": [
       "fish",
       "gluten free",
       "pizza"
       ],
       "pictures": [
       "./img/sample-images/food/Cat4Foto1-1.1.png",
       "./img/sample-images/food/Cat4Foto2-1.1.png",
       "./img/sample-images/food/Cat4Foto3-1.1.png",
       "./img/sample-images/food/Cat4Foto4-1.1.png",
       "./img/sample-images/food/Cat4Foto5-1.1.png",
       "./img/sample-images/food/Cat4Foto4-1.1.png",
       "./img/sample-images/food/Cat4Foto3-1.1.png"
       ],
       "address": "4362 Wandsworth Street"
       }
       ];
    }
    else{
      $scope.products = [];
    }
  };
})

.controller('TravelCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('RealStateCtrl', function($scope, products) {
	$scope.products = products;
})

;
