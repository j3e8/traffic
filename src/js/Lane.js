var Lane = {};

Lane.createLane = function() {
  return {
    path: null,
    cars: [],
    previousLanes: [],
    nextLanes: []
  };
}
