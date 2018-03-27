var office_domains = [
    "office.com",
    "office.live.com",
    "sharepoint.com"
];

var ok_msg = "Perhaps this site does deserve a kicking, however this is not the app to do it.";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var domain = url.replace(/^[^:\/]+[:]\/\//, '').split(/[/?#]/)[0];
        var office = false;
        for (var i = 0; i < office_domains.length; i++) {
            if (domain.endsWith(office_domains[i])) {
                office = true;
                break;
            }
        }
        if (office) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "kick"}, function(response) {});
        } else {
            alert(ok_msg);
        }
    });
});
