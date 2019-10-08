var unaFuncion = function () {
  var x = 123;
  var y = function () {
    console.log (x);
  };
  y();
};

unaFuncion();
