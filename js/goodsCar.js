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
//首先检测登录状态 ,如果未登陆则出现登录提示框


if((localStorage.getItem('mylogin')) || (getCookie('linshi'))){
	$('.vip_login').css('display','none');
	//找到本地的user15193034224
	//获取当前的用户名
	var username = JSON.parse(localStorage.getItem('mylogin'))[0].username || getCookie('linshi');
	username = 'user' + username;
	//用该username寻找本地存储
	if(localStorage.getItem(username)){
		var goodsArr = JSON.parse(localStorage.getItem(username));
		//找到了 遍历渲染
		var goodsStr = '';
		$.each(goodsArr,function(index,item){
			
			goodsStr +=`<div class="main_center">
				<div class="vip_login">
					<p>会员可享受免费配送服务</p>
					<i>成为 Nike 会员即享免费快速配送服务。 <a href="#">立即加入</a> 或 <a href="#">登录</a></i>
				</div>
				<div class="pro_lists">
					<h2>购物车</h2>
					<div class="pro_list">
						<div class="pic">
							<img src="${item.showImg}" >
						</div>
						<div class="pro_mess">
							<p class="pro_name">${item.name}</p>
							<p class="pro_type">${item.type}</p>
							<p class="pro_color">${item.color}</p>
							<div class="pro_size">
								<p class="prosize">尺码<span class="prosizenum">${item.size}</span></p>
							</div>
							<div class="pro_num">
								<p class="pronum">数量<span class="pronum">${item.num}</span></p>
							</div>
							<div class="del">
								<span>移至收藏</span>
								<span>删除</span>
							</div>
						</div>
						<div class="pro_price">
							<span>${item.price}</span>
						</div>
						
					</div>
				</div>
			</div>
			<div class="main_right">
				
				<h2>摘要</h2>
				<div class="subtotal">
					<p class="sub-total">小计<strong>￥</strong><span></span></p>
					<p class="deal">预计配送和处理<strong>￥</strong><span>0</span></p>
				</div>
				<div class="total">
					<p class="total_price">总计<strong>￥</strong><span></span></p>
				</div>
				<button type="button" class="jiesuan">结算</button>
			</div>`
		})
		$('.main').html(goodsStr);
	}else{
		
	}
}else{
	$('.vip_login').css('display','block');
}