let userId: string | number | boolean;

userId = 101;
console.log(userId);

const userDisplay = (userId: number | string) => {
  console.log("userDisplay ->", userId);
};

userDisplay(15);
