chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.indexOf("https://memsql.atlassian.net/browse/") != -1 && details.url.indexOf("oldIssueView") == -1) {
            if (details.url.indexOf("?") != -1) {
                return {redirectUrl: details.url + "&oldIssueView=true"}
            } else {
                return {redirectUrl: details.url + "?oldIssueView=true"}
            }
        }
    },
    {urls: ["https://memsql.atlassian.net/*"]},
    ["blocking"]);
