var asincronico = function() {
  console.log('uno');
  setTimeout(
    function() {
      console.log('luego')
    }, 5000
  );
  console.log('dos');
}

asincronico();
