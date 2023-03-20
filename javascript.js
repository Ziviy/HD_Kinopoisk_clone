document.querySelector(".search-button").addEventListener("mouseover", e => {
    // search_button.src = "/images/search_hovered.png";
    e.target.src = "/images/search_hovered.png";
})

document.querySelector(".search-button").addEventListener("mouseout", e => {
    e.target.src = "/images/search.png";
})


document.querySelector(".monitor-button").addEventListener("mouseover", e => {
    document.querySelector(".monitor-button > img").src = "/images/monitor_hovered.png";
    document.querySelector(".monitor-button > span").style.color = "#FFFFFF";
})

document.querySelector(".monitor-button").addEventListener("mouseout", e => {
    document.querySelector(".monitor-button > img").src = "/images/monitor.png";
    document.querySelector(".monitor-button > span").style.color = "#a8a6a4";
})