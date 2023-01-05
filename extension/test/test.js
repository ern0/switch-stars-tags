ext = require("../script/switch-star-tags.js");

function run_tests() {

	for (var index in globalThis) {
			var fn = globalThis[index];
			t = ({}).toString.call(fn).toString();
			if (t != "[object Function]") continue;
			if (fn.name.substring(0, 5) != "test_") continue;

			fn.call();

	}
}

function assert() {
	console.log("ass");
}


test_nope = () =>
{
    assert();
    var name = ext.parse_game_id("dfdf");
    console.log(name);
}

run_tests();