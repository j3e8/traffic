var Car = {};

Car.CarTypes = {
  'CAR': 0,
  'TRUCK': 1,
  'TRACTOR_TRAILER': 2
};

Car.createCar = function() {
  return {
    type: Car.CarTypes.CAR,
    lane: null
  };
}
