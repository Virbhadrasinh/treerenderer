(function () {
    'use strict';
    /*This is the sample constant JSON for create demo Tree*/
    angular.module('TreeCreator').constant('TREE_DATA', {
        TREE: [
            {
                "id": "1",
                "elementName": "Movies",
                "children": [
                    {
                        "elementName": "Year 2014",
                        "children": [
                            {
                                "elementName": "Hollywood",
                                "children": [
                                    {
                                        "elementName": "Transformers: Age of Extinction"

                                    },
                                    {
                                        "elementName": "X-Men: Days of Future Past"

                                    },
                                    {
                                        "elementName": "Captain America: The Winter Soldier"

                                    }
                                ]
                            },
                            {
                                "elementName": "Bollywood",
                                "children": [
                                    {
                                        "elementName": "Kick"

                                    },
                                    {
                                        "elementName": "Humpty Sharma Ki Dulhania"

                                    },
                                    {
                                        "elementName": "Lekar Hum Deewana Dil"

                                    },
                                    {
                                        "elementName": "Bhoothnath Returns"

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "elementName": "Year 2013",
                        "children": [
                            {
                                "elementName": "Hollywood",
                                "children": [
                                    {
                                        "elementName": "Iron Man 3"

                                    },
                                    {
                                        "elementName": "The Hobbit: The Desolation of Smaug"

                                    },
                                    {
                                        "elementName": "Fast & Furious 6"

                                    },
                                    {
                                        "elementName": "Thor: The Dark World"

                                    }
                                ]
                            },
                            {
                                "elementName": "Bollywood",
                                "children": [
                                    {
                                        "elementName": "Dhoom 3"

                                    },
                                    {
                                        "elementName": "Chennai Express"

                                    },
                                    {
                                        "elementName": "Yeh Jawaani Hai Deewani"

                                    },
                                    {
                                        "elementName": "Goliyon Ki Raasleela Ram-Leela"

                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    });
}());






