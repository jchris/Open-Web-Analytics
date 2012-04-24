
{
    "guid":"640a52d18c34f90ea4a136b40f1abdfc",
    "timePeriod":
    {
        "period":"date_range",
        "startDate":"20120416",
        "endDate":"20120423",
        "startTime":1334559600,
        "endTime":1335250799,
        "label":"04\/16\/2012 - 04\/23\/2012"
    },
    "resultsPerPage":25,
    "resultsTotal":1,
    "resultsReturned":1,
    "resultsRows":
    [
        {
            "date":
            {
                "result_type":"dimension",
                "name":"date",
                "value":"20120420",
                "formatted_value":"20120420",
                "label":"Date",
                "data_type":"yyyymmdd"
            },
            "pageViews":
            {
                "result_type":"metric",
                "name":"pageViews",
                "value":"1",
                "formatted_value":"1",
                "label":"Page Views",
                "data_type":"integer"
            },
            "visits":
            {
                "result_type":"metric",
                "name":"visits",
                "value":"1",
                "formatted_value":"1",
                "label":"Visits",
                "data_type":"integer"
            },
            "uniquePageViews":
            {
                "result_type":"metric",
                "name":"uniquePageViews",
                "value":"1",
                "formatted_value":"1",
                "label":"Unique Page Views",
                "data_type":"integer"
            }
        }
    ],
    "sortColumn":"date",
    "sortOrder":"asc",
    "aggregates":
    {
        "pageViews":
        {
            "result_type":"metric",
            "name":"pageViews",
            "value":"1",
            "formatted_value":"1",
            "label":"Page Views",
            "data_type":"integer"
        },
        "visits":
        {
            "result_type":"metric",
            "name":"visits",
            "value":"1",
            "formatted_value":"1",
            "label":"Visits",
            "data_type":"integer"
        },
        "uniquePageViews":
        {
            "result_type":"metric",
            "name":"uniquePageViews",
            "value":"1",
            "formatted_value":"1",
            "label":"Unique Page Views",
            "data_type":"integer"
        }
    },
    "rows":
    [
        {
            "date":"20120420",
            "pageViews":"1",
            "visits":"1",
            "uniquePageViews":"1"
        }
    ],
    "labels":
    {
        "pageViews":"Page Views",
        "visits":"Visits",
        "uniquePageViews":"Unique Page Views",
        "date":"Date"
    },
    "more":null,
    "page":1,
    "total_pages":null,
    "self":"http:\/\/localhost:8888\/Open-Web-Analytics\/api.php?owa_startDate=20120416&owa_endDate=20120423&owa_metrics=pageViews%2Cvisits%2CuniquePageViews&owa_dimensions=date&owa_siteId=6030119dcc3a9cd96be0bb7ebfa2b8ab&owa_sort=date&owa_do=getResultSet&owa_format=json",
    "next":null,
    "previous":null,
    "base_url":null,
    "relatedDimensions":
    {
        "time":
        [
            {
                "name":"date",
                "label":"Date"
            },
            {
                "name":"day",
                "label":"Day"
            },
            {
                "name":"month",
                "label":"Month"
            },
            {
                "name":"year",
                "label":"Year"
            },
            {
                "name":"dayofweek",
                "label":"Day of Week"
            },
            {
                "name":"dayofyear",
                "label":"Day of Year"
            },
            {
                "name":"weekofyear",
                "label":"Week of Year"
            }
        ],
        "site":
        [
            {
                "name":"siteId",
                "label":"Site ID"
            },
            {
                "name":"siteDomain",
                "label":"Site Domain"
            },
            {
                "name":"siteName",
                "label":"Site Name"
            }
        ],
        "visitor":
        [
            {
                "name":"isRepeatVisitor",
                "label":"Repeat Visitor"
            },
            {
                "name":"isNewVisitor",
                "label":"New Visitor"
            },
            {
                "name":"visitorId",
                "label":"Visitor ID"
            },
            {
                "name":"userEmail",
                "label":"Email Address"
            }
        ],
        "visit":
        [
            {
                "name":"daysSinceLastVisit",
                "label":"Days Since Last Visit"
            },
            {
                "name":"daysSinceFirstVisit",
                "label":"Days Since First Visit"
            },
            {
                "name":"priorVisitCount",
                "label":"Prior Visits"
            }
        ],
        "system":
        [
            {
                "name":"language",
                "label":"Language"
            },
            {
                "name":"browserVersion",
                "label":"Browser Version"
            },
            {
                "name":"browserType",
                "label":"Browser Type"
            },
            {
                "name":"osType",
                "label":"Operating System"
            }
        ],
        "campaign":
        [
            {
                "name":"medium",
                "label":"Medium"
            },
            {
                "name":"source",
                "label":"Source"
            },
            {
                "name":"campaign",
                "label":"Campaign"
            },
            {
                "name":"ad",
                "label":"Ad"
            },
            {
                "name":"adType",
                "label":"Ad Type"
            },
            {
                "name":"referralPageUrl",
                "label":"Referral Page URL"
            },
            {
                "name":"referralPageTitle",
                "label":"Referral Page Title"
            },
            {
                "name":"referralSearchTerms",
                "label":"Search Terms"
            },
            {
                "name":"referralLinkText",
                "label":"Referral Link Text"
            },
            {
                "name":"isSearchEngine",
                "label":"Search Engine"
            },
            {
                "name":"referralWebSite",
                "label":"Referral Web Site"
            }
        ],
        "custom variables":
        [
            {
                "name":"customVarName1",
                "label":"Custom Var 1 Name"
            },
            {
                "name":"customVarValue1",
                "label":"Custom Var 1 Value"
            },
            {
                "name":"customVarName2",
                "label":"Custom Var 2 Name"
            },
            {
                "name":"customVarValue2",
                "label":"Custom Var 2 Value"
            },
            {
                "name":"customVarName3",
                "label":"Custom Var 3 Name"
            },
            {
                "name":"customVarValue3",
                "label":"Custom Var 3 Value"
            },
            {
                "name":"customVarName4",
                "label":"Custom Var 4 Name"
            },
            {
                "name":"customVarValue4",
                "label":"Custom Var 4 Value"
            },
            {
                "name":"customVarName5",
                "label":"Custom Var 5 Name"
            },
            {
                "name":"customVarValue5",
                "label":"Custom Var 5 Value"
            }
        ],
        "visit-special":
        [
            {
                "name":"sessionId",
                "label":"Session ID"
            }
        ],
        "geo":
        [
            {
                "name":"city",
                "label":"City"
            },
            {
                "name":"country",
                "label":"Country"
            },
            {
                "name":"latitude",
                "label":"Latitude"
            },
            {
                "name":"longitude",
                "label":"Longitude"
            },
            {
                "name":"countryCode",
                "label":"Country Code"
            },
            {
                "name":"stateRegion",
                "label":"State\/Region"
            }
        ],
        "network":
        [
            {
                "name":"ipAddress",
                "label":"IP Address"
            },
            {
                "name":"hostName",
                "label":"Host Name"
            }
        ],
        "content":
        [
            {
                "name":"priorPageUrl",
                "label":"Prior Page URL"
            },
            {
                "name":"priorPagePath",
                "label":"Prior Page Path"
            },
            {
                "name":"priorPageTitle",
                "label":"Prior Page Title"
            },
            {
                "name":"priorPageType",
                "label":"Prior Page Type"
            },
            {
                "name":"pageUrl",
                "label":"Page URL"
            },
            {
                "name":"pagePath",
                "label":"Page Path"
            },
            {
                "name":"pageTitle",
                "label":"Page Title"
            },
            {
                "name":"pageType",
                "label":"Page Type"
            }
        ]
    },
    "relatedMetrics":
    {
        "Site Usage":
        [
            {
                "name":"pageViews",
                "label":"Page Views",
                "description":"The total number of pages viewed.",
                "group":"Site Usage"
            },
            {
                "name":"visits",
                "label":"Visits",
                "description":"The total number of visits\/sessions.",
                "group":"Site Usage"
            },
            {
                "name":"visitors",
                "label":"Visitors",
                "description":"The total number of visitors",
                "group":"Site Usage"
            },
            {
                "name":"uniquePageViews",
                "label":"Unique Page Views",
                "description":"The total number of unique pages viewed.",
                "group":"Site Usage"
            },
            {
                "name":"pagesPerVisit",
                "label":"Pages Per Visit",
                "description":"The average pages viewed per visit.",
                "group":"Site Usage"
            }
        ]
    },
    "results_count":1,
    "offset":0,
    "limit":null,
    "query_limit":null,
    "module":"base",
    "errors":
    [
    ]
}