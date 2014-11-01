'use strict';

/* Controllers */
  
gowe.controller('NavigationCtrl', ['$scope', 'navigationDisplay', 'contentDisplay', 'cfpLoadingBar', '$timeout', function($scope, navigationDisplay, contentDisplay, cfpLoadingBar, $timeout) {
          
        $scope.useMargin = false;
        $scope.useCircular = true;
        
        $scope.links = [
    
          {title : 'Home', url : 'index.html', content : '', css : 'home'},    
          {title : 'Bitcoin Consultancy', content : 'btc', css : 'btc'},    
          {title : 'Mobile Applications', content : 'android', css : 'android'},    
          {title : 'HTML 5', content : 'html5', css : 'html5'},    
          {title : 'Open Source Projects', content : 'github', css : 'github'},    
          {title : 'Contact Us', content : 'contact', css : 'envelope'},    
          {title : 'Pinterest', content : 'pinterest', css : 'pinterest'},
          {title : 'Other', content : 'other', css : 'asterisk'}
        ];
        
        
        $scope.circleMenuDone = function() {
            $scope.items = document.querySelectorAll('.circular-menu .links a');
            $scope.contentDisplay = contentDisplay;
            navigationDisplay.makeACircle($scope);
            navigationDisplay.enableCircleButton(); // execution of this function is called from the partial navigation.html
            
        };
 

        $scope.moveMenu = function() {
            
            $scope.useCircular = false;
            $scope.useMargin = true;
            $scope.items = document.querySelectorAll('.margin-menu .links a');
            $scope.contentDisplay = contentDisplay;
            navigationDisplay.arrangeVertically($scope);
            navigationDisplay.enableMarginButton();
            
        }
        
        $scope.start = function() {
          console.log('Initiating start!');
          cfpLoadingBar.start();
        };
        
        $scope.complete = function () {
          console.log('Initiating complete!');
          cfpLoadingBar.complete();
        }
        
        $scope.start();
        $scope.fakeIntro = true;
        $timeout(function() {
          $scope.complete();
          $scope.fakeIntro = false;
        }, 9000);

  }])
  

  .controller('ContactUsCtrl', ['$scope', 'helloWorld', function($scope, helloWorld) {
    	//$scope.m = helloWorld.echoSomething();
        $scope.messagecontent = false;
        $scope.sendContact = function() {
            
            if($scope.contactForm.$valid) {
                $scope.hasSuccess = true;
                $scope.contactForm.$setPristine();
                $scope.messagecontent = 'Thank you for your message ' + $scope.name;
                $scope.messagetype = 'success';
                $scope.name = null;
                $scope.email = null;
                $scope.message = null;

            } else {
                $scope.thankyoumessage = 'Please verify that you have filled in all the fields correctly';
            }
            
        };
        
  }]);