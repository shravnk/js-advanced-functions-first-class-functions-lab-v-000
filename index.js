// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return newArray = drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers) {
  return newArray = drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
  return function(fare){return fare*mult}
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selecter) {
  return selecter(drivers)
}
