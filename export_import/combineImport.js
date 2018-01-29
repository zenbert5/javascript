// variant 3 - combining default and named exports

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplaneCombo';
import meetsSpeedRangeRequirements from './airplaneCombo';

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

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displayFuelCapacity(availableAirplanes);
displayStaffStatus();
displaySpeedRangeStatus();
