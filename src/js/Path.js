var Path = {};

Path.createPath = function() {
  return {
    points: []
  };
}

Path.addPointToPath = function(path, pt) {
  path.points.push(pt);
  return path;
}
