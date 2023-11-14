// =============================================================

// $match $project aggregation stage:

/* 
// Aggregation Operations
Aggregation operations process multiple documents and return computed results. You can use aggregation operations to:

  1. Group values from multiple documents together.
  2. Perform operations on the grouped data to return a single result.
  3. Analyze data changes over time.

// To perform aggregation operations, you can use:
Aggregation pipelines, which are the preferred method for performing aggregations.
Single purpose aggregation methods, which are simple but lack the capabilities of an aggregation pipeline.


// Aggregation Pipelines:
An aggregation pipeline consists of one or more stages that process documents:

  1. Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

  2. The documents that are output from a stage are passed to the next stage.

  3. An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.
*/

// Aggregation Pipeline Example
// The following aggregation pipeline example contains two stages and returns the total order quantity of medium size pizzas grouped by pizza name:

db.orders.aggregate([
  // Stage 1: Filter pizza order documents by pizza size
  {
    $match: { size: "medium" },
  },

  // Stage 2: Group remaining documents by pizza name and calculate total quantity
  {
    $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
  },
]);

// $match:
// $match aggregation stage:
db.test.aggregate([
  // Stage-1:
  { $match: { gender: "Male", age: { $lte: 30 } } },
]);

// $project aggregation stage:
db.test.aggregate([
  // Stage-1:
  { $match: { gender: "Male", age: { $lte: 30 } } },
  { $project: { email: 1, age: 1, gender: 1, phone: 1 } },
]);
// =============================================================
