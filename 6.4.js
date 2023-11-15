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
      minSalary: { $min: "$salary" },
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
      avgSalary: { $avg: "$salary" },
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

// $project:
db.test.aggregate([
  // stage - 1: group
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
  // stage - 2: project
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      averageSalary: "$avgSalary",
    },
  },
]);

// $subtract: Subtracts two numbers to return the difference, or two dates to return the difference in milliseconds, or a date and a number in milliseconds to return the resulting date.

db.test.aggregate([
  {
    $group: {
      _id: null,
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
    },
  },
  {
    $project: {
      maxSalary: 1,
      minSalary: 1,
      rngSalary: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);

// =============================================================
