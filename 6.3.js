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

// =============================================================
