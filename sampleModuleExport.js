
const Airplane = require('./airplane.js');
//import Airplane from './airplane';

function displayFuelCapacity(element) {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });

}

displayFuelCapacity(Airplane.availablePlanes);
