function changeLanguage() {
    var htmlElement = document.querySelector('html');
    var currentLang = htmlElement.lang;

    // التبديل بين اللغتين
    var newLang = (currentLang === 'ar') ? 'en' : 'ar';

    // تعيين قيمة اللغة الجديدة
    htmlElement.lang = newLang;

    // تحديث النصوص بناءً على اللغة الجديدة (اختياري)
    if (newLang === 'ar') {
        document.getElementById('qw').innerText = 'EN';
        document.getElementById('qe').innerText = 'Damascus chamber of Commerce';
        document.getElementById('qr').innerText = 'Contact us';
        document.getElementById('qt').innerText = 'Photo library';
        document.getElementById('qy').innerText = 'Training center';
        document.getElementById('qu').innerText = 'Services';
        document.getElementById('qi').innerText = 'Decisions and designs';
        document.getElementById('qo').innerText = 'Board of Directors';
        document.getElementById('io').innerText = 'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.';
        document.getElementById('qp').innerText = 'latest news';
        document.getElementById('qa').innerText = 'The Chairman and members of the Board of Directors of the Damascus Chamber of Commerce visited the Governor of Damascus, Eng';
        document.getElementById('qs').innerText = 'latest news';
        document.getElementById('qd').innerText = 'Show more';
        document.getElementById('qf').innerText = 'Damascus Chamber News';
        document.getElementById('qg').innerText = 'Launching the Chamber of Commerce and Industry Committee';
        document.getElementById('qh').innerText = 'Launching the Chamber of Commerce and Industry Committee';
        document.getElementById('qj').innerText = 'CEO of the National Islamic Bank';
        document.getElementById('qk').innerText = 'The Board of Directors of the Damascus Chamber of Commerce received the CEO of the National Islamic Bank, Mr. Amir Rahwan, and his deputy, Mr. Amin Al-Jazaei, in the office of the head of the department.';
        document.getElementById('ql').innerText = 'CEO of the National Islamic Bank';
        document.getElementById('qz').innerText = 'The Board of Directors of the Damascus Chamber of Commerce received the CEO of the National Islamic Bank, Mr. Amir Rahwan, and his deputy, Mr. Amin Al-Jazaei, in the office of the head of the department.';
        document.getElementById('qx').innerText = 'latest news';
        document.getElementById('qc').innerText = 'Circuit board';
        document.getElementById('qv').innerText = 'Decisions and circulars';
        document.getElementById('qb').innerText = 'Services';
        document.getElementById('qn').innerText = 'Training center';
        document.getElementById('qm').innerText = 'Photo library';
        document.getElementById('wq').innerText = 'Number of new members in 2024';
        document.getElementById('ww').innerText = 'Number of new members in 2024';
        document.getElementById('we').innerText = 'Number of new members in 2024';
        document.getElementById('wr').innerText = 'Number of new members in 2024';
        document.getElementById('wt').innerText = 'Services';
        document.getElementById('or').innerText = 'Address';
        document.getElementById('ot').innerText = 'Damascus, Mezzeh 86, school, opposite the Stars Club';
        document.getElementById('oy').innerText = 'Call me';
        document.getElementById('ou').innerText = 'Email me';
        document.getElementById('ammar').innerText = 'AR';
    } else {
        document.getElementById('qw').innerText = ' AR';
        document.getElementById('qe').innerText = 'غرفة تجارة دمشق';
        document.getElementById('qr').innerText = 'اتصل بنا';
        document.getElementById('qt').innerText = ' مكتبة الصور ';
        document.getElementById('qy').innerText = ' مركز التدريب ';
        document.getElementById('qu').innerText = ' الخدمات ';
        document.getElementById('qi').innerText = 'القرارات والتصاميم ';
        document.getElementById('qo').innerText = 'مجلس الادرارة ';
        document.getElementById('qp').innerText = 'أخر الأخبار ';
        document.getElementById('qa').innerText = 'زار رئيس واعضاء مجلس ادارة غرفة تجارة دمشق السيد المحافظ دمشق المهندس';
        document.getElementById('qs').innerText = 'أخر الأخبار ';
        document.getElementById('qd').innerText = 'عرض المزيد';
        document.getElementById('qf').innerText = 'أخبار غرفة دمشق';
        document.getElementById('qg').innerText =' اطلاق لجنة التجارة و الصناعة في الغرفة';
        document.getElementById('qh').innerText = 'اطلاق لجنة التجارة و الصناعة في الغرفة';
        document.getElementById('qj').innerText = 'الرئيس التنفييذي للبنك الوطني الاسلامي';
        document.getElementById('qk').innerText = 'استقبل مجلس ادارة غرفة تجارة دمشق الرئيس التنفيذي للبنك الوطني  الاسلامي السيد امير رهوان ونائبة السيد امين الجزائي في مكتب رئيس الفرقة';
        document.getElementById('ql').innerText = 'الرئيس التنفييذي للبنك الوطني الاسلامي';
        document.getElementById('qz').innerText = 'استقبل مجلس ادارة غرفة تجارة دمشق الرئيس التنفيذي للبنك الوطني  الاسلامي السيد امير رهوان ونائبة السيد امين الجزائي في مكتب رئيس الفرقة';
        document.getElementById('qx').innerText = 'اخر الخبار';
        document.getElementById('qc').innerText = 'مجلس الادارة ';
        document.getElementById('qv').innerText = 'الفرارات والتعاميم';
        document.getElementById('qb').innerText = 'الخدمات';
        document.getElementById('qn').innerText = 'مركز التدريب';
        document.getElementById('qm').innerText = 'مكتبة الصور';
        document.getElementById('wq').innerText =' عدد الأعضاء الجدد في عام 2024';
        document.getElementById('ww').innerText =' عدد الأعضاء الجدد في عام 2024';
        document.getElementById('we').innerText = 'عدد الأعضاء الجدد في عام 2024';
        document.getElementById('wr').innerText =' عدد الأعضاء الجدد في عام 2024';
        document.getElementById('wt').innerText = 'تقويم الفعاليات';
        document.getElementById('Services').innerText = 'المهارات';
        document.getElementById('or').innerText = 'عنوان';
        document.getElementById('ot').innerText = 'دمشق، المزة 86، المدرسة، مقابل نادي النجوم';
        document.getElementById('oy').innerText = 'اتصل بي';
        document.getElementById('ou').innerText = 'أرسل لي بريدا إلكترونيا';
        document.getElementById('ammar').innerText = 'EN';

    }
}