module.exports = updateCoordinate = cc => {
  Object.defineProperty(cc, 'coordinates', {
    value: [
      [-0.5, 0, -0.5],
      [0.5, 0, -0.5],
      [0.5, 0, 0.5],
      [-0.5, 0, 0.5]
    ]
  });
};
