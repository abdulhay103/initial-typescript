// Enum Data => Number Type
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["deleteData"] = 5] = "deleteData";
    RequestType[RequestType["updateData"] = 6] = "updateData";
})(RequestType || (RequestType = {}));
// Enum Data String Type
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Purple";
    RequestType2["deleteData"] = "Red";
    RequestType2["updateData"] = "Black";
})(RequestType2 || (RequestType2 = {}));
// Heterogenus Enum type
var RequestType3;
(function (RequestType3) {
    RequestType3[RequestType3["readData"] = 2] = "readData";
    RequestType3["updateData"] = "Ok";
    RequestType3["deleteData"] = "updated";
})(RequestType3 || (RequestType3 = {}));
// console.log(RequestType);
// console.log(RequestType2.readData);
// console.log(RequestType3);
console.log(RequestType3.readData);
