const image = document.getElementById('image');

const img_src = {
    styles: 'images/grid_paper.jpeg',
    styles2: 'images/arrow.jpeg',
};

function toggleStyleSheet(){
    // 1 (a) Get style element by ID (hint: getElementById)
    var style_elem = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var curr_style = style_elem.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var new_style;
    if (curr_style == "styles2.css") {
        new_style = "styles";
    } else {
        new_style = "styles2";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    var new_css = new_style + ".css"
    style_elem.setAttribute("href", new_css);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("style_saved", new_css);
    localStorage.setItem("image", new_style)
    image.src = img_src[new_style];
}

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var style_name = localStorage.getItem("style_saved");
    // 2 (b) get html style element by ID
    var html_style = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    html_style.setAttribute("href", style_name);
}