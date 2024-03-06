interface Car {
  type: "Bus";
  groundSpeed: number;
}

interface Plane {
  type: "Aeroplane";
  airSpeed: number;
}

type Vachele = Car | Plane;

let car: Vachele = {
  type: "Bus",
  groundSpeed: 70,
};

let plane: Vachele = {
  type: "Aeroplane",
  airSpeed: 120,
};

let totalSpeed: number = car.groundSpeed + plane.airSpeed;
console.log(totalSpeed);
