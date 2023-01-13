tags = {
  "ace_invaders":"asset_flip",
  "ace_strike":"asset_flip",
  "america_wild_hunting":"asset_flip",
  "among_pipes":"asset_flip",
  "animal_pals_bubble_pop":"asset_flip",
  "arcanoid_breakout":"asset_flip",
  "archery_blast":"asset_flip",
  "archery_blast":"asset_flip",
  "pinball_frenzy":"asset_flip",
  "ball_physics_draw_puzzles":"asset_flip",
  "basketball_pinball":"asset_flip",
  "beat_them_all":"asset_flip",
  "block_puzzle":"asset_flip",
  "blocky_puzzle":"asset_flip",
  "blow_up_monsters":"asset_flip",
  "bocce":"asset_flip",
  "bounce_mania":"asset_flip",
  "bounce_mania":"asset_flip",
  "bring_honey_home":"asset_flip",
  "bubble_bubble_ocean":"asset_flip",
  "bubble_bubble_ocean":"asset_flip",
  "bullet_trail":"asset_flip",
  "burger_master":"asset_flip",
  "caesar_empire_war":"asset_flip",
  "caesar_empire_war":"asset_flip",
  "candy_match_kiddies":"asset_flip",
  "candy_match_kiddies":"asset_flip",
  "cannon_army":"asset_flip",
  "castle_heroes":"asset_flip",
  "checkers_master":"asset_flip",
  "checkers_master":"asset_flip",
  "chef_word_ardee":"asset_flip",
  "classic_checkers":"asset_flip",
  "classic_pool":"asset_flip",
  "clay_skeet_shooting":"asset_flip",
  "color_dots_connect":"asset_flip",
  "colorfall":"asset_flip",
  "connect_it":"asset_flip",
  "curling":"asset_flip",
  "curve_racer":"asset_flip",
  "defend_the_kingdom":"asset_flip",
  "colors_and_numbers":"asset_flip",
  "dirt_bike_retro":"asset_flip",
  "dogfight":"asset_flip",
  "dungeon_bricker":"asset_flip",
  "dynos_and_ghosts":"asset_flip",
  "easy_flight_simulator":"asset_flip",
  "eat_your_letters":"asset_flip",
  "egg_up":"asset_flip",
  "empire_invasion":"asset_flip",
  "escape_route":"asset_flip",
  "fantasy_cards":"asset_flip",
  "find_10_differences":"asset_flip",
  "fire_and_water":"asset_flip",
  "fly_the_bird":"asset_flip",
  "free_throw_basketball":"asset_flip",
  "froggy_crossing":"asset_flip",
  "galactic_trooper_armada":"asset_flip",
  "gem_miner":"asset_flip",
  "golf_royale":"asset_flip",
  "gorilla_big_adventure":"asset_flip",
  "grand_prix_racing":"asset_flip",
  "grand_slam_tennis":"asset_flip",
  "hammer_2_reloaded":"asset_flip",
  "head_games":"asset_flip",
  "heroic_pirates":"asset_flip",
  "hungry_ball_physics":"asset_flip",
  "hunter_shooting_camp":"asset_flip",
  "insert_before_flight":"asset_flip",
  "jumping_helix_ball":"asset_flip",
  "jumping_quest":"asset_flip",
  "jumping_stack_ball":"asset_flip",
  "knight_with_tactics":"asset_flip",
  "league_of_champions_soccer":"asset_flip",
  "let_it_roll_2_slide_puzzles":"asset_flip",
  "let_it_roll_slide_puzzle":"asset_flip",
  "links_puzzle":"asset_flip",
  "little_squires_quests":"asset_flip",
  "logscape_puzzle_game":"asset_flip",
  "magic_pen_color_book":"asset_flip",
  "magical_maze":"asset_flip",
  "mahjong_masters":"asset_flip",
  "mania_fish":"asset_flip",
  "max_reloaded_ii":"asset_flip",
  "maze_with_cube":"asset_flip",
  "metal_commando":"asset_flip",
  "mini_car_racing":"asset_flip",
  "monster_rescue":"asset_flip",
  "mountain_bike_hill_climb_race_real_2d_arcade_dirt_racing_games":"asset_flip",
  "my_little_fast_food_booth":"asset_flip",
  "my_little_fruit_juice_booth":"asset_flip",
  "my_little_icecream_booth":"asset_flip",
  "ninja_buddy_epic_quest":"asset_flip",
  "ninja_epic_adventure":"asset_flip",
  "offroad_mini_racing":"asset_flip",
  "olympic_basketball":"asset_flip",
  "olympic_boxing":"asset_flip",
  "olympic_table_tennis":"asset_flip",
  "park_inc":"asset_flip",
  "party_games_15_in_1":"asset_flip",
  "pinball_big_splash":"asset_flip",
  "pirate_treasure_island_of_mazes":"asset_flip",
  "pix_jungle_adventures":"asset_flip",
  "pixel_head_soccer":"asset_flip",
  "pixel_jumper":"asset_flip",
  "pop_blocks":"asset_flip",
  "pop_the_bubbles":"asset_flip bad_game",
  "puzzle_box_3_in_1":"asset_flip",
  "puzzle_pipes":"asset_flip",
  "puzzle_plowing_a_field":"asset_flip",
  "pyramids_slot_machines":"asset_flip",
  "ragdoll_fighter":"asset_flip",
  "rally_road_crashy_car_racing":"asset_flip",
  "red_ball_escape":"asset_flip",
  "retro_fighter_dragons_revenge":"asset_flip",
  "shadow_samurai_revenge":"asset_flip",
  "shark_adventure":"asset_flip",
  "skittles":"asset_flip",
  "solitaire_card_games":"asset_flip",
  "space_aliens_invaders":"asset_flip",
  "space_wars":"asset_flip",
  "strike_daz_cans":"asset_flip",
  "sudoku_master":"asset_flip",
  "super_disc_soccer":"asset_flip",
  "super_punch":"asset_flip",
  "super_shape_shooter":"asset_flip",
  "sweet_sugar_candy":"asset_flip",
  "sweets_swap":"asset_flip",
  "table_soccer_foosball":"asset_flip",
  "tank_battle_retro":"asset_flip",
  "team_troopers":"asset_flip",
  "the_bullet_time_of_revenge":"asset_flip",
  "titans_black_ops":"asset_flip",
  "top_down_racer":"asset_flip",
  "top_gun_air_combat":"asset_flip",
  "trigonal":"asset_flip",
  "turbo_skiddy_racing":"asset_flip",
  "urban_street_fighting":"asset_flip",
  "us_navy_sea_conflict":"asset_flip",
  "wacky_run":"asset_flip",
  "wood_block_escape_puzzles":"asset_flip",
  "wood_block_escape_puzzles_2":"asset_flip",
  "wood_block_escape_puzzles_3":"asset_flip",
  "word_crush_hidden":"asset_flip",
  "zodiac_tri_peaks_solitaire":"asset_flip",
  "zombie_apocalypse":"asset_flip",
  "zombie_raid":"asset_flip"
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

	if (page == "list") {
	  if (site == "dd") decorate_list_dd();
	  if (site == "uk") decorate_list_uk();
	  if (site == "us") decorate_list_us();
  }
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
  if ((typeof url) == "undefined") return "n.a.";
	if (url.slice(-1) == "/") url = url.slice(0, -1);
	let lastSlashPos = url.lastIndexOf("/") + 1;
	let name = "n.a.";

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
	let second = window.location.href.split("/")[3];
	return (second == "items" ? "item" : "list");
}

