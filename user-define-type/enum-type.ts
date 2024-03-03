// Enum Data => Number Type
enum RequestType {
  readData = 1,
  deleteData = 5,
  updateData,
}

// Enum Data String Type
enum RequestType2 {
  readData = "Purple",
  deleteData = "Red",
  updateData = "Black",
}

// Heterogenus Enum type
enum RequestType3 {
  readData = 2,
  updateData = "Ok",
  deleteData = "updated",
}

// console.log(RequestType);
// console.log(RequestType2.readData);
// console.log(RequestType3);
console.log(RequestType3.readData);
