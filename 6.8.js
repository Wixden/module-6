// ==================================================

/* 
Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing. The 
$lookup
 stage adds a new array field to each input document. The new array field contains the matching documents from the "joined" collection. The 
$lookup
 stage passes these reshaped documents to the next stage.

To combine elements from two different collections, use the $unionWith pipeline stage.
*/

// $lookup stage, embedding vs referencing

db.orders.aggregate([
  {
    $lookup: {
      from: "test",
      localField: "userId",
      foreignField: "_id",
      as: "user",
    },
  },
]);
// ==================================================
