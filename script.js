document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // رابط RSS لأخبار التكنولوجيا من موقع TechCrunch
    const rssUrl = "https://corsproxy.io/?https://feeds.feedburner.com/TechCrunch/";

    fetch(rssUrl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let newsHtml = "";

            items.forEach((item, index) => {
                if (index < 5) { // عرض أول 5 أخبار فقط
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    newsHtml += <a href="${link}" target="_blank">${title}</a> | ;
                }
            });

            newsContainer.innerHTML = newsHtml;
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>تعذر تحميل الأخبار. حاول مرة أخرى لاحقًا.</p>";
        });
});
