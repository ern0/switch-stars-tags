function init_extension() {
	document.body.style.border = "12px solid blue";
}

function detect_site(url) {

	if (url.includes("dekudeals.com/")) return "dd";
	if (url.includes("nintendo.co.uk/")) return "uk";
	if (url.includes("nintendo.com/")) return "us";

	return "n.a.";
}

function parse_game_name(site, url) {

	if (url.slice(-1) == "/") url = url.slice(0, -1);
	var lastSlashPos = url.lastIndexOf("/") + 1;
	var name = "n.a.";

	if (site == "dd") name = url.slice(lastSlashPos);
	if (site == "uk") name = url.slice(lastSlashPos, url.lastIndexOf("-"));
	if (site == "us") name = url.slice(lastSlashPos);

	return name.toLowerCase().replaceAll("-", "_");
}

if (typeof(document) == "object") {
	init_extension();
} else {
	module.exports = { parse_game_name, detect_site };
}