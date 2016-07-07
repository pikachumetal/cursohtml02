self.addEventListener('message', function(e) {
  var stringOpt = e.data;
  var opt = null;
  var listOpt = stringOpt.split('=');

  var result = new Function('return ' + listOpt[0]);

  self.postMessage(listOpt[0] + ' = ' + result());
});
