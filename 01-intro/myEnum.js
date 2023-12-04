var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "aisle";
    seatChoice[seatChoice["MIDDLE"] = 0] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 1] = "WINDOW";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.AISLE;
console.log(seatChoice.MIDDLE);
var seat1 = "aisle" /* seatChoice1.AISLE */;
console.log(0 /* seatChoice1.MIDDLE */);
