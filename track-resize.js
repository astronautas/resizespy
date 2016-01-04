/* ResizeSpy v1.0
 * A Javascript library for tracking changes of object dimensions
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