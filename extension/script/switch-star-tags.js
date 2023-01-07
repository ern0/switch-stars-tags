function init_extension()
{
	site = detect_site(window.location.href);
	if (site == "us") {
		last_url = "";
		watch_page_us();
	} else {
		init_page();
	}
}

function watch_page_us()
{
	if (last_url != window.location.href) {
		last_url = window.location.href;
		init_page();
	}

	setTimeout(watch_page_us, 400);
}

function init_page()
{
	page = detect_page(site);

	console.log("site: ", site, "page:", page);
}

function detect_site(url)
{
	if (url.includes("dekudeals.com/")) return "dd";
	if (url.includes("nintendo.co.uk/")) return "uk";
	if (url.includes("nintendo.com/")) return "us";

	return "n.a.";
}

function parse_game_name(site, url)
{
	if (url.slice(-1) == "/") url = url.slice(0, -1);
	var lastSlashPos = url.lastIndexOf("/") + 1;
	var name = "n.a.";

	if (site == "dd") name = url.slice(lastSlashPos);
	if (site == "uk") name = url.slice(lastSlashPos, url.lastIndexOf("-"));
	if (site == "us") name = url.slice(lastSlashPos);

	return name.toLowerCase().replaceAll("-", "_");
}

function detect_page(site)
{
	if (site == "dd") return detect_page_dd();
	if (site == "uk") return detect_page_uk();
	if (site == "us") return detect_page_us();

	return "n.a.";
}

function detect_page_dd() 
{
	var second = window.location.href.split("/")[3];
	return (second == "items" ? "item" : "list");
}


function detect_page_uk()
{
	var second = window.location.href.split("/")[3].toLocaleLowerCase();
	return (second == "games" ? "item" : "list");
}

function detect_page_us()
{
	var second = window.location.href.split("/")[4].toLocaleLowerCase();
	return (second == "products" ? "item" : "list");
}


if (typeof (document) == "object") {
	init_extension();
} else {
	module.exports = { parse_game_name, detect_site };
}
