function findStartingPoint(petrolPumps) {
  let startPoint = 0;
  let extraFuel = 0;
  let requiredFuel = 0;
  const n = petrolPumps.length;

  for (let i = 0; i < n; i++) {
    extraFuel += petrolPumps[i].petrol - petrolPumps[i].distance;

    if (extraFuel < 0) {
      startPoint = i + 1;
      requiredFuel += extraFuel;
      extraFuel = 0;
    }
  }

  if (requiredFuel + extraFuel >= 0) {
    return startPoint;
  } else {
    return -1;
  }
}

const petrolPumps = [
  { petrol: 4, distance: 6 },
  { petrol: 6, distance: 5 },
  { petrol: 7, distance: 3 },
  { petrol: 4, distance: 5 },
];

console.log(findStartingPoint(petrolPumps));
