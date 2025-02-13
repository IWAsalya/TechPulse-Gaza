document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال الفوري للنموذج
    
    // هنا يمكن إضافة التحقق من صحة البيانات
    alert("تم إرسال رسالتك بنجاح!");
});
