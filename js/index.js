
var imgNumPrev = 0;

function changeBg() { 


var imgNum = Math.floor(Math.random()*10);

// if (imgNum == imgNumPrev ) { 
//    imgNum = Math.floor(Math.random()*10);
//    if ( imgNum == imgNumPrev ) {
//       imgNum = Math.floor(Math.random()*10);
//    }
// }

while (true) { 
   imgNum = Math.floor(Math.random()*10);
   if (imgNum != imgNumPrev) {
   break; }
}

document.getElementById('hero_bg').style = "background-image: url(img/poster_" + imgNum + ".jpg); ";

// document.getElementById('hero').style = "animation: fade_in_hero 2s";

document.getElementById('hero_bg').classList.remove('effect_fade_in');

void document.getElementById('hero_bg').offsetWidth;

document.getElementById('hero_bg').classList.add('effect_fade_in');

imgNumPrev = imgNum;

}

var changeHero = setInterval(changeBg, 5000);


// FAQ Accodion

// 아코디온 메뉴 오픈 상태 변수


var faqLi = document.getElementsByClassName('faq_li');
var faqBtn = document.getElementsByClassName('faq_q_btn');

var faqOpenState = [];

for (i=0; i<faqLi.length; i++) {
   faqOpenState[i] = false;
}

function accOpen(target) {

   for (i=0; i<faqLi.length; i++) {

      if ( target != i) { 
         faqLi[i].style = "max-height:60px;";
         faqBtn[i].style = "transform:rotate(0deg);";
         faqOpenState[i] = false;
      }
   }

   if (faqOpenState[target] == true) {

         faqLi[target].style = "max-height:60px;";
         faqBtn[target].style = "transform:rotate(0deg);";
         faqOpenState[target] = false;
   } else
      {
         faqLi[target].style = "max-height:600px;"; 
         faqBtn[target].style = "transform:rotate(45deg);";
         faqOpenState[target] = true;

      }

}


// Footer Language Select

function languageChange() {

   if ( document.getElementById('language').value == "english" ) {
      document.location = "index_en.html";
      // document.location = "https://www.netflix.com/kr-en/";
   } else {
      document.location = "index.html";
   }
   
}



