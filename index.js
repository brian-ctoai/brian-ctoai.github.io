const config = jQuery.ajax("config.json");
const URL = config.CTOAI_API_URL;

if (URL === "https://api.cto.ai") {
  document.getElementsByClassName("broken")[0].style.visibility = "hidden";
} else {
  document.getElementsByClassName("working")[0].style.visibility = "hidden";
}
