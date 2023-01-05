function init_extension() {
	document.body.style.border = "12px solid blue";
}

function parse_game_id(url) {

	return "lofasz";
}

if (typeof(document) == "object") {
	init_extension();
} else {
	module.exports = { parse_game_id };
}