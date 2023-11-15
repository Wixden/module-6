// =============================================================

// explore more about $group & $project

// $group --> it will create a group/doc with the specified field: example: {"gender" : "Male"}
/* 
In this session we will learn more about the aggregation operators that work with $group.

** $count
** $max
** $min
** $avg
** $sum
** $push

Note: using 'null' as _id in group will add document in the collection under on id.
it can help use do some calculations like below
*/

db.test.aggregate([
  { $group: { _id: null, totalSalary: { $sum: "$salary" } } },
]);
// Results:
[
  {
    _id: null,
    totalSalary: 30400,
  },
];

// $max --> return the maximum value;
db.test.aggregate([
  {
    $group: {
      _id: null,
      maxSalary: { $max: "$salary" },
    },
  },
]);
// Results:
[
  {
    _id: null,
    maxSalary: 499,
  },
];

// $min --> return the minimum value;
db.test.aggregate([
  {
    $group: {
      _id: null,
      maxSalary: { $min: "$salary" },
    },
  },
]);
// Results:
[
  {
    _id: null,
    minSalary: 105,
  },
];

// $avg --> return the average value;
db.test.aggregate([
  {
    $group: {
      _id: null,
      maxSalary: { $avg: "$salary" },
    },
  },
]);
// Results:
[
  {
    _id: null,
    avgSalary: 307.07070707070704,
  },
];

// $push --> $push is a aggregation pipeline operator: $push returns an array of all values that result from applying an expression to documents. "Using the $push it will create a new array and return the value from pipeline aggregation with the specified field"

// $push Examples:
db.test.aggregate([
  {
    $group: {
      _id: "$address.country",
      sameCountryByEmail: { $push: "$email" },
    },
  },
]);
db.test.aggregate([
  {
    $group: {
      _id: "$address.country",
      sameCountryByGender: { $push: "$gender" },
    },
  },
]);
db.test.aggregate([
  {
    $group: {
      _id: "$address.country",
      sameCountryByCompany: { $push: "$company" },
    },
  },
]);

// =============================================================
