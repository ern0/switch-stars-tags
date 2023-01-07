ext = require("../script/switch-star-tags.js");
setTimeout(run_tests, 1);

function run_tests()
{
    for (var index in globalThis) {
        var fn = globalThis[index];
        t = ({}).toString.call(fn).toString();
        if (t != "[object Function]") continue;
        if (fn.name.substring(0, 5) != "test_") continue;

        case_name = fn.name;
        fn.call();
    }
}

function assert(cond)
{
    var prefix = (cond ? "       [X]" : "FAIL - [ ]");
    console.log("", prefix, case_name);
}

///////////////////////////////////////////////////////////////////////////////

test_name_dekudeals = () =>
{
    var url = "https://www.dekudeals.com/items/the-last-campfire";
    var site = ext.detect_site(url);
    
    assert(site == "dd");
    var name = ext.parse_game_name(site, url);
    
    assert(name == "the_last_campfire");
}

test_name_nintendo_uk = () =>
{
    var url = "https://www.nintendo.co.uk/Games/Nintendo-Switch-games/The-Legend-of-Zelda-Tears-of-the-Kingdom-1576884.html";

    var site = ext.detect_site(url);
    assert(site == "uk");

    var name = ext.parse_game_name(site, url);
    assert(name == "the_legend_of_zelda_tears_of_the_kingdom");
}

test_name_nintendo_us = () =>
{
    var url = "https://www.nintendo.com/store/products/splatoon-3-switch/";

    var site = ext.detect_site(url);
    assert(site == "us");

    var name = ext.parse_game_name(site, url);
    assert(name == "splatoon_3_switch");
}