function decorate_item_dd()
{
	let elms = document.getElementsByTagName("h2");
	if ((typeof elms) == "undefined") return;
  elm = elms[0];
	text = elm.innerHTML;

	let game = parse_game_name(site, window.location.href);
	let decor = render_decoration(game);

	text = text.replaceAll("</span>", "</span><div>" + decor + "</div>");

	elm.innerHTML = text;
}

function decorate_list_dd()
{
	let elms = document.getElementsByClassName("name");
	if ((typeof elms) == "undefined") return;

	for (let index = 0; index < elms.length; index++) {
		let elm = elms[index];

		let outer_elm;
		let link_elm;
		if (elm.classList.value.includes("mb-1")) {
			outer_elm = elm;
			link_elm = elm.firstElementChild;
		} else {
			outer_elm = elm.parentElement.parentElement;
			link_elm = elm.parentElement;
		}
		let text = outer_elm.innerHTML;

		let game = parse_game_name(site, link_elm.href);
		let decor = render_decoration(game);

		text = text.replaceAll("<div", "<span");
		text = text.replaceAll("</div>", "</span>");
		text = text.replaceAll("</a>", "</a><div>" + decor + "</div>");

		outer_elm.innerHTML = text;
	}

}

function detect_page_uk()
{
	let second = window.location.href.split("/")[3].toLocaleLowerCase();
	return (second == "games" ? "item" : "list");
}

