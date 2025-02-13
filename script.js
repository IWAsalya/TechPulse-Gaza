document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");

    // فتح/إغلاق القائمة الجانبية
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });

    // إغلاق القائمة عند النقر خارجها
    body.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) {
            sidebar.classList.remove("show");
        }
    });

    // إغلاق القائمة عند النقر على رابط
    sidebar.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            sidebar.classList.remove("show");
        }
    });

    // جلب الأخبار الحية
    async function fetchNews() {
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "<p>جاري تحميل الأخبار...</p>";

        try {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml");
            const data = await response.json();
            newsContainer.innerHTML = ""; // إزالة النص الافتراضي

            data.items.slice(0, 5).forEach(news => {
                const newsItem = document.createElement("a");
                newsItem.href = news.link;
                newsItem.target = "_blank";
                newsItem.innerText = news.title;
                newsContainer.appendChild(newsItem);
            });
        } catch (error) {
            console.error("خطأ في تحميل الأخبار:", error);
            newsContainer.innerHTML = "<p>عذرًا، حدث خطأ أثناء تحميل الأخبار.</p>";
        }
    }

    fetchNews();
});
