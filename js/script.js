window.onload = function() {
	let boolMenu = false;
   let list;
   let boolCalcType = false;
   let boolCalcTypeMore = false;
   let moreService;
   $('.navbar').click(function() {
		if(!boolMenu) {
			$('.menu__list').css('display','block');
			boolMenu = true;
	}
		else {
			$('.menu__list').css('display','none');
			boolMenu = false;
		}
   });
   $('.type_clean').click(function() {
      if(!boolCalcType) {
         $('.type_clean__list').css('display','block');
         boolCalcType = true;
      }
      else {
            $('.type_clean__list').css('display','none');
            boolCalcType = false;
      }
   });

   $('.type_clean__list').click(function() {
      // $(this).toggleClass('type_clean__list__select');
      $(this).addClass('type_clean__list__select');
      if(list !== this) $(list).removeClass('type_clean__list__select');
      list = this;
   });
   $('.clean__more__list').click(function() {
      $(this).toggleClass('clean__more__list__select');
   });
   //
   $('.more_service__list').click(function() {
      if(!boolCalcTypeMore) {
         $('.clean__more__list').css('display','block');
         boolCalcTypeMore = true;
      }
      else {
            $('.clean__more__list').css('display','none');
            boolCalcTypeMore = false;
      }
   });
};


/* Get Position Element */

let FaqLeft = document.querySelector('.faq_left');

let GetBlockInfo = document.querySelector('.info');

function scrollToBlock(elem) {
   window.scrollTo({
      top: elem.offsetTop+300,
      behavior: 'smooth',
   });
}

/* Scroll */

let Scroll = document.getElementById('arrow_up');
let boolScroll = false;
Scroll.style.transition = "opacity 0.5s ease-in";
window.addEventListener('scroll', function() {
   if(window.scrollY >= 1000) {
      if(!boolScroll) {
            Scroll.style.display = 'block';
            setTimeout(function() {
            Scroll.style.opacity = '1';
            boolScroll = true;
         },500);
      }
      
      
   }
   else {
      if(boolScroll == true) {
            Scroll.style.opacity = '0';
            setTimeout(function() {
            // Scroll.style.display = 'none';
            boolScroll = false;
         },500);
      }
      
   }
},false);

Scroll.addEventListener('click', function(e) {
   console.log('test');
   if(window.scrollY >= 0) {
      // this.scrollTo(0,0);
      // window.scrollY = 2000;
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }
   // console.log(window.scrollY);
},false);

// if(this.scrollY > 1000) {
//    window.addEventListener('scroll', function(e) {
// }
