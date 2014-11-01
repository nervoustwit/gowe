'use strict';

/* Services */

gowe.factory('helloWorld', function() {
    return {
        echoSomething: function() {
            return 'hello world';
        }
    };
});

gowe.factory('navigationDisplay', function() {
    return {
        makeACircle: function($scope) {

            var items = $scope.items;
            for (var i = 0, l = items.length; i < l; i++) {
                items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
                items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
                items[i].onclick = function(e) {
                    var content = $(this).data('content');
                    $scope.contentDisplay.showContent(e, content);
                }
            }
      },
        arrangeVertically: function($scope) {

            var items = $scope.items;
            for (var i = 0, l = items.length; i < l; i++) {
                items[i].style.left = "30px";
                var top = (i == 0) ? 110 : 110 + (55 * i);
                items[i].style.top = top + "px";
                items[i].onclick = function(e) {
                    var content = $(this).data('content');
                    $scope.contentDisplay.showContent(e, content);
                }
            }

       },
        enableCircleButton: function() {

            document.querySelector('.circular-menu .menu-button').onclick = function(e) {
                e.preventDefault();
                document.querySelector('.links').classList.toggle('open');

            }
        },
        enableMarginButton: function() {

            document.querySelector('.margin-menu .menu-button').onclick = function(e) {
                window.location.reload();
                console.log('clicking');
            }
        }
    }

}).factory('contentDisplay', function(){
	return {
            
            showContent: function(e, content) {

                e.preventDefault();

                var visibleContent = document.querySelectorAll('.visible-content');

                if (visibleContent.length > 0) {
                    $('.visible-content').fadeOut(function() {
                        $('#' + content).fadeIn('slow').addClass('visible-content');
                        return false
                    });
                } else {
                    $('#' + content).fadeIn('slow').addClass('visible-content');
                }
            }
        
	}
	
});