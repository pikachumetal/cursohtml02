(function(global) {
  var h = document.querySelector('h1');

  var colors = {
    pink: 'pink',
    red: 'red',
    blue: 'blue',
    green: 'green'
  };

  function checkColor(color) {
    return colors[color] || defaultColor;
  }

  var defaultColor = colors.pink;
  var dataColors = {
    first: checkColor(h.dataset.color1),
    second: checkColor(h.dataset.color2)
  }

  function onClick(e) {
    var el = e.target;
    var color = el.classList[0];
    el.classList.remove(color);
    color = checkColor(color);
    el.classList.add(dataColors.first === color ? dataColors.second : dataColors.first);
  }

  h.addEventListener('click', onClick);

})(this);
