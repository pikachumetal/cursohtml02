//https://plnkr.co/edit/vHrlo2B4A8Q17ndVGZGS?p=preview
// Code goes here
(function(global){

  var time = 100;

  // Exercices to practise (press F12)
  console.log('History API', global.history)

  // Add some states

  global.history.pushState({number: 1}, 'My new state', '/test1');
  global.history.pushState({number: 2}, 'My new state', '/test2');
  global.history.pushState({number: 3}, 'My new state', '/test3');
  console.log('Add some states', global.history.state);


  // Go back
  setTimeout(function() {
    global.history.back();
    console.log('Go back', global.history.state);
  }, time * 0);

  // Go forward
  setTimeout(function() {
    global.history.forward();
    console.log('Go forward', global.history.state);
  }, time * 1);

  // Go
  setTimeout(function() {
    global.history.go(-2);
    console.log('Go -2', global.history.state);
  }, time * 2);

  // Go
  /*setTimeout(function() {
    global.history.go(2);
    console.log('Go +2', global.history.state);
  }, time * 3);*/

  // Popstate
  /*window.addEventListener('popstate', function(event) {
    console.log(event.state);
  });*/

})(this);



// only for plunker demo reasons
(function(global){
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  function showUrl() {
    document.querySelector('.url').innerText = window.location.href;
    requestAnimationFrame(showUrl);
  }

  requestAnimationFrame(showUrl);
})(this);
