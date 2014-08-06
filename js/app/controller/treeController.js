angular.module('TreeCreator').controller("TreeController", [
    '$scope',
    'TREE_DATA',
    function ($scope, TREE_DATA) {
        "use strict";
        $scope.treeData = TREE_DATA.TREE;
    }]);