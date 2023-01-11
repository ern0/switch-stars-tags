ext = require("../script/switch-star-tags.js");
setTimeout(run_tests, 1);

function run_tests()
{
    for (let index in globalThis) {
        let fn = globalThis[index];
        t = ({}).toString.call(fn).toString();
        if (t != "[object Function]") continue;
        if (fn.name.substring(0, 5) != "test_") continue;

        case_name = fn.name;
        fn.call();
    }
}

function assert(cond)
{
    let prefix = (cond ? "       [X]" : "FAIL - [ ]");
    console.log("", prefix, case_name);
}

///////////////////////////////////////////////////////////////////////////////

test_name_dekudeals = () =>
{
    let url = "https://www.dekudeals.com/items/the-last-campfire";
    let site = ext.detect_site(url);
    
    assert(site == "dd");
    let name = ext.parse_game_name(site, url);
    
    assert(name == "the_last_campfire");
}

test_name_nintendo_uk = () =>
{
    let url = "https://www.nintendo.co.uk/Games/Nintendo-Switch-games/The-Legend-of-Zelda-Tears-of-the-Kingdom-1576884.html";

    let site = ext.detect_site(url);
    assert(site == "uk");

    let name = ext.parse_game_name(site, url);
    assert(name == "the_legend_of_zelda_tears_of_the_kingdom");
}

test_name_nintendo_us = () =>
{
    let url = "https://www.nintendo.com/store/products/splatoon-3-switch/";

    let site = ext.detect_site(url);
    assert(site == "us");

    let name = ext.parse_game_name(site, url);
    assert(name == "splatoon_3_switch");
}
