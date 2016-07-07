//https://plnkr.co/edit/09vjopzXLljYWqiQaOsB?p=preview
(function(global) {
    var h = document.querySelector('h1');

    var worker = new Worker('worker.js');
    worker.addEventListener('message', function(e) {
        h.innerText = e.data;
    });
    
    worker.postMessage('Hi!');
})(this);
