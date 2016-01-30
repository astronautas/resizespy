# ResizeSpy
Track dimension changes of DOM objects.

#####How to use
##### Without requirejs
1. Include resize-spy-bare.js in your HTML document (preferably just before </body> tag)

  ```<script src='resize-spy.js'></script>```


2. To track resize of an object, create new resizeSpy object and provide reference to element and reference to callback function
via parameters
  
  ```
  var element = document.getElementById('elementID')
  new ResizeSpy(element, function() {
    console.log('I have been resized!');
  });
  ```
  
##### With requirejs
1. Put resize-spy.js into your project directory
2. Load as a module resize-spy
  ```
  define(['resize-spy'], function(ResizeSpy)) {

  }
  ```
3. To track objects, use ResizeSpy.trackResize(object, callbackFunction) syntax

#####What about .resize?
It only works on window object. Other DOM objects such as body or some other elements
do not have resize event.

##### How to contribute
1. Refactor code
2. Search for bugs
3. Discuss
