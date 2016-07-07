(function(global) {
    'use strict';
    var h = document.querySelector('h1');
//https://plnkr.co/edit/PTLI714Ox4dPI1OekYm4?p=preview
    // h.classList.add('red');
    // h.classList.remove('red');
    // h.classList.contains('red');
    // h.classList.toggle('red');
    var onClick = function onClick(e) {
        var list = e.target.classlist;
        if (!list.contains('red')) {
            list.add('red');
            return;
        }
        list.remove('red');
    };

    h.addEventListener('click', onClick);

    /*h.addEventListener("click", function() {
        if (!h.classList.contains('red')) {
            h.classList.add('red');
        } else {
            h.classList.remove('red');
        }
    });*/

})(this);
