'use strict';

// Declare app level module which depends on filters, and services
var gowe = angular.module('gowe', ['chieffancypants.loadingBar', 'ngAnimate'])
    .config(function(cfpLoadingBarProvider) {
        console.log('Configuring loading bar');
        cfpLoadingBarProvider.includeSpinner = true;
    });