function decorate_item_uk()
{
  let elms = document.getElementsByTagName("h1")
	if ((typeof elms) == "undefined") return;
  let elm = elms[0];
	let text = elm.innerHTML;

	let game = parse_game_name(site, window.location.href);
	let decor = render_decoration(game);

  text += render_newline();
  text += "<span";
  text += render_attr("style", "font-size: 17px");
  text += ">" + decor + "</style>";

	elm.innerHTML = text;
}

function decorate_list_uk()
{
  setTimeout(decorate_list_uk, 1000);

  let elms = document.getElementsByClassName("page-title-text");
  if ((typeof elms) == "undefined") return;
  if (elms.length == 0) return;
  if (elms.length == 1) return;

	for (let index = 0; index < elms.length; index++) {
    let elm = elms[index];
    if (elm.classList.value.includes("switch_stars_tags_was_here")) continue;

    let link_elm = elm.parentElement.parentElement.parentElement;
    let href = link_elm.href;
    if ((typeof href) == "undefined") continue;

    let path = href.split("/");
    if (path.length < 2) continue;
    if (path[2].toLowerCase().includes("switch-download")) continue;

		let game = parse_game_name(site, href);
		let decor = render_decoration(game);
		let text = elm.innerHTML;

    text += render_newline();
    text += "<span ";
    text += render_attr("style", "font-size: 15px;");
    text += ">";
    text += decor;
    text += "</span>";

    elm.classList.value += " switch_stars_tags_was_here";
		elm.innerHTML = text;
  }
}

function detect_page_us()
{
	let second = window.location.href.split("/")[4].toLocaleLowerCase();
	return (second == "products" ? "item" : "list");
}

function decorate_item_us()
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

function render_attr(attr, value)
{
	return " " + attr + "='" + value + "'";
}

function render_link(url, title)
{
	let r = "<a"

  if (site == "uk") {
    if (page == "item") {
      r += render_attr("style", "color: #dddddd;");
    } else {
      r += render_attr("style", "color: #999999;");
    }
  }

	r += render_attr("href", url);
	r += render_attr("target", "review");
	r += ">" + title + "&raquo;</a>";

  if (site == "uk") r += render_space();

	return r;
}

function render_decoration(game) 
{
	r = "";

	r += render_decor_taglist(game);
	r += render_decor_google_search(game);
	r += render_space();
	r += render_decor_youtube_search(game);

	return r;
}

function render_decor_taglist(game)
{
	r = "";

	if (game in tags) {
		let tag_list = tags[game].split(" ");

		for (let tag_index in tag_list) {
			let tag = tag_list[tag_index];
			if (tag == "") continue;
			r += render_tag(tag);

      if (site == "uk") r += render_space();
		}

	}

	return r;
}

function render_decor_google_search(game)
{
	let url = "https://www.google.com/";
	url += "search?q=";
	url += "nintendo+switch+review+";

	url += game.replaceAll("_", "+");
	r = render_link(url, "Google");

	return r;
}

function render_decor_youtube_search(game)
{
	let url = "https://www.youtube.com/";
	url += "results?search_query=";
	url += "nintendo+switch+review+";

	url += game.replaceAll("_", "+");
	r = render_link(url, "YouTube");

	return r;
}

function render_tag(tag)
{
	let style = "background: #eeeeee; color: #000000;";
	if (tag == "asset_flip") {
    if (site == "uk" && page == "item") {
		  style = "background: #ffff99; color: #990000;";
    } else {
		  style = "background: #990000; color: #ffff99;";
    }
	}
 
  tag = "#" + tag;

  if (site == "uk") {
    tag = "&nbsp;" + tag + "&nbsp";
  }

	r = "<span";
	if (site == "dd") r += render_attr("class", "badge");
	r += render_attr("style", style);
	r += ">" + tag + "</span>";

	return r + render_space();
}


if ((typeof document) == "object") {
	init_extension();
} else {
	module.exports = { parse_game_name, detect_site };
}
