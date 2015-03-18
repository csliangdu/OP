/**
 * Created by Administrator on 2015/3/17.
 */
/* jshint undef:false*/
(function() {
  'use strict';

  describe('TaskCtrl', function() {
    var rootScope;
    var ctrl;
    var scope;
    beforeEach(module('sbAdminApp'));
    beforeEach(inject(function($rootScope, $controller) {
       var task = {
          'jobClass': 'jobs.FundJob',
           'jobName': 'just a test',
           'jobStartTime': '2015-03-17T16:00:00.000Z',
           'seconds': '1',
          'hours': '0',
           'month': '*',
           'minutes': '*/20',
           'dayOfMonth': '4',
           'dayOfWeek': '三'
       };
      $rootScope.task = task;
      rootScope = $rootScope;
      scope = $rootScope.$new();
      ctrl = $controller('TaskCtrl', {
        $scope: scope
      });
    }));

    it('taskCtrl不会为空', function() {
      expect(ctrl).not.toEqual(null);
    });

    it('taskCtrl获取任务列表返回状态码为0', function() {
      expect(ctrl.listTasks().$$state.status).toEqual(0);

    });

    it('taskCtrl获取任务列表返回状态码为0', function() {
      console.info(ctrl.saveTask());

    });

  });
})();