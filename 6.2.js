// =============================================================

// $addFields , $out , $merge aggregation stage

// $addFields --> add new field to pipeline doesn't affect the main document: Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly added fields.

// The $addFields stage is equivalent to a $project stage that explicitly specifies all existing fields in the input documents and adds the new fields.

// $addFields Example:
db.test.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $addFields: { isAdult: true } },
]);
// This will add a new field to all the doc with age over or equal to 18

// $out --> creates a new collection with the aggregation result: Takes the documents returned by the aggregation pipeline and writes them to a specified collection. Starting in MongoDB 4.4, you can specify the output database.

// This is an unusual type of stage because it allows you to carry the results of your aggregation over into a new collection, or into an existing one after dropping it, or even adding them to the existing documents (new in 4.1.2 version).

// $out Example:
db.test.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $addFields: { isAdult: true } },
  { $out: "adultUser" },
]);

// $merge --> it will merge the aggregation result to the specified collection: Writes the results of the aggregation pipeline to a specified collection. The $merge operator must be the last stage in the pipeline.

// ** Creates a new collection if the output collection does not already exist.

// =============================================================
