
{
    "select_values":
    [
        {
            "name":"request.yyyymmdd",
            "as":"date"
        },
        {
            "name":"count(distinct request.id)",
            "as":"pageViews"
        },
        {
            "name":"count(distinct request.session_id)",
            "as":"visits"
        },
        {
            "name":"count(distinct request.document_id)",
            "as":"uniquePageViews"
        }
    ],
    "groupby":
    [
        "request.yyyymmdd"
    ],
    "query_type":"select",
    "from":
    {
        "owa_request":
        {
            "name":"owa_request",
            "as":"request"
        }
    },
    "where":
    {
        "request.yyyymmdd":
        {
            "name":"request.yyyymmdd",
            "value":
            {
                "start":"20120416",
                "end":"20120423"
            },
            "operator":"BETWEEN"
        },
        "request.site_id":
        {
            "name":"request.site_id",
            "value":"6030119dcc3a9cd96be0bb7ebfa2b8ab",
            "operator":"="
        }
    },
    "orderby":
    [
        [
            "date",
            "ASC"
        ]
    ],
    "offset":0
}




[20-Apr-2012 15:13:22] DB Q: {
  "from": {
    "owa_request": {
      "name": "owa_request",
      "as": "request"
    }
  },
  "joins": {
    "document_via_document_id": {
      "foreign_key": "request.document_id",
      "primary_key": "document_via_document_id.id",
      "table": "owa_document",
      "type": "JOIN",
      "as": "document_via_document_id"
    }
  },
  "select_values": [
    {
      "name": "count(distinct request.id)",
      "as": "pageViews"
    },
    {
      "name": "count(distinct request.session_id)",
      "as": "visits"
    },
    {
      "name": "count(distinct request.document_id)",
      "as": "uniquePageViews"
    }
  ],
  "query_type": "select",
  "limit": 1,
  "where": {
    "request.yyyymmdd": {
      "name": "request.yyyymmdd",
      "operator": "BETWEEN",
      "value": {
        "end": "20120420",
        "start": "20120413"
      }
    },
    "request.site_id": {
      "name": "request.site_id",
      "operator": "=",
      "value": "6030119dcc3a9cd96be0bb7ebfa2b8ab"
    }
  }
}




[20-Apr-2012 15:13:22] DB R: null
[20-Apr-2012 15:13:22] DB Q: {"where":{"request.yyyymmdd":{"name":"request.yyyymmdd","value":{"start":"20120413","end":"20120420"},"operator":"BETWEEN"},"request.site_id":{"name":"request.site_id","value":"6030119dcc3a9cd96be0bb7ebfa2b8ab","operator":"="}},"select_values":[{"name":"count(distinct request.id)","as":"pageViews"},{"name":"count(distinct request.session_id)","as":"visits"},{"name":"count(distinct request.document_id)","as":"uniquePageViews"}],"query_type":"select","from":{"owa_request":{"name":"owa_request","as":"request"}},"limit":1}
[20-Apr-2012 15:13:22] DB R: null
[20-Apr-2012 15:13:22] DB Q: {"joins":{"document_via_document_id":{"type":"JOIN","table":"owa_document","as":"document_via_document_id","foreign_key":"request.document_id","primary_key":"document_via_document_id.id"}},"select_values":[{"name":"document_via_document_id.uri","as":"pagePath"},{"name":"document_via_document_id.page_title","as":"pageTitle"},{"name":"document_via_document_id.page_type","as":"pageType"},{"name":"document_via_document_id.url","as":"pageUrl"},{"name":"count(distinct request.id)","as":"pageViews"},{"name":"count(distinct request.session_id)","as":"visits"},{"name":"count(distinct request.document_id)","as":"uniquePageViews"}],"groupby":["document_via_document_id.uri","document_via_document_id.page_title","document_via_document_id.page_type","document_via_document_id.url"],"query_type":"select","from":{"owa_request":{"name":"owa_request","as":"request"}},"where":{"request.yyyymmdd":{"name":"request.yyyymmdd","value":{"start":"20120413","end":"20120420"},"operator":"BETWEEN"},"request.site_id":{"name":"request.site_id","value":"6030119dcc3a9cd96be0bb7ebfa2b8ab","operator":"="}},"orderby":[["pageViews","DESC"]],"limit":300,"offset":0}
[20-Apr-2012 15:13:22] DB R: null
[20-Apr-2012 15:13:22] DB R: null
[20-Apr-2012 15:13:22] DB Q: {"select_values":[{"name":"request.yyyymmdd","as":"date"},{"name":"count(distinct request.id)","as":"pageViews"},{"name":"count(distinct request.session_id)","as":"visits"},{"name":"count(distinct request.document_id)","as":"uniquePageViews"}],"groupby":["request.yyyymmdd"],"query_type":"select","from":{"owa_request":{"name":"owa_request","as":"request"}},"where":{"request.yyyymmdd":{"name":"request.yyyymmdd","value":{"start":"20120413","end":"20120420"},"operator":"BETWEEN"},"request.site_id":{"name":"request.site_id","value":"6030119dcc3a9cd96be0bb7ebfa2b8ab","operator":"="}},"orderby":[["date","ASC"]],"offset":0}
[20-Apr-2012 15:13:22] DB R: null






=========

// in the last week, top
[20-Apr-2012 20:06:31] document_via_document_id: {
  "joins":{"document_via_document_id":{
    "type":"JOIN","table":"owa_document","as":"document_via_document_id","foreign_key":
    "request.document_id","primary_key":"document_via_document_id.id"}},

"where":{
  "request.yyyymmdd":{"name":"request.yyyymmdd","value":{"start":"20120413","end":"20120420"},"operator":"BETWEEN"},
"request.site_id":{"name":"request.site_id","value":"6030119dcc3a9cd96be0bb7ebfa2b8ab","operator":"="}},


"select_values":[{"name":"count(distinct request.id)","as":"pageViews"}],
"query_type":"select",
"from":{"owa_request":{"name":"owa_request","as":"request"}},
"limit":1}



[20-Apr-2012 20:11:54] document_via_document_id: {
  "joins":{"document_via_document_id":{"type":"JOIN","table":"owa_document","as":"document_via_document_id","foreign_key":"request.document_id","primary_key":"document_via_document_id.id"}},

"select_values":[{"name":"document_via_document_id.page_title","as":"pageTitle"},{"name":"document_via_document_id.url","as":"pageUrl"},{"name":"count(distinct request.id)","as":"pageViews"}],

"groupby":["document_via_document_id.page_title","document_via_document_id.url"],"query_type":"select","from":{"owa_request":{"name":"owa_request","as":"request"}},

"where":{"request.yyyymmdd":{"name":"request.yyyymmdd","value":{"start":"20120413","end":"20120420"},"operator":"BETWEEN"},"request.site_id":{"name":"request.site_id","value":"6030119dcc3a9cd96be0bb7ebfa2b8ab","operator":"="}},

"orderby":[["pageViews","DESC"]],

"limit":100,"offset":0}





