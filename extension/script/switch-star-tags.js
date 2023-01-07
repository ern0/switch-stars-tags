tags = {
	"the_bullet_time_of_revenge": "asset_flip"
}

function init_extension()
{
	site = detect_site(window.location.href);

	if (site == "us") {
		last_url = "";
		watch_page();

	} else {
		init_page();

	}
}

function watch_page()
{
	if (last_url != window.location.href) {
		last_url = window.location.href;
		init_page();
	}

	setTimeout(watch_page, 400);
}

function init_page()
{
	page = detect_page(site);

	if (page == "item") {
		if (site == "dd") decorate_item_dd();
		if (site == "uk") decorate_item_uk();
		if (site == "us") decorate_item_us();
	}

	if (site == "dd") decorate_list_dd();
	if (site == "uk") decorate_list_uk();
	if (site == "us") decorate_liat_us();

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

function decorate_item_dd()
{
	var elm = document.getElementsByTagName("h2")[0];
	if (typeof(elm) == "undefined") return;
	text = elm.innerHTML;

	var game = parse_game_name(site, window.location.href);
	text = text.replaceAll("</span>", "</span><div>" + render_decoration(game) + "</div>");

	elm.innerHTML = text;
}

function decorate_item_uk()
{

}

function decorate_item_us()
{

}

function decorate_list_dd()
{
	elms = document.getElementsByClassName("name");
	for (var index = 0; index < elms.length; index++) {

		var elm = elms[index].parentElement.parentElement;
		text = elm.innerHTML;

		var game = parse_game_name(site, elms[index].parentElement.href);

		text = text.replaceAll("<div","<span");
		text = text.replaceAll("</div>","</span>");
		text = text.replaceAll("</a>", "</a><div>" + render_decoration(game) + "</div>");
		
		elm.innerHTML = text;
	}

}

function decorate_list_uk()
{

}

function decorate_list_us()
{

}

function render_newline()
{
	return "<br />";
}

function render_space() 
{
	return "&nbsp;";
}

function render_decoration(game) 
{
	r = "";

	if (game in tags) {
		var tag_list = tags[game].split(" ");
		for (var tag_index in tag_list) {
			var tag = tag_list[tag_index];
			if (tag == "") continue;
			r += render_tag(tag);
		}
	}

	r += render_link("#", "review");

	return r;
}

function render_tag(tag)
{
	style = "";
	style
	if (tag == "asset_flip") {
		style = "background: #ff0000; color: #ffff55;";
	} else {
		style = "background: #eeeeee; color: #000000;";
	}

	r = "<span class='badge' style='" + style + " ";
	r += "border: 1px solid gray;";
	r += "'>#" + tag + "</span>";

	return r + render_space();
}

function render_link(url, title)
{
	r = "<a href='#URL#'>#TITLE#</a>"

	r = r.replaceAll("#URL#", url);
	r = r.replaceAll("#TITLE#", title);
	return r;
}

if (typeof (document) == "object") {
	init_extension();
} else {
	module.exports = { parse_game_name, detect_site };
}
