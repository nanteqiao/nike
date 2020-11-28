// var mySwiper = new Swiper ('.swiper-container', {
// 		// slidesPerView : 3,
// 		// slidesPerGroup : 1,
// 		direction: 'horizontal', // 垂直切换选项
// 		loop: false, // 循环模式选项
		
// 		autoplay: {
// 		   delay: 3000,
// 		   stopOnLastSlide: false,
// 		   disableOnInteraction: false,
// 		   },
// 		  effect : 'slide',
		   
// 		// 如果需要分页器
// 		pagination: {
// 		  el: '.swiper-pagination',
// 		},
		
// 		// 如果需要前进后退按钮
// 		navigation: {
// 		  nextEl: '.swiper-button-next',
// 		  prevEl: '.swiper-button-prev',
// 		},
		
// 		如果需要滚动条
// 		scrollbar: {
// 		  el: '.swiper-scrollbar',
// 		},
// 	})   
	
	
	// console.log(localStorage.getItem('temporary'));
	var goodsObj = JSON.parse(localStorage.getItem('temporary'));
	// console.log(aaa.code);
	
	var goodsStr = '';
	goodsStr = `<div class="main_center">
				<div class="showImg">
					<img src="${goodsObj.showImg01}" >
					<img src="${goodsObj.showImg02}" >
					<img src="${goodsObj.showImg03}" >
					<img src="${goodsObj.showImg04}" >
					<img src="${goodsObj.showImg05}" >
					<img src="${goodsObj.showImg06}" >
					<img src="${goodsObj.showImg07}" >
					<img src="${goodsObj.showImg08}" >
				</div>
			</div>
			<div class="main_right">
				<div class="pro_mess">
					<div class="pro_name">
						<h2>${goodsObj.type}</h2>
						<b>${goodsObj.title}</b>
					</div>
					<div class="pro_price">
						<strong>${goodsObj.price}</strong>
					</div>
				</div>
				<div class="pro_size">
					<span>选择尺码</span>
					<a href="#">尺码表</a>
					<div class="sizetable">
						<div class="row">
							<div class="col-md-3 box-click">36</div>
							<div class="col-md-3 box-click">36.5</div>
							<div class="col-md-3 box-click">37</div>
							<div class="col-md-3 box-click">37.5</div>
						</div>
						<div class="row">
							<div class="col-md-3 box-click">38</div>
							<div class="col-md-3 box-click">38.5</div>
							<div class="col-md-3 box-click">39</div>
							<div class="col-md-3 box-click">39.5</div>
						</div>
						<div class="row">
							<div class="col-md-3 box-click">40</div>
							<div class="col-md-3 box-click">40.5</div>
							<div class="col-md-3 box-click">41</div>
							<div class="col-md-3 box-click">41.5</div>
						</div>
						<div class="row">
							<div class="col-md-3 box-click">42</div>
							<div class="col-md-3 box-click">42.5</div>
							<div class="col-md-3 box-click">43</div>
							<div class="col-md-3 box-click">43.5</div>
						</div>
					</div>
					
				</div>
				
				<div class="pro_join">
					<button type="button" class="joinCar">加入购物车</button>
					<button type="button" class="collect">收藏<span class="iconfont icon-aixin"></span></button>
				</div>
				<div class="pro_introduce">
					<p>${goodsObj.introduction}</p>
					<ul>
						<li class='pro_color'>显示颜色：<span>${goodsObj.showcolor}</span></li>
						<li class='pro_code'>款式： ${goodsObj.code}</li>
					</ul>
					<a href="#">查看产品细节</a>
				</div>
				<div class="pro_filters">
					<div class="filter">
						<div class="filter-group">
							<i>免费配送和退换货</i>
							<span class="iconfont icon-jiantouxia"></span>
						</div>
						<div class="filter-item">
							<span>部分城市提供当日达、次日达服务。Nike会员或单笔订单满399普通达免运费。</span>
							<a href="#">退换货政策例外情况。</a>
						</div>
					</div>
					<div class="filter">
						<div class="filter-group">
							<i>评价</i>
							<span class="iconfont icon-jiantouxia"></span>
						</div>
						<div class="filter-item">
							
						</div>
					</div>
					<div class="filter">
						<div class="filter-group">
							<i>更多信息</i>
							<span class="iconfont icon-jiantouxia"></span>
						</div>
						<div class="filter-item">
							<span>本产品不参加任何优惠活动。部分尺码可供女士选择</span>
							
						</div>
					</div>
				</div>
			    <div class="responsive">
			    	<p>价格说明（此说明仅当出现价格比较时有效)</p>
					<p>划线价格：划线的价格可能是商品的专柜价吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。未划线价格：未划线的价格是商品在本平台上的销售标价，具体的成交价格可能因顾客使用优惠券、礼品卡等情况发生变化，最终以订单结算页价格为准。</p>
			    </div>
			</div><div class="guess">
				<p>您可能还喜欢</p>
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" ><img src="img/guess-1606302019.jpg" ><img src="img/guess-1606302020.jpg" ><img src="img/guess-1606302021.jpg" ></div>
						<div class="swiper-slide" ><img src="img/guess-1606302022.jpg" ><img src="img/guess-1606302023.jpg" ><img src="img/guess-1606302024.jpg" ></div>
						<div class="swiper-slide" ><img src="img/guess-1606302025.jpg" ><img src="img/guess-1606302026.jpg" ><img src="img/guess-1606302027.jpg" ></div>
						<div class="swiper-slide" ><img src="img/guess-1606302028.jpg" ><img src="img/guess-1606302029.jpg" ><img src="img/guess-1606302030.jpg" ></div>
				       
				    </div>
				    <!-- 如果需要分页器 -->
				   <!-- <div class="swiper-pagination"></div> -->
				    
				    <!-- 如果需要导航按钮 -->
				     <div class="swiper-button-prev"></div>
				    <div class="swiper-button-next"></div> 
				    
				    <!-- 如果需要滚动条 -->
				     <!-- <div class="swiper-scrollbar"></div> -->
				</div>
			</div>  
			<div class="footer">
				<div class="footer-content">
					<div class="footer-top">
						<ul>
							<li>电子礼品卡</li>
							<li>企业团购</li>
							<li>附近商店</li>
							<li>订阅电子邮件</li>
							<li>注册NIKE会员</li>
							<li>向我们发送反馈</li>
						</ul>
						<dl>
							<dt>获得帮助</dt>
							<dd>订单状态</dd>
							<dd>配送方式</dd>
							<dd>退换货</dd>
							<dd>付款选项</dd>
							<dd>联系我们</dd>
						</dl>
						<dl>
							<dt>关于NIKE</dt>
							<dd>新闻</dd>
							<dd>投资者</dd>
							<dd>招贤纳士</dd>
							<dd>新品预览</dd>
							
						</dl>
						<div class="contact">
							<span class="iconfont icon-weixin  bggray"></span>
							<span class="iconfont icon-weibo bggray"></span>
						</div>
					</div>
					<div class="footer-bottom">
						<div class="bottom_left">
							<i>中国大陆</i>
							<span>© 2020 Nike, Inc. 保留所有权利</span>
						</div>
						<div class="bottom_right">
							<ul>
								<li>分类浏览</li>
								<li>使用条款</li>
								<li>销售条款</li>
								<li>隐私政策</li>
								<li>沪ICP备14009339号</li>
								<li>上海工商</li>
							</ul>
						</div>
					</div>
				</div>
			</div>`;
			
	 $('.main').html(goodsStr);
	 var mySwiper = new Swiper ('.swiper-container', {
	     direction: 'horizontal', // 垂直切换选项
	     loop: true, // 循环模式选项
	     autoplay:true,
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
	   }); 
	 		 
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


