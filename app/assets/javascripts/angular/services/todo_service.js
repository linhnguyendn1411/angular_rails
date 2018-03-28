'use strict';

angular.module('managerApp')
  .factory('todoService', ['ajaxLib', 'common', todoService]);


function todoService(ajaxLib, common) {
  return {
    create: create,
    destroy: destroy,
    update: update,
  };

  function create(params) {
    return ajaxLib.ajaxCall('POST', '/todos', {data: params});
  }

  function destroy(todoId) {
    var url = '/todos/' + todoId;
    var paramsDestroy = {
      id: todoId
    };
    return ajaxLib.ajaxCall('DELETE', url, {params: paramsDestroy});
  }

  function update(params) {
    var url = '/todos/' + params.id;
    return ajaxLib.ajaxCall('PATCH', url, {data: params});
  }
}
