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
	 
	// $(document).scrollTop();
 window.addEventListener("scroll",()=>{  
     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    
     let offsetTop = document.querySelector('.wall-header').offsetTop;
	 
     if (offsetTop - scrollTop < 100) {  
		  document.querySelector('.wall-header').style.position="fixed";
          document.querySelector('.wall-header').style.top="90";
     } else {
	 	   document.querySelector('.wall-header').style.position="relative";  
	       document.querySelector('.wall-header').style.top="120";  
	  }
	 
	 }) 
	  
	  
$(function (){

  // 获取商品列表数据
  $.ajax({
    url: '../productType.json',
    type: 'get',
    dataType: 'json',
    success: function (json){
      // console.log(json)
      var goodsStr = ''
      $.each(json,function (index,item){
        goodsStr += `<li><a>${item}</a></li>`
      })
      $('.product').html(goodsStr)
    }
  })
  
  $.ajax({
    url: '../goods.json',
    type: 'get',
    dataType: 'json',
    success: function (json){
      // console.log(json)
      var goodsStr = ''
      $.each(json,function (index,item){
        goodsStr += `<div class="details"><img src="${item.imgurl}" >
			<div class="product-card">
				<div class="product-card_info">
					<div class="product-card_info_new">
						${item.new}
					</div>
					<div class="product-card_info_titles">
						<div class="product-card_info_title">
							${item.title}
						</div>
						<div class="product-card__subtitle">
							${item.type}
						</div>
					</div>
				</div>
				<div class="product-card_color">
					${item.color}
				</div>
				<div class="product-card_price">
					${item.price}
				</div>
			</div></div>`
      })
      $('.main_center').html(goodsStr)
    }
  })
})
	  

$('.menu').on('mouseenter','li',function(){
	$('li').parent().parent().height(500);
	
})
$('.menu').on('mouseout','li',function(){
	$('li').parent().parent().height(30)
})