var office_domains = [
    "office.com",
    "office.live.com",
    "sharepoint.com"
];

var reactions = [
    "Ow",
    "Oww",
    "Oof",
    "Argh",
    "Ugh",
    "Ergh",
    "Ouch",
    "Umph"
];

var ok_msg = "Perhaps this site does deserve a kicking, however this is not the app to do it.";

var kick = function() {
    var reaction = reactions[Math.floor(Math.random() * reactions.length)];
    alert("Office says: \"" + reaction + "!\"");
}

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
            kick();
        } else {
            alert(ok_msg);
        }
    });
});
