angular.module('TreeCreator').controller("TreeController", function ($scope) {
    "use strict";
    $scope.treeData = [
        {
            "id": "1",
            "elementName": "Grouping",
            "children": [
                {
                    "elementName": "Simple Grouping",
                    "children" : [
                        {
                            "elementName": "Simple Grouping Child",
                            "children" : [
                                {
                                    "elementName": "Simple Grouping Child 111",
                                    "children" : [
                                        {
                                            "elementName": "Simple Grouping Child 1112222"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "elementName": "May be some other grouping"
                }
            ]
        },
        {
            "id": "2",
            "elementName": "CustomFormater",
            "children": [
                {
                    "elementName": "Image Formatter"

                },
                {
                    "elementName": "Anchor Formatter",
                    "children" : [
                        {
                            "elementName": "Anchor Formatter Child"
                        }
                    ]
                }
            ]
        }
    ];

});