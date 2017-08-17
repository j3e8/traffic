var Vertex = {};

Vertex.VertexTypes = {
  'SIMPLE': 1,
  'QUADRATIC': 2,
  'BEZIER': 3
};

Vertex.createVertex = function(pt) {
  return {
    point: pt,
    type: Vertex.VertexTypes.SIMPLE
  };
}

Vertex.createBezierVertex = function(cp1, pt, cp2) {
  return {
    controlPointBefore: cp1,
    point: pt,
    controlPointAfter: cp2,
    type: Vertex.VertexTypes.BEZIER
  };
}
