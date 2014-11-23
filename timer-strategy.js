module.exports = function (rocket) {
  console.log('Using timer based strategy');

  rocket.on('launch', function() {
    console.log('Deploying parachute in 5s');
    setTimeout(function(){
      console.log('Deploy parachute now!');
      rocket.deployParachute();
    }, 5000);
  });
};