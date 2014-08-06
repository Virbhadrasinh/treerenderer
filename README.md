# Tree Renderer

This is a reusable component which helps you to create folder hierarchy using JSON as well it enables expand or collapse functionality for the children at each level
<a href="http://virbhadrasinh.github.io/treerenderer/">Demo</a>

### JSON should be following format
<pre>
[
     {
         "id": "1",
         "elementName": "Grouping 1",
         "children": [
             {
                 "elementName": "Simple Grouping",
                 "children" : [
                 	{
                 		"elementName": "Simple Grouping Child"
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
         "elementName": "Custom Formater",
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
 ]
 </pre>

To use this you need following:
* Angularjs
* Jquery

# Issues & Contribution

Let <a href="https://github.com/Virbhadrasinh">me</a> know if you have any questions. Bug report, feature request: <a href="https://github.com/Virbhadrasinh/treerenderer/issues">issue</a>
