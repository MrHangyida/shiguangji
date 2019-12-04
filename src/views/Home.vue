<template>
	<div class="wrap">
		<full-page :options="options" ref="page">
			<!--      第一屏-->
			<div class="section">
				<div class="box1">
					<img src="../store/imges/bannner.png" alt="">
				</div>
			</div>
			<!-- 第四屏 -->
			<div class="section">
				<div class="box4">
					<div class="box4_4" v-if="box4===1">
						<div class="handphone animated fadeInDownBig">
							<div class="hand1" v-if="hand1flag">
								<div class="tophand"></div>
								<div class="handlist animated fadeInDownBig" >
									<div class="handleft"></div>
									<div class="handright">
										<span class="handlong"></span>
										<span class="handshot"></span>
									</div>
								</div>
								<div class="handlist one animated fadeInDownBig">
									<div class="handleft"></div>
									<div class="handright">
										<span class="handlong"></span>
										<span class="handshot"></span>
									</div>
								</div>
								<div class="handlist two animated fadeInDownBig">
									<div class="handleft"></div>
									<div class="handright">
										<span class="handlong"></span>
										<span class="handshot"></span>
									</div>
								</div>
								<p class="activeP3 animated fadeInDownBig" style="animation-duration: 2s">一键发送</p>
								<div class="handtype1 animated fadeInLeft" style="animation-duration: 2s">
									<p><img src="../store/imges/type1.png" alt=""></p>
									<p style="line-height:140px"><img src="../store/imges/type1_1.png" alt=""></p>
								</div>
								<div class="handtype2 animated fadeInLeft">
									<p><img src="../store/imges/type2.png" alt=""></p>
									<p><img src="../store/imges/type2_2.png" alt="" ></p>
								</div>
								<div class="handtype3 animated fadeInDownBig">
									<p><img src="../store/imges/type3.png" alt=""></p>
									<p><img src="../store/imges/type3_3.png" alt=""></p>
								</div>
								<div class="handtype4 animated fadeInRight">
									<p><img src="../store/imges/type4.png" alt=""></p>
									<p><img src="../store/imges/type4_4.png" alt=""></p>
									<p><img src="../store/imges/type4_4_4.png" alt=""></p>
								</div>
								<div class="handtype5 animated fadeInRight">
									<p><img src="../store/imges/type5_5.png" alt=""></p>
									<p><img src="../store/imges/type5.png" alt=""></p>
								</div>
								<div class="cursor animated slideInUp" style="animation-duration: 2s;animation-delay:1s">
										<img src="../store/imges/shouzhi.png" alt="">
								</div>
							</div>
						</div>
						<div class="computer wenzi2 animated" :class="box4===1 ? 'fadeInDownBig':''"  style="animation-duration: 3s" v-if="box4===1">
							老师可以在微信小程序上快捷的发送课程提醒，照片、视频、通知、作业等内容给家长
						</div>
					</div>
					<!-- box4===2 -->
					<div class="handphone2 animated fadeInDownBig" v-if="box4===2" >
						<div class="hand2">
							<img src="../store/imges/1_1.png" alt="" v-if="hand2flag1">
							<img src="../store/imges/2_2.png" alt="" v-if="hand2flag2">
							<img src="../store/imges/3_3.jpg" alt="" v-if="hand2flag3">
							<img src="../store/imges/4_4.png" alt="" v-if="hand2flag4">
						</div>
						<div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag1">
							<img src="../store/imges/shouzhi.png" alt="">
						</div>
							<div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag1">
								<img src="../store/imges/shouzhi.png" alt="">
							</div>
							<div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag2">
								<img src="../store/imges/shouzhi.png" alt="">
							</div>
							<div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag3">
								<img src="../store/imges/shouzhi.png" alt="">
							</div>
							<div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag4">
								<img src="../store/imges/shouzhi.png" alt="">
							</div>
					</div>
					
				</div>
			</div>
			<!--      第二屏-->
			<div class="section">
				<div class="box3">
				 <div class="box3_1" v-if="showtwo">
					<div class="computerimg animated" :class="showlitilecomputer ? 'fadeOutUp':''"  style="animation-duration: 3s"  v-if="computerimgFlag">
						<div class="computeringWrap">
							<div class="leftdiv"></div>
							<div class="rightdiv" >
								<p class="grid-content bg-purple animated" :class="num==1 ? 'fadeInUp':''" v-show="a1">活动名称：小小演说家培养课</p>
								<p class="grid-content bg-purple animated" :class="num==2 ? 'fadeInUp':''" v-show="a2">活动时间：xx年xx月xx日14:00</p>
								<p class="grid-content bg-purple animated" :class="num==3 ? 'fadeInUp':''" v-show="a3">活动地点：漂亮广场d2 2501</p>
								<p class="grid-content bg-purple animated" :class="num==4 ? 'fadeInUp':''" v-show="a4">适合年龄段：7-10岁喜欢演讲的小朋友</p>
							</div>
							<div class="activediv">
								<div class="activecontent animated" :class="num==5 ? 'fadeInUp':''" v-show="a5">
									<p>活动内容 : </p>
								</div>
								<div class="activelinediv">
									<span class="activeline animated" :class="num==5 ? 'fadeInUp':''" v-show="a5"></span>
									<span class="activeline animated" :class="num==6 ? 'fadeInUp':''" v-show="a6"></span>
									<span class="activeline animated" :class="num==7 ? 'fadeInUp':''" v-show="a7"></span>
									<span class="activeline animated" :class="num==8 ? 'fadeInUp':''" v-show="a8"></span>
								</div>
								<div class="activebtn"  :class="num==8 ? 'fadeInUp':''" v-show="a8" >一键发布</div> 
								<div class="subiao animated " :class="showdian==true ? 'rotateInUpRight':''" v-show="showdian"><img src="../store/imges/鼠标.png" alt=""></div>
							</div>
						</div>
						<div class="computerWenzi animated" :class="showlitilecomputer ? 'fadeOutUp':''" v-if="!showbigphone">
							老师可以发送最新的活动、课程信息，让更多周边家长了解到活动和课程特色、优势；自动接收订单，生意不用愁
						</div>
					</div>
					<div class="computerWenjian" v-if="showlitilecomputer" :class="showlitilecomputer ? 'fadeInRight':(showbigphone ? 'bounceOut':'')">
						 <div class="litelcomputer">
							 <img src="../store/imges/litilecomputer.png"  alt="">
							<div class="wenjian animated rotateOutUpRight infinite" >
								<img src="../store/imges/wenjianjia5.png" class=" " alt="">
							</div>
							 <div class="computerwifi">
								<img src="../store/imges/WiFi.png" alt="" class="animated bounceIn infinite">
							</div>
						 </div>
						<div class="phone animated fadeInRight">
						  <img class="wifiing animated bounceIn infinite " src="../store/imges/WiFi.png" alt="">
						<div class="phoneing"></div>
						<p class="activeP">新的活动通知</p>
						</div> 
					</div>
					<div v-if="showbigphone" class="bigphone animated fadeInDownBig">
						<img src="../store/imges/bigphone.png" alt="">
						<div class="phoneing1"></div>
						<div class="phonecontent">
							<p class="grid-content">活动时间：xx年xx月xx日14:00</p>
							<p class="grid-conten">活动地点：漂亮广场d2 2501</p>
							<p class="grid-content">适合年龄段：7-10岁喜欢演讲的小朋友</p>
						</div>
						<p class="activeP1">立即报名</p>
					</div>
				 </div>
			  </div>
			</div>

			<!-- 第三屏 -->
			<div class="section">
				<div class="box2">
					<div class="box2_2">
						<div class="one1"></div>
						<div class="tow2">
							<p class="myP">时光机</p>
						</div>
						<div class="three3">
							<div class="center_conten">
								<div class="center_contenTop">
									<p>
										<img src="../store/imges/头像.png" align="left" width="174" hspace="" vspace="5" />
									</p>
									<div :class="assc==1 ? 'dowebok':''" class="myinforList animated lightSpeedIn" v-show="assc==1" v-if="true">
										<div class="myinfor">
											<p>
												<span class="d1 animated lightSpeedIn">姓名: 张大宝</span>
												<span class="d2 animated lightSpeedIn">家庭住址: 北京</span>
											</p>
											<p>
												<span class="d3 animated lightSpeedIn">性别: 男 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
												<span class="d4 animated lightSpeedIn">妈妈姓名: 张晓丽</span>
											</p>
											<p>
												<span class="d5 animated lightSpeedIn">年级: 4年级&nbsp;</span>
												<span class="d6 animated lightSpeedIn">爸爸姓名: 张大柱</span>
											</p>
										</div>
									</div>
									<!-- <div v-if="twos==1" class="mylineList">
										<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
										<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
										<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
										<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
										<div class="myline2" v-if="twos==1">
											<div class="son1 animated fadeInUp ">
												<div class="jin1" :style="{height:time1+'px'}"></div>
												<div class="jin2" :style="{height:time2+'px',left:'35px'}"></div>
												<div class="jin3" :style="{height:time3+'px',left:'68px'}"></div>
												<div class="jin4" :style="{height:time4+'px',left:'101px'}"></div>
											</div>
											<div class="son2 animated fadeInUp ">
												<div class="jin1" :style="{height:time4+'px'}"></div>
												<div class="jin2" :style="{height:time1+'px',left:'35px'}"></div>
												<div class="jin3" :style="{height:time3+'px',left:'68px'}"></div>
												<div class="jin4" :style="{height:time2+'px',left:'101px'}"></div>
											</div>
											<div class="son3 animated fadeInUp">
												<div class="jin1" :style="{height:time3+'px'}"></div>
												<div class="jin2" :style="{height:time4+'px',left:'35px'}"></div>
												<div class="jin3" :style="{height:time1+'px',left:'68px'}"></div>
												<div class="jin4" :style="{height:time2+'px',left:'101px'}"></div>
											</div>
										</div>
									</div> -->
								</div>
								<div class="center_contenBottom animated lightSpeedIn" :class="assc==1 ? 'dowebok':''" v-show="assc==1" v-if="true">
									<el-row :gutter="20" >
										<el-col :span="6">
											<div class="grid-content bg-purple">活动名称</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">素养类型</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">活动得分</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">老师评价</div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="6">
											<div class="grid-content bg-purple">爱国活动宣讲</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">思想品德</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">优</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">值得鼓励</div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="6">
											<div class="grid-content bg-purple">英语口语演讲</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">学习能力</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">良</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">有待进步</div>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="6">
											<div class="grid-content bg-purple">体操练习</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">篮球校队</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">优</div>
										</el-col>
										<el-col :span="6">
											<div class="grid-content bg-purple">可圈可点</div>
										</el-col>
									</el-row>
								</div>
								<!-- <div class="title" v-if="twos==1">
									<p>张大宝</p>
									<p>四年级</p>
								</div> -->
								<div v-if="true" class="selecte_btn">
									一键分析
								</div>
								<div v-if="true" v-show="assc==1" class="dowebok shouzhi animated" id="dongshou" :class="assc==1 ? 'rotateInUpRight':''"><img
									src="../store/imges/header.png" alt="" width="155" hspace="5" vspace="5">
								</div>
								<!-- <div v-if="twos==1" class="center_contenContent">
									<div class="contetLeft animated">
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" style="width: 158px;" :class="twos==1 ? 'bounceInLeft':''"></span>
									</div>
									<div class="content_content">
										<div class="animated" :class="twos==1 ? 'bounceInUp':''"><img src="../store/imges/10.png" alt=""></div>
									</div>
									<div class="contetLeft">
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" style="width: 158px;" :class="twos==1 ? 'bounceInRight':''"></span>
									</div>
								</div> -->
							</div>
						</div>
						<div class="wenzi3 animated lightSpeedIn">
							以中考、高考为指导的孩子综合素质评价指标
						</div>
					</div>
				</div>
			</div>

			<!-- 第五屏 关于我们-->
			<div class="section">
				<div class="box5">
					section5
				</div>
			</div>


		</full-page>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
				computerimgFlag:false,
				showbigphone:false,
				showlitilecomputer:false,
				showdian:false,
				settimeou:"",
				showtwo:false,
				a1: false,
				a2: false,
				a3: false,
				a4: false,
				a5: false,
				a6: false,
				a7: false,
				a8: false,
				num: 0,
				assc: 0,
				twos: 0,
				time1: 0,
				time2: 5,
				time3: 3,
				time4: 10,
				box4:0,
				hand1flag:false,
				hand2flag1:false,
				hand2flag2:false,
				hand2flag3:false,
				hand2flag4:false,
				hand2:false,
				options: {

					//           //为每个section设置背景色
					//           sectionsColor: ["#f00","#0f0","#00f"],
					// //用来控制slide幻灯片的箭头，设置为false，两侧的箭头会消失
					controlArrows: false,
					// //每一页幻灯片的内容是否垂直居中
					verticalCentered: false,
					// //字体是否随着窗口缩放而缩放
					resize: true,
					// //页面滚动速度
					//           scrollingSpeed: 700,
					// //定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
					//           anchors: ["page1","page2","page3"],
					// //是否锁定锚链接
					lockAnchors: true,
					// //定义section页面的滚动方式，需要引入jquery.easings插件
					//           easing:,
					// //是否使用css3 transform来实现滚动效果
					css3: false,
					// //滚动到最顶部后是否连续滚动到底部
					//           loopTop: true,
					// //滚动到最底部后是否连续滚动到顶部
					loopBottom: false,
					// //横向slide幻灯片是否循环滚动
					//           loopHorizontal: false,
					// //是否循环滚动，不会出现跳动，效果很平滑
					//           continuousVertical: true,
					// //是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
					//           autoScrolling: false,
					// //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
					//           scrollBar: true,
					// //设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
					//           paddingTop: "100px",
					// //设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
					//           paddingBottom: "100px",
					// //固定的元素，为jquery选择器；可用于顶部导航等
					//           fixedElements: ".nav",
					// //是否可以使用键盘方向键导航
					//           keyboardScrolling: false,
					// //在移动设置中页面敏感性，最大为100，越大越难滑动
					//           touchSensitivity: 5,
					// //设为false，则通过锚链接定位到某个页面不再有动画效果
					//           animateAnchor: false,
					// //是否记录历史，可以通过浏览器的前进后退来导航
					//           recordHistory: true,
					// //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
					//           menu: '.nav',
					// //是否显示导航，设为true会显示小圆点作为导航
					//           navigation: true,
					// //导航小圆点的位置，可以设置为left或者right
					//           navigationPosition: right,
					// //鼠标移动到小圆点上时显示出的提示信息
					//           navigationTooltips: ["第一页","第二页","第三页"],
					// //是否显示当前页面小圆点导航的提示信息，不需要鼠标移上
					//           showActiveTooltip: true,
					// //是否显示横向幻灯片的导航
					//           slidesNavigation: true,
					// //横向幻灯片导航的位置，可以为top或者bottom
					//           slidesNavPosition: bottom,
					// //内容超过满屏时是否显示滚动条，需要jquery.slimscroll插件
					//           scrollOverflow: true,
					// //section选择器
					//           sectionSelector: ".section",
					// //slide选择器
					//           slideSelector: ".slide"


					licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
					afterLoad: this.afterLoad,
					scrollOverflow: true,
					navigation: true, //是否显示导航，默认为false
					// navigationPosition: 'bottom',//导航小圆点的位置
					scrollBar: false,
					keyboardScrolling: true, //是否可以使用键盘方向键导航，默认为true
					continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
					menu: '#menu',
					// navigation: true,
					// anchors: ['page0', 'page1', 'page2',"page3","page4"],
					sectionsColor: ['#F1F1F1', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#1bcee6', ]
				}
			}
		},
		methods: {
			click() {
				// vue调用fullpapge的方法
				this.$refs.page.api.moveSectionDown();
				// moveSectionDown();
			},
			afterLoad(link, td) {
				if (td.index == 3) {
					this.assc = 1;
					this.showtwo = false;
					this.showbigphone=false;
					this.a1 = false;
					this.a2 = false;
					this.a3 = false;
					this.a4 = false;
					this.a5 = false;
					this.a6 = false;
					this.a7 = false;
					this.a8 = false;
					this.showdian = false;
					this.showlitilecomputer = false;
					this.box4=0;
					this.hand2flag1=false;
					this.hand2flag2=false;
					this.hand2flag3=false;
					this.hand2flag4=false;
					var that = this;
					setTimeout(function() {
						that.twos = 1
						that.jindu();
						that.jindu1();
						that.jindu2();
						that.jindu3();
					}, 6500)
					clearInterval(this.settimeou);
				} else if (td.index == 2) {
					this.assc = 0;
					this.time1 = 0;
					this.time3 = 0;
					this.time4 = 0;
					this.twos = 0;
					this.num = 0;
					this.box4=0;
					this.hand2flag1=false;
					this.hand2flag2=false;
					this.hand2flag3=false;
					this.hand2flag4=false;
					var that = this;
					this.$nextTick(function(){
						that.showtwo = true;
						that.computerimgFlag = true;
						this.settimeou = setInterval(function() {
							that.num++;
							if (that.num == 1) {
								that.a1 = true;
							} else if (that.num == 2) {
								that.a2 = true;
							} else if (that.num == 3) {
								that.a3 = true;
							} else if (that.num == 4) {
								that.a4 = true;
							}else if (that.num == 5) {
								that.a5 = true;
							}else if (that.num == 6) {
								that.a6 = true;
							}else if (that.num == 7) {
								that.a7 = true;
							}else if (that.num == 8) {
								that.a8 = true;
							}
							if (that.num > 8) {
								clearInterval(that.settimeou)
								that.showdian = true
								var settimeout = setTimeout(function(){
									that.computerimgFlag = false;
									that.showlitilecomputer = true
									var settimeout = setTimeout(function(){
										that.showlitilecomputer = false
										 that.showbigphone = true
									},8000)
									
								},2000)
							}
						}, 1000)
					})
						
				} else if(td.index == 1) {
					this.box4=1;
					this.hand1flag=true;
					this.hand2flag1=false;
					this.hand2flag2=false;
					this.hand2flag3=false;
					var that=this;
					var hand1SetTime=setTimeout(function(){
							that.box4=2;
							that.hand2flag1=true;
							that.hand2flag2=false;
							that.hand2flag3=false;
							that.hand2flag4=false;
							clearTimeout(hand1SetTime)
							var hand1SetTime=setTimeout(function(){
								that.hand2flag1=false;
								that.hand2flag4=false;
								that.hand2flag3=false;
								that.hand2flag2=true;
								clearTimeout(hand1SetTime)
								var hand1SetTime=setTimeout(function(){
									that.hand2flag1=false;
									that.hand2flag2=false;
									that.hand2flag4=false;
									that.hand2flag3=true;
									clearTimeout(hand1SetTime)
									var hand1SetTime=setTimeout(function(){
										that.hand2flag1=false;
										that.hand2flag2=false;
										that.hand2flag3=false;
										that.hand2flag4=true;
										console.log(that.hand2flag1,that.hand2flag2,that.hand2flag3,that.hand2flag4)
										clearTimeout(hand1SetTime)
									},4000)
								},4000)
							},4000)
					},4000)
					this.showtwo = false
					clearInterval(this.settimeou)
					this.showbigphone=false
					this.a1 = false
					this.a2 = false
					this.a3 = false
					this.a4 = false
					this.a5 = false
					this.a6 = false
					this.a7 = false
					this.a8 = false
					this.showdian = false
					this.showlitilecomputer = false
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
				}else if(td.index == 4){
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
					this.showtwo = false
					this.box4=false;
					this.hand2flag1=false;
					this.hand2flag2=false;
					this.hand2flag3=false;
					this.hand2flag4=false;
					clearInterval(this.settimeou)
					this.showbigphone=false
					this.a1 = false
					this.a2 = false
					this.a3 = false
					this.a4 = false
					this.a5 = false
					this.a6 = false
					this.a7 = false
					this.a8 = false
					this.showdian = false
					this.showlitilecomputer = false
				}else{
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
					this.showtwo = false
					this.box4=false
					this.hand2flag1=false;
					this.hand2flag2=false;
					this.hand2flag3=false;
					this.hand2flag4=false;
					clearInterval(this.settimeou)
					this.showbigphone=false
					this.a1 = false
					this.a2 = false
					this.a3 = false
					this.a4 = false
					this.a5 = false
					this.a6 = false
					this.a7 = false
					this.a8 = false
					this.showdian = false
					this.showlitilecomputer = false
				}

			},
			jindu() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time1++
					if (that.time1 > 193) {
						clearInterval(settime)
					}
				}, 10)


			},
			jindu1() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time2++
					if (that.time1 > 150) {
						clearInterval(settime)
					}
				}, 15)


			},
			jindu2() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time3++
					if (that.time1 > 89) {
						clearInterval(settime)
					}
				}, 25)


			},
			jindu3() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time4++
					if (that.time1 > 100) {
						clearInterval(settime)
					}
				}, 35)


			},

			// /向上滚动一页
			// moveSectionUp();
			// //向下滚动一页
			// moveSectionDown();
			// //滚动到第几页，第几个幻灯片；页面从1计算，幻灯片从0计算
			// moveTo(wection,slide);
			// //和moveTo一样，但是没有动画效果
			// silentMoveTo(section,slide);
			// //幻灯片向右滚动
			// moveSlideRight();
			// //幻灯片向左滚动
			// moveSlideLeft();
			// //动态设置autoScrolling配置项
			// setAutoScrolling(boolean);
			// //动态设置lockAnchors配置项
			// setLockAnchors(boolean);
			// //动态设置recordHistory配置项
			// setRecordHistory(boolean);
			// //动态设置scrollingSpeed配置项
			// setScrollingSpeed(milliseconds);
			// //添加或删除鼠标/滑动控制，第一个参数为启用、禁用；第二个参数为方向，取值包含all、up、dowm、left、right，可以使用多个，逗号分隔
			// setAllowScrolling(boolean,[directions]);
			// //销毁fullpage特效，不写type，fullpage给页面添加的样式和html元素还在；如果使用all，则样式和html等全部被销毁
			// destroy(type);
			// //重新更新页面和尺寸，用于通过ajax请求后改变了页面结构之后，重建效果
			// reBuild();



		},
	}
