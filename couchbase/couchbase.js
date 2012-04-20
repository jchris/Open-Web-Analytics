module.exports = {
  _id : '_design/owa',
  views : {
    table_and_id : {
      map : function(doc) {
        if (doc.id && doc.table) {
          emit([doc.table, doc.id])
        }
      }
    },
    query_type : {
      map : function (doc) {
        if (doc.query_type) {
          emit(doc.query_type, null);
        }
      }
    },
    urls : {
      map : function (doc) {
        if (doc.target_url || doc.page_url)
        emit(doc.target_url || doc.page_url, null);
      }
    }
  }
}
