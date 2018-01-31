function init() {
    console.log("home.js initialized");
    // Parse emojis on page
    twemoji.parse(document.getElementById("p"));
}

init();