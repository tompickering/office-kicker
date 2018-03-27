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

var kick = function() {
    var reaction = reactions[Math.floor(Math.random() * reactions.length)];
    var deg = 20 - 45 * Math.random();
    document.getElementsByTagName('body')[0].style['transform'] = 'rotate(' + deg + 'deg)';
    var ow_msg = "Office says: \"" + reaction + "!\"";
    setTimeout("alert('" + ow_msg + "');", 0.1);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "kick") {
            kick();
        }
    });
