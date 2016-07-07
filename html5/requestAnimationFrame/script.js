//https://plnkr.co/edit/QQBYoiu3AksVRhYIrZmk?p=preview
(function(global) {
  var h = document.querySelector('h1');
  var btn1 = document.querySelector('.btn1');
  var btn2 = document.querySelector('.btn2');
  var t = performance.now();
  var l = 0;
  var i = 1;
  var box = 10;
  var tf = null;
  var ti = null;
  var current = null;

  function fn() {
    t = performance.now();
    var k = 1000;


    if(t - l > box) {
      for (var j = 0; j < k; j++) {
        console.log(j);
      }
      l = i*box;
      i++;
      h.innerText = l + current;
    }
  }

  function request() {
    fn();
    tf = requestAnimationFrame(request);
  }

  function initRequest() {
    clearInterval(ti);
    current = ' request';
    tf = requestAnimationFrame(request);
  }

  function initInterval() {
    cancelAnimationFrame(tf);
    current = ' interval';
    ti = setInterval(fn, 10);
  }

  btn1.addEventListener('click', initRequest);
  btn2.addEventListener('click', initInterval);

})(this);
