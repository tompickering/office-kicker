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

var show_message = function(msg) {
    return function() {
        setTimeout("alert('" + msg + "');", 100);
        document.querySelector('body').style['transform'] = 'rotate(0deg)';
    };
};

var kick = function() {
    var reaction = reactions[Math.floor(Math.random() * reactions.length)];
    var deg = 20 - 45 * Math.random();
    document.getElementsByTagName('body')[0].style['transform'] = 'rotate(' + deg + 'deg)';
    var ow_msg = "Office says: \"" + reaction + "!\"";
    setTimeout(show_message(ow_msg), 100);
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "kick") {
            kick();
        }
    });
