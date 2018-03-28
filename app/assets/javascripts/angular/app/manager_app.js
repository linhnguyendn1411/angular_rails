(function() {
  angular.module('managerApp', ['ui.bootstrap', 'commonLib', 'ngFlash', 'ngSanitize', 'colorpicker.module'])
    .config(['$httpProvider', '$locationProvider', defaultConfig])
})();
