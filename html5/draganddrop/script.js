//https://plnkr.co/edit/MYqCfrYr4JLW39I9D9pq?p=preview
(function(global) {

  var info = {
    '1': 'Hi',
    '2': 'Bye'
  };

  var selected = 0;

  function start(e) {
    e.dataTransfer.setData('text/plain', JSON.stringify(info));
  }

  function over(e) {
    e.preventDefault();
    selected = e.target.dataset.id;
  }

  function stop(e, isSecond) {
    var currentInfo = JSON.parse(e.dataTransfer.getData('text/plain'));
    alert(currentInfo[selected]);
  }

  var drag = document.querySelector('h1');
  var drop1 = document.querySelector('.drop1');
  var drop2 = document.querySelector('.drop2');

  drag.addEventListener('dragstart', start);
  drop1.addEventListener('dragover', over);
  drop2.addEventListener('dragover', over);
  drop1.addEventListener('drop', stop);
  drop2.addEventListener('drop', stop);
})(this);
