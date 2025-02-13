document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
           const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    });

    // جلب الأخبار الحية
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml")
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news-container");
            newsContainer.innerHTML = "";
            data.items.slice(0, 5).forEach(news => {
                let newsItem = document.createElement("a");
                newsItem.href = news.link;
                newsItem.target = "_blank";
                newsItem.innerText = news.title;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error("خطأ في تحميل الأخبار:", error));
});
