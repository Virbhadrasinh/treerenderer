/*This is the directive to create parent tree nodes at each level*/
angular.module('TreeCreator').directive('tree', function () {
    "use strict";
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/tree.html',
        scope: {
            treeData: '=',
            isChild: "@"
        }
    };
});
