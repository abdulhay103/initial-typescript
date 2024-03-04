abstract class Numbers {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  abstract multiplication(): void;
}

class NewNumbers extends Numbers {
  p: number;

  constructor(x: number, y: number, z: number, p: number) {
    super(x, y, z);
    this.p = p;
  }
  multiplication(): void {
    console.log(this.x * this.y);
  }
}

let method = new NewNumbers(8, 10, 5, 6);
method.multiplication();
