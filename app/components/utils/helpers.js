var axios = require("axios");

//api Key
var nytKey = "98bcde8222594f77a098c1e0a70f7a54";

//helper functions
var helper = {

    searchArticles: function(topic, startYear, endYear){
        var query = "httpsw://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
        query += "api-key=" + nytKey;
        query += "&q=" + topic;
        query += "&begin_date=" + startYear + "0101";
        query += "&end_date=" + endYear + "1231";

        return axios.get(query).then(function (response) {

            if(response.data.response.docs[0]){
                return response.data.response;
            }

            //if no results are found
            return "";
        });
    },

    getSavedArticles: function () {
        return axios.get("/api");
    },

    postArticle: function (url, title) {
        return axios.post("/api", {
            url: url,
            title: title
        })
    }
};

module.exports = helper;