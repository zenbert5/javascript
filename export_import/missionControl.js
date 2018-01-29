// import statement
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './namedExport';

function displayFuelCapacity(element) {
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

// passing object attributes to test speed range requirement
function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}


displayFuelCapacity(availableAirplanes);
displayStaffStatus();
displaySpeedRangeStatus();