//选择尺码

$('.row').on('click','.box-click',function(){
	// console.log(this);
	$.each($('.box-click'),function(i,item){
		item.style.border="1px solid #ccc";
		
	})
	this.style.border="1px solid #000";
})

//加入购物车
//先检测登录状态，如果登录拿到用户名，如果没有登录提示用户登录

//登录成功以后，检索本地存储是否为空，为空则创建本地存储，非空则检查是否存有这件产品，如果有给其num+1即可，没有则添加



$('.joinCar').on('click',function(){
	//检测是否登录
	if((localStorage.getItem('mylogin')) || (getCookie('linshi'))){

		var username = JSON.parse(localStorage.getItem('mylogin'))[0].username || getCookie('linshi');
		var code = JSON.parse(localStorage.getItem('temporary')).code;
		var pro_type = $('.pro_name h2').html();//男子篮球鞋
		var pro_name = $('.pro_name b').html();//Kyrie 7 EP
		var pro_price = $('.pro_price strong').html();//价格
		var showImg = '../'+ $('.showImg').children().eq(0).attr('src');//展示图片
		console.log(showImg);
		var pro_color = $('.pro_color span').html();
		//获取尺码
		var sum = 0;
		var pro_size;
		$.each($('.box-click'),function(i,item){
			if(item.style.border === '1px solid rgb(0, 0, 0)'){
				// console.log(item.innerHTML);
				 pro_size = item.innerHTML;
			}else{
				sum++;
			}
		})
		if(sum === $('.box-click').length){
			alert('请选择尺码');
			return
		}
		
		//拿到该条数据，判断本地的goodsCar是否存在，如果存在，再查询是否有该商品的code，如果有，num+1，如果没有，存入
		
		//本地goodsCar不存在，则创建并写入数据
		// user15193034224
		var myuser = 'user'+username;
		if(localStorage.getItem(myuser)){//如果本地有user15193034224
			
			//遍历查看是否有该产品的code
			var goodsArr = JSON.parse(localStorage.getItem(myuser));
			}else{
				//本地没有user15193034224
				var goodsArr = [];
				}
				var hascode = false;
		if(goodsArr.length>0){
				$.each(goodsArr,function(index,item){
						
						if(item.code == code){//如果查到了
							hascode = true;
							// var num = Number(goodsArr[index].num);
							item.num++;
							return false;
						}
				})
			}
			
			//遍历结束后看hascode是什么状态
			if(hascode == false){//如果没查到,即购物车里没有这件东西
				//插入该条数据
				goodsArr.push({code:code,type:pro_type,name:pro_name,price:pro_price,showImg:showImg,size:pro_size,color:pro_color,num:1})
			}
		localStorage.setItem(myuser,JSON.stringify(goodsArr));
		alert('已加入购物车');
	}else{
		alert('请先登录');
    }
})	
