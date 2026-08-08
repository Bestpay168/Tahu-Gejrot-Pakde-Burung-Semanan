
const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

}



const lang = {

id:{
    navHome:"Beranda",
    navAbout:"Tentang",
    navMenu:"Menu",
    navGallery:"Galeri",
    navFaq:"FAQ",
    navMaps:"Lokasi",
    navOrder:"Pesan"
},

en:{
    navHome:"Home",
    navAbout:"About",
    navMenu:"Menu",
    navGallery:"Gallery",
    navFaq:"FAQ",
    navMaps:"Location",
    navOrder:"Order"
},

zh:{
    navHome:"首页",
    navAbout:"关于我们",
    navMenu:"菜单",
    navGallery:"图库",
    navFaq:"常见问题",
    navMaps:"位置",
    navOrder:"订购"
},

ja:{
    navHome:"ホーム",
    navAbout:"会社概要",
    navMenu:"メニュー",
    navGallery:"ギャラリー",
    navFaq:"よくある質問",
    navMaps:"所在地",
    navOrder:"注文"
},

ko:{
    navHome:"홈",
    navAbout:"소개",
    navMenu:"메뉴",
    navGallery:"갤러리",
    navFaq:"자주 묻는 질문",
    navMaps:"위치",
    navOrder:"주문"
}

};
function setLang(language){

    document.getElementById("navHome").textContent = lang[language].navHome;

    document.getElementById("navAbout").textContent = lang[language].navAbout;

    document.getElementById("navMenu").textContent = lang[language].navMenu;

    document.getElementById("navGallery").textContent = lang[language].navGallery;

    document.getElementById("navFaq").textContent = lang[language].navFaq;

    document.getElementById("navMaps").textContent = lang[language].navMaps;

    document.getElementById("navOrder").textContent = lang[language].navOrder;

}


const lang={

id:{
heroTitle:"TAHU GEJROT PAKDE BURUNG",
heroDesc:"Pedas, Segar, dan Bikin Nagih",
btnOrder:"Pesan Sekarang"
},

en:{
heroTitle:"PAKDE BURUNG TOFU GEJROT",
heroDesc:"Spicy, Fresh, and Delicious",
btnOrder:"Order Now"
},

zh:{
heroTitle:"Pakde Burung 印尼特色豆腐",
heroDesc:"香辣、新鲜、美味",
btnOrder:"立即订购"
},

ja:{
heroTitle:"パクデ・ブルン 豆腐ゲジョロット",
heroDesc:"辛くて新鮮、とても美味しい",
btnOrder:"今すぐ注文"
},

ko:{
heroTitle:"박데 부룽 타후 게조롯",
heroDesc:"매콤하고 신선하며 맛있습니다",
btnOrder:"지금 주문하기"
}


};
function setLang(language){

document.getElementById("heroTitle").textContent=lang[language].heroTitle;

document.getElementById("heroDesc").textContent=lang[language].heroDesc;

document.getElementById("btnOrder").textContent=lang[language].btnOrder;

}