</script>
<!-- rotateInUpRight -->
<style scoped lang="scss">
	.fp-scroller{
		height: 100% !important;
	}
	
	.wrap{
		width: 100%;
		height: 100%;
		.section{
			width: 100%;
			height: 100%;
			.box1{
				width: 100%;
				height: 100%;
				>img{
					width: 100%;
					height: 100%;
				}
			}
			.box2{
				width: 100%;
				height: 100%;
				.box2_2 {
					width: 602px;
					height: 390px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
					border: 6.35px solid #F2819C;
					border-radius: 45px;
					position: relative;
					top: 49px;
					.one1 {
						height: 31px;
						background-color: #F2819C;
						background: orange;
						border-top-left-radius: 22.5px;
						border-top-right-radius: 22.5px;
					}
					.tow2 {
						height: 40px;
						background-color: #68C6FB;
						margin: 5.5px 0 8.5px 0;
						padding-left: 43.5;
						box-sizing: border-box;
						.myP {
							color: #FCFCFB;
							text-align: left;
							padding: 58px 0 28px 70px;
							box-sizing: border-box;
							font-size: 60px;
						}
					}
					.three3 {
						flex: 1;
						width: 95.3%;
						margin-left: 2.5%;
						background-color: #C2E9FF;
						margin-bottom: 50px;
						border-radius: 10px;
						.center_conten {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							padding-top: 53px;
							box-sizing: border-box;
							position: relative;
							.selecte_btn{
								width: 500px;
								height: 86px;
								text-align: center;
								line-height: 86px;
								background-color: #FAB25B !important;
								color: #FFFEFE;
								font-size: 33px;
								margin: 10px 0 50px 32%;
								border: 0;
								border-radius: 10px;
							}
							.shouzhi {
								position: absolute;
								bottom: -360px;
								left: 850px;
								bottom: -35%;
								left: 45%;
								z-index: 1;
							}
							.center_contenTop{
								flex: 1;
								padding: 0px 5% 0 10%;
								box-sizing: border-box;
								// height: 399px;
								display: flex;
								>p{
									width: 87px;
									height: 93.5px;
									img{
										width: 100%;
									}
								}
								.myinforList{
									flex: 1;
									height: 300px;
									.myinfor {
										width: 100%;
										height: 100%;
										text-align: left;
										margin-left: 5%;
										p{
											margin-bottom: 40px;
										}
									}
									.myinfor span {
										font-size:48px;
										color: #FFFEFE;
										margin-left: 40px;
									}
								}
								.mylineList{
									position: relative;
									.myline {
										// width: 65%;
										padding: 30px 0;
										box-sizing: border-box;
										margin-left: 80px;
										position: relative;
										>img{
											width: 100%;
										}
										
									}
									.myline2 {
											width: 90%;
											height: 4px;
											position: absolute;
											border-top: 4px solid #EBECEE;
											top: 82%;
											left:7%;
											// margin-left: 257px;
											// margin-top: 26px;
											// margin-bottom: 20px;
											.son1 {
												position: relative;
												bottom: 10px;
												left: 20px;
												animation-duration: 10s;
												animation-delay: 4s;
											}
											.son1 div {
												position: absolute;
												width: 46px;
												float: left;
												margin-right: 10px;
												bottom: -5px;
											}
											.son2 {
												animation-duration: 10s;
												animation-delay: 6s;
												position: relative;
												bottom: 10px;
												left: 350px;
											}
											.son2 div {
												position: absolute;
												width: 46px;
												height: 28px;
												float: left;
												bottom: -5px;
												margin-right: 10px;
											}
											.son3 {
												animation-duration: 10s;
												animation-delay: 8s;
												position: relative;
												bottom: 10px;
												left: 680px;
											}
											.son3 div {
												position: absolute;
												width: 46px;
												height: 28px;
												bottom: -5px;
												float: left;
												margin-right: 10px;
											}
											.jin1 {
												background-color: #67B2D1;
											}
											.jin2 {
												background-color: #FFFFD3;
											}
											.jin3 {
												background-color: #F3D3FF;
											}
											.jin4 {
												background-color: #EE5F57;
											}
										}
								}
							}
							.center_contenBottom{
								flex: 1;
								padding: 0px 10% 0 10%;
								box-sizing: border-box;
								.el-row {
									line-height: 88px;
									border-bottom: 1px solid #FFFFFF;
									font-size: 30px;
									color: #FFFEFE;
									overflow:hidden;
								}
								.el-row:first-child{
									font-size: 40px;
								}
							}
							.center_contenContent{
								flex: 1;
								width: 100%;
								display: flex;
								margin-left: 30%;
								.content_content{
									margin: 0 20px 0 40px;
									width: 6%;
								}
								.contetLeft{
									.buleline {
										animation-duration: 10s;
										display: block;
										width: 400px;
										margin-bottom: 15px;
										height: 20px;
										background-color: #6086D1;
									}
								}
								
							}
							.title {
								width: 177px;
								height: 50px;
								position: absolute;
								top: 450px;
								left: 220px;
								text-align: center;
								color: #6086D1;
								font-size: 30px;
							}
						}
						.dowebok {
							animation-duration: 3s;
							animation-delay: 1s;
							animation-iteration-count: 1;
						}
					}
					.wenzi3{
						position: absolute;
						bottom: -130px;
						left: 30%;
						font-size: 42px;
					}
				}
				
				// @media screen and (max-width: 1366px){
				// 	.box2_2 {
				// 		width: 58%;
				// 		height: 82%;
				// 		margin: 0 auto;
				// 		border: 4px solid #F2819C;
				// 		border-radius: 30px;
				// 		position: relative;
				// 		top: 60px;
				// 		display: flex;
				// 		flex-direction: column;
				// 		.one1 {
				// 			height: 40px;
				// 			background-color: #F2819C;
				// 			border-top-left-radius: 23px;
				// 			border-top-right-radius: 23px;
				// 		}
				// 		.tow2 {
				// 			height: 13%;
				// 			background-color: #68C6FB;
				// 			margin: 10px 0;
				// 			.myP {
				// 				color: #FCFCFB;
				// 				text-align: left;
				// 				font-size: 24px;
				// 				padding: 14px 0 14px 35px;
				// 				box-sizing: border-box;
				// 			}
				// 		}
				// 		.three3 {
				// 			flex: 1;
				// 			width: 95%;
				// 			margin-left: 2.5%;
				// 			background-color: #C2E9FF;
				// 			margin-bottom: 10px;
				// 			border-radius: 10px;
				// 			.center_conten {
				// 				width: 100%;
				// 				height: 100%;
				// 				display: flex;
				// 				flex-direction: column;
				// 				padding-top: 24px;
				// 				box-sizing: border-box;
				// 				position: relative;
				// 				.selecte_btn{
				// 					width: 296px;
				// 					height: 30px;
				// 					text-align: center;
				// 					line-height: 30px;
				// 					background-color: #FAB25B !important;
				// 					color: #FFFEFE;
				// 					margin: 10px 0 10px 32%;
				// 					border: 0;
				// 					border-radius: 5px;
				// 					font-size: 18px;
				// 				}
				// 				.shouzhi {
				// 					width: 100px;
				// 					position: absolute;
				// 					// bottom: -230px;
				// 					// left: 480px;
				// 					left: 380px;
				// 					bottom: -150px;
				// 					z-index: 1;
				// 					>img{
				// 						width: 100%;
				// 					}
				// 				}
				// 				.center_contenTop{
				// 					flex: 1;
				// 					// height: 113px;
				// 					display: flex;
				// 					padding: 0px 5% 0 10%;
				// 					box-sizing: border-box;
				// 					flex-shrink: 0;
				// 					>p{
				// 						width: 105px;
				// 						height: 113px;
				// 						flex-shrink: 0;
				// 						>img{
				// 							width: 100%;
				// 							height: 100%;
				// 						}
				// 					}
				// 					.myinforList{
				// 						flex: 1;
				// 						height: 113px;
				// 						.myinfor {
				// 							width: 100%;
				// 							text-align: left;
				// 							height: 113px;
				// 							margin-left: 5%;
				// 						}
				// 						.myinfor span {
				// 							font-size:18px;
				// 							color: #FFFEFE;
				// 							margin-left: 70px;
				// 						}
				// 					}
				// 					.mylineList{
				// 						position: relative;
				// 						.myline {
				// 							// width: 65%;
				// 							padding: 10px 0;
				// 							box-sizing: border-box;
				// 							margin-left: 30px;
				// 							position: relative;
				// 							>img{
				// 								width: 100%;
				// 							}
											
				// 						}
				// 						.myline2 {
				// 								width: 100%;
				// 								height: 4px;
				// 								position: absolute;
				// 								border-top: 4px solid #EBECEE;
				// 								top: 83%;
				// 								left: 5%;
				// 								// margin-left: 257px;
				// 								// margin-top: 26px;
				// 								// margin-bottom: 20px;
				// 								.son1 {
				// 									position: relative;
				// 									bottom: 10px;
				// 									left: 20px;
				// 									animation-duration: 10s;
				// 									animation-delay: 4s;
				// 								}
				// 								.son1 div {
				// 									position: absolute;
				// 									width: 18px;
				// 									float: left;
				// 									margin-right: 10px;
				// 									bottom: -5px;
				// 								}
				// 								.son2 {
				// 									animation-duration: 10s;
				// 									animation-delay: 6s;
				// 									position: relative;
				// 									bottom: 10px;
				// 									left: 187px;
				// 								}
				// 								.son2 div {
				// 									position: absolute;
				// 									width: 18px;
				// 									height: 28px;
				// 									float: left;
				// 									bottom: -5px;
				// 									margin-right: 10px;
				// 								}
				// 								.son3 {
				// 									animation-duration: 10s;
				// 									animation-delay: 8s;
				// 									position: relative;
				// 									bottom: 10px;
				// 									left: 346px;
				// 								}
				// 								.son3 div {
				// 									position: absolute;
				// 									width: 18px;
				// 									height: 28px;
				// 									bottom: -5px;
				// 									float: left;
				// 									margin-right: 10px;
				// 								}
				// 								.jin1 {
				// 									background-color: #67B2D1;
				// 								}
				// 								.jin2 {
				// 									background-color: #FFFFD3;
				// 								}
				// 								.jin3 {
				// 									background-color: #F3D3FF;
				// 								}
				// 								.jin4 {
				// 									background-color: #EE5F57;
				// 								}
				// 							}
				// 					}
				// 				}
				// 				.center_contenBottom{
				// 					flex: 1;
				// 					padding: 0px 10% 0 10%;
				// 					box-sizing: border-box;
				// 					.el-row:first-child{
				// 						font-size: 24px;
				// 					}
				// 					.el-row {
				// 						line-height: 34px;
				// 						border-bottom: 1px solid #FFFFFF;
				// 						font-size: 18px;
				// 						color: #FFFEFE;
				// 						overflow:hidden;
				// 					}
				// 				}
				// 				.center_contenContent{
				// 					width: 100%;
				// 					display: flex;
				// 					margin-left: 35%;
				// 					.content_content{
				// 						margin: 0 20px 0 10px;
				// 						width: 6%;
				// 					}
				// 					.contetLeft{
				// 						.buleline {
				// 							animation-duration: 10s;
				// 							display: block;
				// 							width: 169px;
				// 							margin-bottom: 15px;
				// 							height: 6px;
				// 							background-color: #6086D1;
				// 						}
				// 					}
									
				// 				}
				// 				.title {
				// 					width: 113px;
				// 					height: 50px;
				// 					position: absolute;
				// 					top: 155px;
				// 					left: 70px;
				// 					text-align: center;
				// 					color: #6086D1;
				// 					font-size: 24px;
				// 				}
				// 			}
				// 			.dowebok {
				// 				animation-duration: 3s;
				// 				animation-delay: 1s;
				// 				animation-iteration-count: 1;
				// 			}
				// 		}
				// 		.wenzi3{
				// 			position: absolute;
				// 			bottom: -35px;
				// 			left: 32%;
				// 			font-size: 14px;
				// 		}
				// 	}
				// }
			}
			.box3{
				width: 100%;
				height: 100%;
				.box3_1{
					width: 100%;
					height: 100%;
					.computerimg {
						height:100%;
						position: relative;
						.computeringWrap{
							width: 614px;
							height: 511px;
							position: absolute;
							background: url(../store/imges/computer.png) no-repeat;
							background-size: 100%;
							// top: 18%;
							// left: 20%;
							top: 284px;
							left: 329px;
							.leftdiv {
								width: 110px;
								height: 110px;
								position: absolute;
								top: 53px;
								left: 85px;
								// top: 10%;
								// left: 15%;
								background-color: #999999;
							}
							.rightdiv {
								position: absolute;
								float: left;
								top: 10%;
								left: 45%;
								// margin-top: 58px;
								// margin-left: 244px;
								>p {
									text-align: left;
									font-size: 16px;
									color: #ffffff;
									margin: 0;
									line-height: 35px;
								}
							}
							.activediv {
								width: 614px;
								height: 255px;
								display: flex;
								flex-direction: column;
								position: absolute;
								top: 40%;
								left: 15%;
								.activecontent {
									position: absolute;
									>p {
										margin: 0;
										font-size: 16px;
										color: #FDFDFD;
									}
								}
								.activelinediv {
									margin-top: 9px;
									margin-left: 20%;
									.activeline {
										display: block;
										width: 349px;
										height: 8px;
										border-radius: 5px;
										background-color: #B8FEFF;
										margin-bottom: 15px;
									}
								}
								.activebtn {
									text-align: center;
									position: absolute;
									width: 296px;
									line-height: 41px;
									top: 40%;
									left: 20%;
									border-radius: 13px;
									color: #FFFEFE;
									background-color: #FAB25B;
								}
								.subiao img {
									position: absolute;
									width: 28px;
									height: 28px;
									left: 45%;
									top: 20px;
								}
							}
						}
						@media screen and (max-width: 1366px) {
						.computeringWrap {
							position: absolute;
							background-size: 80%;
							top: 18%;
							left: 229px;
							.leftdiv {
								width: 82px;
								height: 82px;
								top: 10%;
								left: 10%;
							}
							.rightdiv {
								position: absolute;
								float: left;
								top: 10%;
								left: 30%;
								// margin-top: 58px;
								// margin-left: 244px;
								>p {
									text-align: left;
									font-size: 14px;
									color: #ffffff;
									margin: 0;
									line-height: 25px;
								}
							}
							.activediv {
								width: 614px;
								height: 255px;
								display: flex;
								flex-direction: column;
								position: absolute;
								top: 30%;
								left: 10%;
								.activecontent {
									position: absolute;
									>p {
										font-size: 14px;
										color: #FDFDFD;
									}
								}
								.activelinediv {
									margin-top: 9px;
									margin-left: 20%;
									.activeline {
										display: block;
										width: 230px;
										height: 6px;
										border-radius: 4px;
										background-color: #B8FEFF;
										margin-bottom: 10px;
									}
								}
								.activebtn {
									text-align: center;
									position: absolute;
									width: 230px;
									line-height: 31px;
									top: 35%;
									left: 20%;
									border-radius: 13px;
									color: #FFFEFE;
									background-color: #FAB25B;
									font-size: 14px;
								}
								.subiao img {
									position: absolute;
									width: 28px;
									height: 28px;
									left: 40%;
									top: 30px;
								}
							}
						}
					}
						.computerWenzi{
							position: absolute;
							width: 310px;
							left: 68%;
							top: 45%;
							animation-duration: 3s
						}
						@media screen and(max-width:1366px){
							.computerWenzi{
								position: absolute;
								width: 260px;
								left: 60%;
								top: 40%;
								font-size: 14px;
								animation-duration: 3s
							}
						}
					}
					.computerWenjian{
						width: 100%;
						height: 100%;
						position: relative;
						animation-duration: 5s;
						.litelcomputer{
							width: 446px;
							height: 371px;
							position: absolute;
							top: 45%;
							left: 20%;
							>img{
								width: 100%;
								height: 100%;
							}
							.computerwifi{
								width: 65px;
								height: 71px;
								position: absolute;
								top: -55px;
								left: 446px;
								transform:rotate(95deg);
								-ms-transform:rotate(95deg); /* Internet Explorer */
								-moz-transform:rotate(95deg); /* Firefox */
								-webkit-transform:rotate(95deg); /* Safari 和 Chrome */
								-o-transform:rotate(95deg); /* Opera */
								>img{
									width: 100%;
									height: 100%;
								}
							}
							.wenjian{
								width: 300px;
								height: 100px;
								position: absolute;
								top:-100px;
								left:260px;
								animation-duration:3s;
								animation-delay: 1s;
							}
						}
						.phone {
							width: 220px;
							height: 425px;
							background-image: url(../store/imges/phone.png);
							background-repeat: no-repeat;
							position: absolute;
							top: 40%;
							right:20%;
							.wifiing{
								position: absolute;
								left: -49px;
								top: -62px;
							}
						}
						.phoneing {
							width: 79px;
							height: 79px;
							position: absolute;
							left: 67px;
							top: 94px;
							background-color: rgb(153, 153, 136);
						}
						.activeP {
							position: absolute;
							left: 60px;
							top: 188px;
						}
					}
					@media screen and (max-width: 1366px){
						.computerWenjian{
							width: 100%;
							height: 100%;
							position: relative;
							animation-duration: 5s;
							.litelcomputer{
								width: 400px;
								position: absolute;
								top: 33%;
								left: 10%;
								>img{
									width: 100%;
									height: 100%;
								}
								.computerwifi{
									width: 65px;
									position: absolute;
									top: -60px;
									left: 406px;
									transform:rotate(95deg);
									-ms-transform:rotate(95deg); /* Internet Explorer */
									-moz-transform:rotate(95deg); /* Firefox */
									-webkit-transform:rotate(95deg); /* Safari 和 Chrome */
									-o-transform:rotate(95deg); /* Opera */
									>img{
										width: 100%;
										height: 100%;
									}
								}
								.wenjian{
									width: 230px;
									height: 100px;
									position: absolute;
									top:-60px;
									left:260px;
									animation-duration:3s;
									animation-delay: 1s;
								}
							}
							.phone {
								width: 220px;
								height: 425px;
								background-image: url(../store/imges/phone.png);
								background-repeat: no-repeat;
								background-size: 80%;
								position: absolute;
								top: 35%;
								right:20%;
							}
							.phoneing {
								width: 59px;
								height: 59px;
								position: absolute;
								left: 60px;
								top: 74px;
								background-color: rgb(153, 153, 136);
							}
							.activeP {
								position: absolute;
								left: 50px;
								top: 168px;
								font-size: 14px;
							}
						}
					}
					.bigphone{
						width: 363px;
						height: 702px;
						position: relative;
						top: 80px;
						left: 461px;
						>img{
							transform: scale(1)
						}
						.phoneing1{
							width: 110px;
							height: 110px;
							position: absolute;
							left: 126px;
							top: 120px;
							background-color: rgb(153, 153, 136);
						}
						.phonecontent{
							position: absolute;
							top: 287px;
							text-align: left;
							left: 40px;
							color: #fff;
							font-size: 16px;
						}
						.activeP1 {
							position: absolute;
							bottom: 155px;
							left: 62px;
							width: 230px;
							height: 40px;
							border-radius: 6px;
							text-align: center;
							line-height: 40px;
							color: #FFFFFF;
							background-color: #FAB25B;
							cursor: pointer;
						}
					}
					@media screen and (max-width: 1366px) {
						.bigphone {
							position: relative;
							top: -20px;
							left: 240px;
							>img{
								transform: scale(.8)
							}
							.phoneing1{
								width: 90px;
								height: 90px;
								position: absolute;
								left: 136px;
								top: 180px;
								background-color: rgb(153, 153, 136);
							}
							.phonecontent{
								position: absolute;
								top: 300px;
								left: 80px;
								text-align: left;
								color: #fff;
								font-size: 12px;
							}
							.activeP1 {
								position: absolute;
								bottom: 205px;
								left: 79px;
								width: 200px;
								height: 30px;
								border-radius: 5px;
								text-align: center;
								line-height: 30px;
								color: #FFFFFF;
								background-color: #FAB25B;
								font-size: 14px;
								cursor: pointer;
							}
						}
					}
				}
			}
			.box4{
				width: 100%;
				height: 100%;
				position: relative;
				.box4_4 {
					width: 58%;
					margin: 0 auto;
					/* border: 6.35px solid #F2819C; */
					/* border-radius: 45px; */
					position: relative;
					top: 240px;
					.handphone{
						width: 345px;
						height: 529px;
						background-image: url(../store/imges/handphone.png);
						background-repeat: no-repeat;
						position: relative;
						top: 80px;
						left: 461px;
						.hand1{
							.tophand{
								width: 163px;
								height: 19px;
								background: #6EC4F4;
								position: absolute;
								top: 32px;
								left: 101px;
							}
							.handlist{
								width: 150px;
								height: 40.5px;
								background: #A7CEE3;
								box-sizing: border-box;
								padding-left: 13px;
								display: flex;
								align-items: center;
								position: absolute;
								left: 108px;
								top: 88px;
								margin-bottom: 24px;
								border-radius: 5px;
								animation-duration: 2s;
									.handleft{
										width: 24px;
										height: 24px;
										border-radius: 50%;
										background: #CEEAFA;
										/* margin-left: 13px; */
									}
									.handright{
										width: 90px;
										height: 24px;
										margin-left: 10px;
										display: flex;
										flex-direction: column;
										flex-shrink: 0;
										justify-content: center;
										.handlong{
											width: 90px;
											height: 4px;
											background: #CEEAFA;
											border-radius: 2px;
										}
										.handshot{
											width: 62px;
											height: 4px;
											background: #CEEAFA;
											border-radius: 2px;
											margin-top: 8px;
										}
									}
							}
							.handlist.one{
								top:153px;
							}
							.handlist.two{
								top:218px;
							}
							.activeP3 {
								position: absolute;
								bottom: 205px;
								left: 113px;
								width: 140px;
								height: 30px;
								border-radius: 16px;
								text-align: center;
								line-height: 30px;
								color: #FFFFFF;
								background-color: #FAB25B;
								font-size: 16px;
								cursor: pointer;
							}
							.handtype1{
								display: flex;
								justify-content: center;
								height: 140px;
								position: absolute;
								right: 323px;
								bottom: 239px;
								/* animation-delay:1s; */
								// animation-fill-mode: forwards;
							}
							.handtype1 p:nth-child(1){
								position: relative;
								left: 2px;
							}
							.handtype2{
								position: absolute;
								right: 310px;
								bottom: 399px;
								// animation-fill-mode: forwards;
							}
							.handtype2 p:nth-child(1){
								position: relative;
								left: -70px;
								top:2px;
							}
							.handtype3{
								position: absolute;
								left:173px;
								top: -280px;
								// animation-fill-mode: forwards;
							}
							.handtype3 p:nth-child(1){
								position: relative;
								top: 2px;
								left: -65px;
							}
							.handtype4{
								position: absolute;
								left: 415px;
								bottom: 399px;
								// animation-fill-mode: forwards;
							}
							.handtype4 p:nth-child(1){
								position: relative;
								left: -8px;
								top:26px;
							}
							.handtype4 p:nth-child(2){
								position: relative;
								left: -60px;
								top:85px;
							}
							.handtype4 p:nth-child(3){
								position: relative;
								left: -50px;
							}
							.handtype5{
								display: flex;
								justify-content: center;
								height: 140px;
								line-height: 140px;
								position: absolute;
								right: -283px;
								bottom: 239px;
								// animation-fill-mode: forwards;
							}
							.handtype5 p:nth-child(2){
								position: relative;
								right: 2px;
							}
							.cursor{
								position: absolute;
								right: -60px;
								bottom: -20px;
							}
							.cursor img{
								transform: scale(1.5)
							}
						}
					}
					.wenzi2{
						position: relative;
						left: -161px;
						width: 290px;
						top: -280px;
					}
				}
				@media screen and (max-width: 1366px){
					.box4_4 {
						width: 58%;
						// height: 768px;
						margin: 0 auto;
						position: relative;
						top: 160px;
						.handphone{
							background-image: url(../store/imges/handphone.png);
							background-repeat: no-repeat;
							background-size: 80%;
							position: relative;
							top: 20px;
							left: 400px;
							.hand1{
								.tophand{
									width: 131px;
									height: 19px;
									background: #6EC4F4;
									position: absolute;
									top: 38px;
									left: 81px;
								}
								.handlist{
									width: 121px;
									height: 38px;
									background: #A7CEE3;
									box-sizing: border-box;
									padding-left: 13px;
									display: flex;
									align-items: center;
									position: absolute;
									left: 86px;
									top: 68px;
									margin-bottom: 24px;
									border-radius: 5px;
									animation-duration: 2s;
										.handleft{
											width: 18px;
											height: 18px;
											border-radius: 50%;
											background: #CEEAFA;
											flex-shrink: 0;
											/* margin-left: 13px; */
										}
										.handright{
											width: 80px;
											height: 24px;
											margin-left: 10px;
											display: flex;
											flex-direction: column;
											flex-shrink: 0;
											justify-content: center;
											.handlong{
												width: 80px;
												height: 4px;
												background: #CEEAFA;
												border-radius: 2px;
											}
											.handshot{
												width: 52px;
												height: 4px;
												background: #CEEAFA;
												border-radius: 2px;
												margin-top: 8px;
											}
										}
								}
								.handlist.one{
									top:118px;
								}
								.handlist.two{
									top:168px;
								}
								.activeP3 {
									position: absolute;
									bottom: 255px;
									left: 86px;
									width: 121px;
									height: 24px;
									border-radius: 16px;
									text-align: center;
									line-height: 24px;
									color: #FFFFFF;
									background-color: #FAB25B;
									font-size: 14px;
									cursor: pointer;
								}
								.handtype1{
									display: flex;
									justify-content: center;
									height: 140px;
									position: absolute;
									right: 293px;
									bottom: 239px;
									animation-fill-mode: forwards;
								}
								.handtype1 p:nth-child(1){
									position: relative;
									left: 55px;
									transform: scale(.6);
								}
								.handtype1 p:nth-child(2){
									transform: scale(.6);
								}
								.handtype2{
									position: absolute;
									right: 285px;
									bottom: 369px;
									animation-fill-mode: forwards;
								}
								.handtype2 p:nth-child(1){
									position: relative;
									left: -40px;
									top:48px;
									transform: scale(.6);
								}
								.handtype2 p:nth-child(2){
									transform: scale(.6);
								}
								.handtype3{
									position: absolute;
									left:113px;
									top: -250px;
									animation-fill-mode: forwards;
								}
								.handtype3 p:nth-child(1){
									position: relative;
									top: 52px;
									left: -40px;
									transform: scale(.6);
								}
								.handtype3 p:nth-child(2){
									transform: scale(.6);
								}
								.handtype4{
									position: absolute;
									left: 330px;
									bottom: 369px;
									animation-fill-mode: forwards;
								}
								.handtype4 p:nth-child(1){
									position: relative;
									left: -25px;
									top:68px;
									transform: scale(.6);
								}
								.handtype4 p:nth-child(2){
									position: relative;
									left: -60px;
									top:72px;
									transform: scale(.6);
								}
								.handtype4 p:nth-child(3){
									transform: scale(.6);
								}
								.handtype5{
									display: flex;
									justify-content: center;
									height: 140px;
									line-height: 140px;
									position: absolute;
									right: -203px;
									bottom: 239px;
									animation-fill-mode: forwards;
								}
								.handtype5 p:nth-child(2){
									position: relative;
									right: 56px;
									transform: scale(.6);
								}
								.handtype5 p:nth-child(1){
									transform: scale(.6);
								}
								.cursor{
									position: absolute;
									right: 10px;
									bottom: 80px;
								}
								.cursor img{
									transform: scale(1)
								}
							}
						}
						.wenzi2{
							position: relative;
							left: -161px;
							width: 290px;
							top: -280px;
						}
					}
				}
				.handphone2{
					width: 363px;
					height: 702px;
					background-image: url(../store/imges/bigphone.png);
					background-repeat: no-repeat;
					position: relative;
					left: 961px;
					top: 80px;
					.cursor1{
						position: absolute;
						right: -60px;
						bottom: 80px;
						>img{
							transform: scale(1.5);
						}
					}
					.hand2{
						width: 308px;
						height: 528px;
						position: absolute;
						left: 25px;
						top: 62px;
						overflow-y: auto;
						/* overflow: hidden; */
						/* cursor: pointer; */
						animation-direction: 3s;
						animation-delay: 2s;
						>img{
							width: 100%;
						}
					}
					.hand2::-webkit-scrollbar{
						width:5px;
						height:5px;
					}
					.hand2::-webkit-scrollbar-thumb{
						background: #bfbfbf;
						border-radius:10px;
					}
				}
				@media screen and (max-width: 1366px){
						.handphone2{
							width: 363px;
							height: 702px;
							background-image: url(../store/imges/bigphone.png);
							background-repeat: no-repeat;
							background-size: 80%;
							position: relative;
							left: 800px;
							top: 40px;
							.cursor1{
								position: absolute;
								right: -30px;
								bottom: 200px;
								>img{
									transform: scale(1);
								}
							}
							.hand2{
								width: 247px;
								height: 422px;
								position: absolute;
								top: 50px;
								left: 20px;
								overflow-y: auto;
								animation-direction: 3s;
								animation-delay: 2s;
								>img{
									width: 100%;
								}
							}
							.hand2::-webkit-scrollbar{
								width:5px;
								height:5px;
							}
							.hand2::-webkit-scrollbar-thumb{
								background: #bfbfbf;
								border-radius:10px;
							}
						}
						
				}
			}
			.box5{
				font-size: 100px;
			}
		}
		
	}
</style>