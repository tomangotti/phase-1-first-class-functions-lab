// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);

}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (fare){
        return fare * multiplyValue;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);