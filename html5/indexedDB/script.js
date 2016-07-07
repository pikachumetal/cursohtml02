//https://plnkr.co/edit/LkEm6zmHAybKewJsBYba?p=info
(function(global) {
  var h = document.querySelector('h1');
  var table = 'table2';

  var req = indexedDB.open('mydb', 4);
  var db;

  req.onsuccess = function(e) {
    console.log('create');
    db = e.target.result;


    var trans = db.transaction([table],'readwrite');
    var store = trans.objectStore(table);

    // Async opts
    //var req = store.add({a:1}, 1);
    var req = store.put({a:3}, 1);
    //var req = store.delete(1);
  }

  req.onupgradeneeded = function(e) {
    console.log('upgrade');

    db = e.target.result;

    if(!db.objectStoreNames.contains(table)) {
      db.createObjectStore(table);
    }
  }

})(this);
