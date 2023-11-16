// =================================================

// $facet, multiple pipeline aggregation stage

/* 
Processes multiple aggregation pipelines within a single stage on the same set of input documents. Each sub-pipeline has its own field in the output document where its results are stored as an array of documents.

The $facet stage allows you to create multi-faceted aggregations which characterize data across multiple dimensions, or facets, within a single aggregation stage. Multi-faceted aggregations provide multiple filters and categorizations to guide data browsing and analysis. Retailers commonly use faceting to narrow search results by creating filters on product price, manufacturer, size, etc.

Input documents are passed to the $facet stage only once. $facet enables various aggregations on the same set of input documents, without needing to retrieve the input documents multiple times.
*/

// $facet --> allows multiple pipeline aggregation stages

db.test.aggregate([
  {
    $facet: {
      // Pipeline -1
      categoryByFriends: [
        // stage -1
        { $unwind: "$friends" },
        { $group: { _id: "$friends", count: { $sum: 1 } } },
      ],
      // Pipeline -2
      categoryByEducation: [
        // stage -1
        { $unwind: "$education" },
        // stage -2
        { $group: { _id: "$education", count: { $sum: 1 } } },
      ],
      // Pipeline -3
      categoryBySkills: [
        // stage -1
        { $unwind: "$skills" },
        // stage 2
        { $group: { _id: "$skills", count: { $sum: 1 } } },
      ],
    },
  },
]);

// =================================================
