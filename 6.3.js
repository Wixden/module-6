// =============================================================

// $group , $sum , $push aggregation stage

// $group --> it will create a group/doc with the specified field: example: {"gender" : "Male"}
/* The $group stage separates documents into groups according to a "group key". The output is one document for each unique group key.

A group key is often a field, or group of fields. The group key can also be the result of an expression. Use the _id field in the $group pipeline stage to set the group key. See below for 
usage examples.

In the $group stage output, the _id field is set to the group key for that document.

The output documents can also contain additional fields that are set using 
accumulator expressions. */

// $group Example:
db.test.aggregate([{ $group: { _id: "$gender" } }]);
db.test.aggregate([{ $group: { _id: "$gender" } }]);
db.test.aggregate([{ $group: { _id: "$address.country" } }]);
db.test.aggregate([{ $group: { _id: "$age" } }]);

// $sum --> $sum is a aggregation pipeline operator: Calculates and returns the collective sum of numeric values. $sum ignores non-numeric values.

db.test.aggregate([
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);
// This will return us with count field, telling use how many document matches the same country

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

// $$ROOT will give us the all details in the document
db.test.aggregate([
  {
    $group: {
      _id: "$address.country",
      sameCountryByCompany: { $push: "$$ROOT" },
    },
  },
]);

// here we are getting the field from sameCountryByCompany, because we stored all the doc fields in sameCountryByCompany using $push ($$ROOT)
db.test.aggregate([
  {
    $group: {
      _id: "$address.country",
      sameCountryByCompany: { $push: "$$ROOT" },
    },
  },
  {
    $project: {
      "sameCountryByCompany.email": 1,
      "sameCountryByCompany.phone": 1,
      "sameCountryByCompany.gender": 1,
      "sameCountryByCompany.age": 1,
    },
  },
]);

// =============================================================
