angular.module('your_app_name.auth.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicLoading, $timeout, $http, $rootScope, $auth) {
	$scope.user = {};

	$scope.user.email = "";
	$scope.user.password = "";

	$scope.doLogIn = function(){
		console.log("Logging in");
		$ionicLoading.show({
      		template: 'Logging in...'
    	});

    	$auth.login({ email: $scope.user.email, password: $scope.user.password })
        .then(function(res) {
            console.log($auth.isAuthenticated());
			$ionicLoading.hide();            
            $state.go('main.app.feed.food');
        })
        .catch(function(response) {
        	$ionicLoading.hide();            
            console.log(response);
            $scope.error = "wrong password";
        });

/*
		$timeout(function(){
		}, 9800);
		var data = {
            email: $scope.user.email,
            password: $scope.user.password
        };
        $http.post("http://localhost:3000/auth/login", data).then(function(res, status) {
            console.log(res.data);
            $rootScope.token = res.data.token;
            console.log($rootScope.token);
            $ionicLoading.hide();
            $state.go('main.app.feed.food');
        }, function(res, status) {
        	$ionicLoading.hide();
        	if(res.status == 401){
        		$scope.error = "Please enter the correct combination of email and password";
        	}else{
        		$scope.error = "We experienced a network issue. Please try again later";
        	}
        });
*/
	};

	$scope.doFacebookLogIn = function(){
		console.log("doing FACEBOOK log in");

		$ionicLoading.show({
      template: 'Loging in...'
    });

		$timeout(function(){
			// Simulate login OK
			$state.go('main.app.feed.fashion');
      $ionicLoading.hide();

			// Simulate login ERROR
			// $scope.error = "This is an error message";
			// $ionicLoading.hide();
		}, 800);
	};
})

.controller('SignupCtrl', function($scope, $state, $ionicLoading, $timeout, $ionicModal) {
	$scope.user = {};

	$scope.user.name = "Marian Hill";
	$scope.user.email = "";
	$scope.user.password = "";

	$scope.doSignUp = function(){
		console.log("doing sign up");

		$ionicLoading.show({
      template: 'Creating account...'
    });

		$timeout(function(){
			// Simulate login OK
			// $state.go('main.app.feed.fashion');
      // $ionicLoading.hide();

			// Simulate login ERROR
			$scope.error = "This is an error message";
			$ionicLoading.hide();
		}, 800);
	};

	$scope.doFacebookSignUp = function(){
		console.log("doing FACEBOOK sign up");

		$ionicLoading.show({
      template: 'Creating account...'
    });

		$timeout(function(){
			// Simulate login OK
			$state.go('main.app.feed.fashion');
      $ionicLoading.hide();

			// Simulate login ERROR
			// $scope.error = "This is an error message";
			// $ionicLoading.hide();
		}, 800);
	};

	$ionicModal.fromTemplateUrl('views/legal/privacy-policy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.privacy_policy_modal = modal;
  });

	$ionicModal.fromTemplateUrl('views/legal/terms-of-service.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.terms_of_service_modal = modal;
  });

	$scope.showTerms = function(){
		$scope.terms_of_service_modal.show();
	};

	$scope.showPrivacyPolicy = function(){
		$scope.privacy_policy_modal.show();
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state, $ionicLoading, $timeout) {
	$scope.user = {};

	$scope.user.email = "";

	$scope.recoverPassword = function(){
		console.log("recover password");

		$ionicLoading.show({
      template: 'Recovering password...'
    });

		$timeout(function(){
			// Simulate login OK
			$state.go('main.app.feed.fashion');
      $ionicLoading.hide();

			// Simulate login ERROR
			// $scope.error = "This is an error message";
			// $ionicLoading.hide();
		}, 800);
	};
})


;
