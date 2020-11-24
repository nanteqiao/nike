var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项
		autoplay: {
		   delay: 3000,
		   stopOnLastSlide: false,
		   disableOnInteraction: false,
		   },
		   effect : 'slide',
		   
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
	       document.querySelector('.wall-header').style.top="100";  
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
	  



$('.filter-group').on('click','span',function(){
	if($(this).hasClass('icon-jiantouxia')){
		$(this).removeClass('icon-jiantouxia');
		$(this).addClass('icon-jiantoushang');
		$(this).parent().parent().removeClass("filter");
		$(this).parent().parent().addClass("filter-new");
		
	}else{
		$(this).removeClass('icon-jiantoushang');
		$(this).addClass('icon-jiantouxia');
		$(this).parent().parent().removeClass("filter-new");
		$(this).parent().parent().addClass("filter");
	}
	
})


$('.filter-item i').eq(0).attr('style','background-color:rgb(141, 66, 159)')
$('.filter-item i').eq(1).attr('style','background-color:rgb(0, 0, 0)')
$('.filter-item i').eq(2).attr('style','background-color:rgb(231, 53, 43)')
$('.filter-item i').eq(3).attr('style','background-color:rgb(243, 107, 38)')
$('.filter-item i').eq(4).attr('style','background-color:rgb(23, 144, 200)')
$('.filter-item i').eq(5).attr('style','background-color:rgb(255, 255, 255);border: 1px solid rgb(229, 229, 229);')
$('.filter-item i').eq(6).attr('style','background-color:rgb(130, 93, 65)')
$('.filter-item i').eq(7).attr('style','background-color:rgb(123, 186, 60)')
$('.filter-item i').eq(8).attr('style','background-color:rgb(254, 213, 51)')
$('.filter-item i').eq(9).attr('style','background:radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 0px 0px / 15px 15px, radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 8px 8px, rgb(0, 0, 0);background-position: 0px 0px, 8px 8px')
$('.filter-item i').eq(10).attr('style','background-color:rgb(128, 128, 128)')
$('.filter-item i').eq(11).attr('style','background-color:rgb(240, 114, 143);')


// $('.menu').on('mouseenter','li',function(){
// 	$(this).parent().attr('style','min-height:200px');
// 	$.ajax({
// 	  url: '../productType.json',
// 	  type: 'get',
// 	  dataType: 'json',
// 	  success: function (json){
// 	    // console.log(json)
// 	    var goodsStr = ''
// 	    $.each(json,function (index,item){
// 	      goodsStr += `<li><a>${item}</a></li>`
// 	    })
// 	    $('.showli').html(goodsStr)
// 	  }
// 	})
	
// })	
// $('.menu').on('mouseout','li',function(){
// 	$(this).parent().removeAttr('style','min-height:200px');
// })	
