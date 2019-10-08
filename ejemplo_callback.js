var cb = function () {
  console.log('callback!');
};

// espera 500ms, luego ejecuta cb
setTimeout(cb, 500);
