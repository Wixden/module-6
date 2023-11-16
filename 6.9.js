// ==================================================

// What is indexing, COLSCAN vs IXSCAN

/* COLLSCAN: the query is scanning the collection in disk. Pretty bad, as no index covered the search, so MongoDB has to read the whole collection. IXSCAN: the query is using an index to filter. It doesn´t mean that all the query is covered by the index, but at least some part. */

// create index
db.massive_data.createIndex({ email: 1 });

// drop / delete index
db.massive_data.dropIndex({ email: 1 });
// ==================================================
