{
  "_id":"_design/owa",
  "views":{
    "table_and_id":{
      "map":function(doc) {
        if (doc.id && doc.table) {
          emit([doc.table, doc.id])
        }
      }
    },
    "table_and_field":{
      "map":function(doc) {
        var k;
        if (!doc.query_type && doc.table) {
          for (k in doc) {
            if (doc.hasOwnProperty(k) &&
              (['$','_'].indexOf(k[0]) == -1) &&
              ("object" !== typeof(doc[k]))) {
                emit([doc.table, k, doc[k]])
            }
          }
        }
      }
    },
    "where":{
      "map":function (doc) {
        if (doc.where) {
          emit(doc.query_type, doc.where)
        }
      }
    }
  }
}
