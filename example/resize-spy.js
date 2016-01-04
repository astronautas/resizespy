/* ResizeSpy v1.0
 * A Javascript library for tracking changes of object dimensions
 * Due to the fact that resize event only works for window object, the solution has to implemented manually
 * A callback is run when specified object's dimensions change
 * An event 'elResize' is also dispatched which can be listened to via eventListener
 * Author:  Lukas Valatka
 * Website: www.valatka.net
 */

function ResizeSpy(object, callbackFn) {
  var resizeEvent = new CustomEvent('elResize');
  var element     = object;
  var prevWidth   = element.getBoundingClientRect().width;
  var prevHeight  = element.getBoundingClientRect().height;

  setInterval(function() {
    trackUpdate();
  }, 50);

  var trackUpdate = function() {

    elementWidth  = element.getBoundingClientRect().width;
    elementHeight = element.getBoundingClientRect().height;

    if (elementWidth != prevWidth || elementHeight != prevHeight) {
      element.dispatchEvent(resizeEvent);
      callbackFn();
    }

    prevWidth  = elementWidth;
    prevHeight = elementHeight;
  };

}

$(document).ready(function() {
  var footer = document.getElementsByClassName('footer')[0];

  // Creating a new ResizeSpy object. Arguments include the object which
  // we want to track and callback function. The function get executed when
  // the object is resized
  var trackResize = new ResizeSpy(footer, function() {
    document.getElementById('indicator').innerHTML = 'Changed';    
  });

  // You can also listen to to changes of the object after applying ResizeSpy on it
  // via eventListener
  footer.addEventListener('elResize', function() {
    console.log('I have changed!!');
  })
});
