// =============================================================

// Explore $group with $unwind aggregation stage

/* 

$unwind --> Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
*/

// $unwind: "$friends"
db.test.aggregate([
  {
    $unwind: "$friends",
  },
  {
    $group: { _id: "$friends", cound: { $sum: 1 } },
  },
]);

// This will make a document with every element in the array.

// Finding peoples common interests by age:
db.test.aggregate([
  // Stage-1:
  {
    $unwind: "$interests",
  },
  {
    $group: { _id: "$age", interestByAge: { $push: "$interests" } },
  },
]);

// Finding peoples common interests by gender:
// Finding peoples common interests by age:
db.test.aggregate([
  // Stage-1:
  {
    $unwind: "$interests",
  },
  {
    $group: { _id: "$gender", interestByGender: { $push: "$interests" } },
  },
]);

// =============================================================
