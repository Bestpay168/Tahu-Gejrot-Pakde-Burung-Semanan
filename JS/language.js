if("ar"){
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
}
else{
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
}

const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}

const lang = {

id:{
    navHome:"Beranda",
    navMenu:"Menu",
    navAbout:"Tentang",
    navGallery:"Galeri",
    navMaps:"Lokasi",
    navOrder:"Pesan",

    heroTitle:"TAHU GEJROT PAKDE BURUNG",
    heroDesc:"Pedas, Segar, dan Bikin Nagih",
    btnOrder:"Pesan Sekarang",
},

en:{
    navHome:"Home",
    
    navMenu:"Menu",
    navAbout:"About",
    navGallery:"Gallery",
    navMaps:"Location",

    navOrder:"Order",
    heroTitle:"PAKDE BURUNG TOFU GEJROT",
    heroDesc:"Spicy, Fresh, and Delicious",
    btnOrder:"Order Now",

},


zh:{
    navHome:"首页",
        navMenu:"菜单",
    navAbout:"关于我们",
    navGallery:"图库",
    
    navMaps:"位置",
    navOrder:"订购",
    heroTitle:"Pakde Burung 印尼特色豆腐",
    heroDesc:"香辣、新鲜、美味",
    btnOrder:"立即订购",

},

ja:{
    navHome:"ホーム",
  
    navMenu:"メニュー",
    navAbout:"会社概要",
    navGallery:"ギャラリー",   
    navMaps:"所在地",
    navOrder:"注文",

heroTitle:"パクデ・ブルン 豆腐ゲジョロット",
heroDesc:"辛くて新鮮、とても美味しい",
btnOrder:"今すぐ注文",

},


ko:{
    navHome:"홈",
    
    navMenu:"메뉴",
    navAbout:"소개",
    navGallery:"갤러리",
   
    navMaps:"위치",
    navOrder:"주문",
heroTitle:"박데 부룽 타후 게조롯",
heroDesc:"매콤하고 신선하며 맛있습니다",
btnOrder:"지금 주문하기",

ar:{
    navHome:"الرئيسية",
    navMenu:"القائمة",
    navAbout:"من نحن",
    navGallery:"المعرض",
    navMaps:"الموقع",
    navOrder:"اطلب الآن",

    heroTitle:"تاهو جيجروت باكدي بورونغ",
    heroDesc:"حار • طازج • لذيذ للغاية",
    btnOrder:"اطلب الآن",


}

};


function setLang(language){

document.getElementById("heroTitle").textContent=lang[language].heroTitle;

document.getElementById("heroDesc").textContent=lang[language].heroDesc;

document.getElementById("btnOrder").textContent=lang[language].btnOrder;

document.getElementById("navHome").textContent=lang[language].navHome;

document.getElementById("navMenu").textContent=lang[language].navMenu;

document.getElementById("navAbout").textContent=lang[language].navAbout;

document.getElementById("navGallery").textContent=lang[language].navGallery;

document.getElementById("navMaps").textContent=lang[language].navMaps;

document.getElementById("navOrder").textContent=lang[language].navOrder;

}

