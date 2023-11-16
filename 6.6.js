// =================================================

// $bucket, $sort, and $limit aggregation stage

// $bucket --> categorizes incoming documents into groups
/* 

Categorizes incoming documents into groups, called buckets, based on a specified expression and bucket boundaries and outputs a document per each bucket. Each output document contains an _id field whose value specifies the inclusive lower bound of the bucket. The 
output
 option specifies the fields included in each output document.

$bucket
 only produces output documents for buckets that contain at least one input document.

*/

// $bucket example
db.test.aggregate([
  // Stage 1
  {
    $bucket: {
      // what do i want to group by
      groupBy: "$age",
      boundaries: [20, 40, 60, 80],
      default: "overEighty",
      output: {
        // how many people in the group
        count: { $sum: 1 },
        // all emails of people in the group
        emails: { $push: "$email" },
      },
    },
  },
  // Stage -2
  {
    $sort: { count: -1 },
  },
]);

// =================================================
