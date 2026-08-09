
const langBtn=document.getElementById("langBtn");

const langMenu=document.querySelector(".lang-menu");

langBtn.onclick=function(){

    langMenu.classList.toggle("show");

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