'use strict';

app.controller('TaskDetailCtrl', function ($scope, $routeParams, Subtask) {
    $scope.taskid = $routeParams.taskid;
    Subtask.setTaskId($scope.taskid);
    $scope.task = Subtask.parent();
    $scope.subtasks = Subtask.all();
    $scope.subtask = {done: false, note: '', editing: false};

    $scope.submitSubtask = function() {
        Subtask.create($scope.subtask).then(function(){
            $scope.subtask = {done: false, note: '', editing: false};
        });
    };

    $scope.deleteSubtask = function(subtask) {
        Subtask.delete(subtask);
    };

    $scope.editSubtask = function(subtask){
        subtask.editing = true;
    };

    $scope.doneEditSubtask = function(index, subtask){
        subtask.editing = false;
        Subtask.save(index);
    };
});
