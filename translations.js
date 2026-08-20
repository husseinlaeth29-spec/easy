// ============ نظام تعدد اللغات ============
const translations = {
  ar: {
    site_name: "🔧 معدّاتي",
    cart: "🛒 السلة",
    categories: "الأقسام",
    equipment: "المعدات",
    contact: "تواصل معنا",
    add_to_cart: "+ أضف",
    view_cart: "تصفح السلة",
    checkout: "✅ إرسال الطلب",
    empty_cart: "السلة فارغة",
    previous_orders: "📋 طلباتك السابقة",
    search_phone: "أدخل رقم هاتفك للبحث عن طلباتك السابقة",
    order_id: "رقم الطلب",
    total: "الإجمالي",
    status: "الحالة",
    delivered: "تم",
    pending: "قيد",
    customer_data: "📋 بيانات الطلب",
    full_name: "الاسم الكامل",
    phone: "رقم الهاتف",
    address: "العنوان / المنطقة",
    notes: "ملاحظات إضافية",
    total_price: "المجموع الكلي",
    empty_products: "ما في منتجات بعد",
    welcome: "مرحباً بك",
    best_rental: "✨ أفضل خدمة تأجير في العراق",
    admin_panel: "لوحة الإدارة",
    cashier_panel: "لوحة الكاشير",
    reports: "🎁 الكوبونات",
    customers: "👤 العملاء",
    top_products: "🔥 أكثر المعدات طلباً",
    points: "⭐ النقاط",
    loyalty: "نظام الولاء",
    save_notes: "💾 حفظ الملاحظة",
    save_review: "💾 حفظ التقييم",
    rating: "⭐ تقييم الزبون",
    error: "❌ خطأ",
    success: "✅ تم",
    try_again: "حاول مرة أخرى لاحقاً"
  },
  en: {
    site_name: "🔧 Muaddati",
    cart: "🛒 Cart",
    categories: "Categories",
    equipment: "Equipment",
    contact: "Contact Us",
    add_to_cart: "+ Add",
    view_cart: "View Cart",
    checkout: "✅ Place Order",
    empty_cart: "Cart is empty",
    previous_orders: "📋 Your Previous Orders",
    search_phone: "Enter your phone to find your previous orders",
    order_id: "Order ID",
    total: "Total",
    status: "Status",
    delivered: "Delivered",
    pending: "Pending",
    customer_data: "📋 Order Information",
    full_name: "Full Name",
    phone: "Phone Number",
    address: "Address / Area",
    notes: "Additional Notes",
    total_price: "Total Price",
    empty_products: "No products yet",
    welcome: "Welcome",
    best_rental: "✨ Best Rental Service in Iraq",
    admin_panel: "Admin Panel",
    cashier_panel: "Cashier Panel",
    reports: "🎁 Coupons",
    customers: "👤 Customers",
    top_products: "🔥 Top Equipment",
    points: "⭐ Points",
    loyalty: "Loyalty Program",
    save_notes: "💾 Save Note",
    save_review: "💾 Save Review",
    rating: "⭐ Customer Rating",
    error: "❌ Error",
    success: "✅ Success",
    try_again: "Please try again later"
  },
  ku: {
    site_name: "🔧 مووادڕات",
    cart: "🛒 سەبەتە",
    categories: "بەشەکان",
    equipment: "گیرەکان",
    contact: "پەیوەندی پێوە",
    add_to_cart: "+ زیادکردن",
    view_cart: "سەبەتە بڕوانە",
    checkout: "✅ دڵنیاکردنی فرمان",
    empty_cart: "سەبەتە خاڵی",
    previous_orders: "📋 فرمانەکانی پێشتریت",
    search_phone: "ژمارەی تێلەفۆنت بنووسە",
    order_id: "ناسنامەی فرمان",
    total: "کۆی گشتی",
    status: "دۆخ",
    delivered: "گەیاندراو",
    pending: "چاوەڕێ",
    customer_data: "📋 زانیاری فرمان",
    full_name: "ناوی تێدا",
    phone: "ژمارەی تێلەفۆن",
    address: "ناونیشان",
    notes: "تێبینی زیاتر",
    total_price: "کۆی گشتی",
    empty_products: "هیچ فرۆشتنی نیی",
    welcome: "بەخێربێی",
    best_rental: "✨ باشترین خزمەتی کرێی لە عیراق",
    admin_panel: "پانێلی بەرێز",
    cashier_panel: "پانێلی خۆپذیر",
    reports: "🎁 کۆپۆنەکان",
    customers: "👤 مشتریاران",
    top_products: "🔥 گیرەکانی زۆرتر",
    points: "⭐ پۆین",
    loyalty: "برنامەی وەفاداری",
    save_notes: "💾 تێبینی پاشەکەوت کە",
    save_review: "💾 پشکنین پاشەکەوت کە",
    rating: "⭐ پشکنینی مشتری",
    error: "❌ هەڵە",
    success: "✅ سەرکەوتو",
    try_again: "تکاتە دواتر دووبارە هەوڵ بدە"
  }
};

// دالة الترجمة
function t(key, lang = localStorage.getItem('lang') || 'ar') {
  return translations[lang]?.[key] || translations['ar'][key] || key;
}

// تغيير اللغة
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
  location.reload();
}

// تحميل اللغة المحفوظة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ar';
  document.documentElement.lang = savedLang;
  document.documentElement.dir = (savedLang === 'en') ? 'ltr' : 'rtl';
});
