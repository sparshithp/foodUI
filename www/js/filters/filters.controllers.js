angular.module('your_app_name.filters.controllers', [])

.controller('FiltersCtrl', function($scope, $state, $rootScope, $ionicSlideBoxDelegate) {

	$scope.category_filter = 'Fashion';

	$scope.tags_filter = {};
	$scope.tags_filter.vegetables = true;
	$scope.tags_filter.asian = true;

	$scope.color_filter = '#c284e5';

	$scope.size_filter = 'M';

	$scope.ingredients_filter = {};
	$scope.ingredients_filter.butter = true;
	$scope.ingredients_filter.lemon = true;

	$scope.show_filter = 'Bars';

	$scope.budget_filter = '$';

	$scope.distance_filter = 30;

	$scope.cancelRefine = function(){
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.applyRefine = function(){
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
		// console.log("Apply refine");
		//
		// var backView = $ionicHistory.backView();
		// backView.stateParams.filters = 'pepe';
		// backView && backView.go();
	};

	$scope.lockSlide = function () {
    $ionicSlideBoxDelegate.$getByHandle('filter-tabs-slider').enableSlide(false);
  };
})

;
