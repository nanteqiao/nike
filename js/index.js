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
		  document.querySelector('.all_pro').style.fontSize='20';
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
        goodsStr += `<div class="details "  code="${item.code}" introduction="${item.introduction}" showcolor="${item.showcolor}" showImg01="${item.showImg01}" showImg02="${item.showImg02}" showImg03="${item.showImg03}" showImg04="${item.showImg04}" showImg05="${item.showImg05}" showImg06="${item.showImg06}" showImg07="${item.showImg07}" showImg08="${item.showImg08}" title="${item.title}" type="${item.type} " color="${item.color}" price="${item.price}"><img src="${item.imgurl}" >
			<div class="product-card" >
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
	  
$('.main_center').on('click','.details',function(){
 //    // console.log(123)
	var code = $(this).attr('code');
	var introduction = $(this).attr('introduction');
	var showcolor = $(this).attr('showcolor');
	var showImg01 = $(this).attr('showImg01');
	var showImg02 = $(this).attr('showImg02');
	var showImg03 = $(this).attr('showImg03');
	var showImg04 = $(this).attr('showImg04');
	var showImg05 = $(this).attr('showImg05');
	var showImg06 = $(this).attr('showImg06');
	var showImg07 = $(this).attr('showImg07');
	var showImg08 = $(this).attr('showImg08');
	var title = $(this).attr('title');
	var type = $(this).attr('type');
	var color = $(this).attr('color');
	var price = $(this).attr('price');
	var goodsArr = {code:code,introduction:introduction,showImg01:showImg01,showImg02:showImg02,showImg03:showImg03,showImg04:showImg04,showImg05:showImg05,showImg06:showImg06,showImg07:showImg07,showImg08:showImg08,showcolor:showcolor,title:title,type:type,color:color,price:price};
	// console.log(code);
	// // localStorage.setItem('temporary',)
    window.location.href='goods.html';
    localStorage.setItem('temporary',JSON.stringify(goodsArr));
     
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


	

