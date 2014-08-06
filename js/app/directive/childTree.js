/*This the directive to create child tree nodes at each level*/
angular.module('TreeCreator').directive('childTree', function ($compile) {
    "use strict";
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/childTree.html',
        link: function (scope, elm, attrs) {
            scope.toggle = function (event) {
                var target = $(event.target),
                    childs = target.parent('li').find('ul').first(),
                    subChilds = null,
                    subParents = null;

                /*Expand or collapse functionality DOM manipulation logic*/
                if (target.hasClass('collapse') && childs.length <= 0) {
                    return;
                } else if (target.hasClass('collapse') && childs.length > 0) {
                    childs.attr('style', 'display: none !important');
                    subChilds = childs.children();
                    for (var i = 0; i < subChilds.length; i++) {
                        subParents = $(subChilds[i]);
                        if (subParents.find('ul').length <= 0) {
                            subParents.find('span.expand').addClass('collapse');
                        } else {
                            subParents.find('span.expand').removeClass('collapse');
                        }
                    }
                } else {
                    childs.attr('style', 'display: block !important');
                    subParents = childs.find('li');
                    subParents.find('ul').attr('style', 'display: none !important');
                    subParents.attr('style', 'display: block !important');
                    if (subParents.find('ul').length <= 0) {
                        subParents.find('span.expand').addClass('collapse');
                    }
                }
                target.toggleClass('collapse');
            };

            /*If particular JSON node has child nodes then again add parent and so on*/
            if (angular.isDefined(scope.childnode.children) && scope.childnode.children.length > 0) {
                var child = $compile('<tree tree-data="childnode.children" is-child="true"></tree>')(scope);
                elm.append(child);
            } else {
                elm.find('span.expand').addClass('collapse');
            }
        }
    };
});