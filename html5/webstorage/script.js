//https://plnkr.co/edit/RLIzHoPzb1RqxZTXvLnk?p=info
(function(global) {
    var h = document.querySelector('h1');

    //Hacen lo mismo
    localStorage.setItem('h1', h.innerText);
    localStorage.h1 = h.innerText;
    localStorage['h1'] = h.innerText;

    localStorage.h2 = JSON.stringify({a:1, b:2});
    console.log(JSON.parse(localStorage.h2).a);
    //sessionStorage.setItem('h1', h.innerText);

})(this);
