document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // رابط RSS لأخبار التكنولوجيا من Google News
    const rssUrl = "https://corsproxy.io/?https://news.google.com/rss/search?q=تكنولوجيا&hl=ar&gl=US&ceid=US:ar";

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

            // تحديث شريط الأخبار
            newsContainer.innerHTML = newsHtml;
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>تعذر تحميل الأخبار. حاول مرة أخرى لاحقًا.</p>";
        });
});
