// $('.menuDown').on('mouseover',function(){
// 	$('.dropdown').addClass('animated bounceInDown');
// })
// $('.menuDown').on('mouseout',function(){
// 	$('.dropdown').addClass('animated bounceOutUp ');
// })

// $('.menuDown').on('mouseover',function(){
// 	$('.dropdown').animate({
// 		opacity:1,
// 		top:26
// 	},300)
// })
// $('.menuDown').on('mouseout',function(){
// 	$('.dropdown').animate({
// 		opacity:0,
// 		top:20
// 	},300);
// })
var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项
		autoplay: {
		   delay: 3000,
		   stopOnLastSlide: false,
		   disableOnInteraction: false,
		   },
		   effect : 'slide',
		   // slidesPerView: 3,
		   // centeredSlides: true,
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
		
		// 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		
		// 如果需要滚动条
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	})   
	 
	
	