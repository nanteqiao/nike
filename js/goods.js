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
						<li>显示颜色：${goodsObj.showcolor}</li>
						<li>款式： ${goodsObj.code}</li>
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
	