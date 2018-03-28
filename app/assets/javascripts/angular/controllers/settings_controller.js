'use strict';

angular.module('managerApp')
  .controller('settingsControler', settingsControler);


settingsControler.$inject = ['dataService'];
function settingsControler(dataService) {
  var vm = this;

  vm.initControllerName = function(controllerName){
    dataService.setControllerName(controllerName);
  };
}
