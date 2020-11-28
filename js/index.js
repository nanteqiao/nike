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

//点击购物袋跳转
	 $('.icon-gouwudai').on('click',function(){
		 window.location.href='goodsCar.html';
	 })

if(getCookie('linshi')!=null){
	var linshi = getCookie('linshi');
	var goodsStr = '';
	goodsStr = `<a href="#" class="login_button">用户${linshi}</a><a href="#" class="quit">退出登录</a>`;
	$('.login_top').html(goodsStr);
}



if(localStorage.getItem('mylogin')){//在上一次点击了保持登录状态后本地存储了数据，现在渲染他
	var goodsArr = JSON.parse(localStorage.getItem('mylogin'));
	goodsStr = `<a href="#" class="login_button">用户${goodsArr[0].username}</a><a href="#" class="quit">退出登录</a>`;
	$('.login_top').html(goodsStr);
}  
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


$('.login_button').on('click',function(){
	$('.login').css('display','block');
})

$('.login_close').on('click',function(){
	$('.login').css('display','none');
})

$('.register_close').on('click',function(){
	$('.register').css('display','none');
})

$('.i_join').on('click',function(){
	$('.login').css('display','none');
	$('.register').css('display','block');
})


$('.i_login').on('click',function(){
	$('.login').css('display','block');
	$('.register').css('display','none');
})


//注册功能  将账户密码以localStorage存储到本地

// var user = $('#register_user').trim()

$('#register_me').on('click',function(){
	var user = $('#register_user').val().trim();
	var pass = $("#exampleInputPassword2").val().trim();
	var goodsArr = [{username:user,password:pass}];
	if(localStorage.getItem('user')==null){//如果本地数据库为空
		localStorage.setItem('user',JSON.stringify(goodsArr));
		alert("注册成功");
	}else{
		var goodsObj = JSON.parse(localStorage.getItem('user'));
	    for(var i = 0,len = goodsObj.length;i<len;i++){
		if(user === goodsObj[i].username){
			alert('用户名已存在');
			return
		}else{
			goodsObj.push({username:user,password:pass});
			localStorage.setItem("user", JSON.stringify(goodsObj)); 
			alert("注册成功");
			return
			}
		}
	}
	
})

//登录  遍历本地数据，没有提示用户名或密码错误，正确则创建一个临时数据存储账户密码，如果点击了记住则创建localstorage永久保存，取消记住则删除数据
$('#login_me').on('click',function(){
	var user = $('#login_user').val().trim();
	var pass = $("#exampleInputPassword1").val().trim();
	var goodsObj = JSON.parse(localStorage.getItem('user'));
	if(localStorage.getItem('user')==null){
		alert('账户或密码不正确');
		return
	}
	var sum = 0;
	for(var i = 0,len = goodsObj.length;i<len;i++){
		if(user === goodsObj[i].username){
			if(pass === goodsObj[i].password){
				alert('登录成功');
				$('.login').css('display','none');
				var goodsStr = '';
				goodsStr = `<a href="#" class="login_button">用户${user}</a><a href="#" class="quit">退出登录</a>`;
				$('.login_top').html(goodsStr);
				
				if($('.remember').is(':checked')){//点击保持登录状态
					var userArr = [{username:user,password:pass}];
					localStorage.setItem('mylogin',JSON.stringify(userArr));//存到本地
				}else{//不点击保持登录
					if(localStorage.getItem('mylogin')==null){//先看看本地的mylogin是不是为空，如果不执行这一步操作，下面的删除数据操作可能会报错
					//如果为空，设置一个20分钟后到期的cookie
					setCookie({
					  val: user,
					  key: 'linshi',
					  ms: 1200000
					})
						
					}else{//如果不为空，先看看本地的是不是我们输入的，因为本地只存储一个
						var goodsObj = JSON.parse(localStorage.getItem('mylogin'));
						
						if(goodsObj[0].username == user){
							//如果是，删除本地的这条数据
							
							localStorage.removeItem('mylogin');
						}else{
							//如果不是，那也没事了
						}
					}
				}
				
				return
			}else{
				sum++
			}
		}else{
			sum++
		}
	}
	if(sum === len-1){
		alert('账户或密码不正确');
		return
	}
})


//设置cookie，目的是如果用户没有点击保持登录，设置一个临时存储的数据，过期时间大约为二十分钟
function setCookie(options){
  options.ms = options.ms || 0;
  options.path = options.path || '';
  if (options.ms === 0) {
    document.cookie = options.key+'='+options.val+'; path='+options.path;
  } else {
    var d = new Date();
    d.setTime(d.getTime()+options.ms);
    document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path;
  }
}
// 获取cookie
function getCookie(key){
  var arr = document.cookie.split('; ')
  for (var i = 0, len = arr.length; i < len; i++){
    var arr2 = arr[i].split('=');
    if (arr2[0] === key) {
      return arr2[1];
    }
  }
  return null
}

// 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key){
  
  setCookie({
    key: 'linshi',
    val: getCookie('linshi'),
    ms: -20000000000
  })
}

//点击退出，清除所有数据
$('.quit').on('click',function(){
	localStorage.removeItem('mylogin');
	removeCookie('linshi');
	location.reload();
})

