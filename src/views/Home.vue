<template>
	<div>
		<full-page :options="options" ref="page">
			<!--      第一屏-->
			<div class="section">
				<div class="box1">
					<div class="slide">
						section1
					</div>

				</div>
			</div>
			<!--      第二屏-->
			<div class="section">
				<div class="box3">
					<!-- :class="showlitilecomputer ? 'fadeOutUp':''" v-if="!showbigphone" -->
				 <div v-if="showtwo">
					<div class="computerimg animated" :class="showlitilecomputer ? 'fadeOutUp':''"  style="animation-duration: 3s" v-if="!showbigphone" >
						<div>
							<div class="leftdiv"></div>
							<div class="rightdiv" >
								<p class="grid-content bg-purple animated" :class="num==1 ? 'fadeInUp':''" v-show="a1">活动名称：小小演说家培养课</p>
								<p class="grid-content bg-purple animated" :class="num==2 ? 'fadeInUp':''" v-show="a2">活动时间：xx年xx月xx日14:00</p>
								<p class="grid-content bg-purple animated" :class="num==3 ? 'fadeInUp':''" v-show="a3">活动地点：漂亮广场d2 2501</p>
								<p class="grid-content bg-purple animated" :class="num==4 ? 'fadeInUp':''" v-show="a4">适合年龄段：7-10岁喜欢演讲的小朋友</p>
							</div>
						</div>
						<div class="activediv">
							<div class="activecontent animated a" :class="num==5 ? 'fadeInUp':''" v-show="a5">
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
					<!--  showlitilecomputer-->
					<div v-if="showlitilecomputer" :class="showlitilecomputer ? 'fadeInRight':(showbigphone ? 'bounceOut':'')"  style="animation-duration: 5s">
						<div class="computerwifi">
							<img src="../store/imges/WiFi.png" alt="" class="animated bounceIn infinite">
						</div>
						<div class="wenjian animated rotateOutUpRight infinite"  style="animation-duration:3s; -webkit-animation-delay: 3s; ">
							 <img src="../store/imges/wenjianjia5.png" class=" " alt="">
						</div>
						 <div class="litelcomputer">
							 <img src="../store/imges/litilecomputer.png"  alt="">
						 </div>
						<div class="phone animated fadeInRight">
						  <img class="wifiing animated bounceIn infinite" src="../store/imges/WiFi.png" alt="">
						<div class="phoneing"></div>
						<p class="activeP">新的活动通知</p>
						</div> 
					</div>
					
				 <div v-if="showbigphone" class="bigphone animated fadeInDownBig" style="width: 363px;height: 702px;">
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
					<div class="section2">
						<div class="one1"></div>
						<div class="tow2">
							<p class="myP">时光机</p>
						</div>
						<div class="three3">
							<div class="center_conten">
								<img src="../store/imges/头像.png" align="left" width="174" hspace="5" vspace="5" />
								<div class="title" v-if="twos==1">
									<p>
										张大宝
									</p>
									<p>
										四年级
									</p>
								</div>
								<div :class="assc==1 ? 'dowebok':''" class="animated lightSpeedIn" v-show="assc==1" v-if="twos!=1">
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
									<p>
										<el-row :gutter="20" style="font-size: 30px;color: #FFFEFE;">
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
										<el-row :gutter="20" style="font-size: 22px;color: #FFFEFE;">
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
										<el-row :gutter="20" style="font-size: 22px;color: #FFFEFE;">
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
										<el-row :gutter="20" style="font-size: 22px;color: #FFFEFE;">
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
									</p>
								</div>
								<div v-if="twos!=1" class="selecte_btn">
									<el-button>一键分析</el-button>
								</div>
								<div v-if="twos==1">
									<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
									<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
									<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
									<div class="myline"> <img src="../store/imges/line.png" alt=""></div>
								</div>
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
								<div v-if="twos==1">
									<div style="margin-left:291px;width: 23%;margin-right: 37px;float: left;" class="animated">
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInLeft':''"></span>
										<span class="buleline animated" style="width: 158px;" :class="twos==1 ? 'bounceInLeft':''"></span>
									</div>
									<div style="float: left;width: 6%;">
										<div class="animated" :class="twos==1 ? 'bounceInUp':''"><img src="../store/imges/10.png" alt=""></div>
									</div>
									<div style="width: 25%;float: left;margin-left: 22px;">
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" :class="twos==1 ? 'bounceInRight':''"></span>
										<span class="buleline animated" style="width: 158px;" :class="twos==1 ? 'bounceInRight':''"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="twos!=1" v-show="assc==1" class="shouzhi animated" id="dongshou" :class="assc==1 ? 'rotateInUpRight':''"><img
						 src="../store/imges/header.png" alt="" width="155" hspace="5" vspace="5"></div>
				</div>
			</div>


			<div class="section">
				<div class="box4">
					<div class="section3">
						<div class="bigphone3 animated fadeInDownBig" style="width: 220px;height: 425px;">
							<p class="activeP3 animated fadeInUp">一键发送</p>
						</div>
					</div>
				</div>
			</div>

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
					sectionsColor: ['#41b883', '#F1F1F1', '#F1F1F1', '#F1F1F1', '#1bcee6', ]
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
				if (td.index == 2) {
					this.assc = 1
					var that = this
					setTimeout(function() {
						that.twos = 1
						that.jindu()
						that.jindu1()
						that.jindu2()
						that.jindu3()
					}, 3500)
					var newa = []
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
				} else if (td.index == 1) {
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
					this.num = 0
					var that = this
					this.$nextTick(function(){
						that.showtwo = true
						this.settimeou = setInterval(function() {
							that.num++
							if (that.num == 1) {
								that.a1 = true
							} else if (that.num == 2) {
								that.a2 = true
							} else if (that.num == 3) {
								that.a3 = true
							} else if (that.num == 4) {
								that.a4 = true
							}else if (that.num == 5) {
								that.a5 = true
							}else if (that.num == 6) {
								that.a6 = true
							}else if (that.num == 7) {
								that.a7 = true
							}else if (that.num == 8) {
								that.a8 = true
							}
							if (that.num > 8) {
								clearInterval(that.settimeou)
								that.showdian = true
								var settimeout = setTimeout(function(){
									that.showlitilecomputer = true
									var settimeout = setTimeout(function(){
										that.showlitilecomputer = false
										 that.showbigphone = true
									},8000)
									
								},2000)
							}
						}, 1000)
					})
					
						
				} else if(td.index == 3) {
					
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
					this.num = 0
				}else if(td.index == 4){
					
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
					this.num = 0
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
				}else{
					this.time1 = 0
					this.time2 = 0
					this.time3 = 0
					this.time4 = 0
					this.assc = 0
					this.twos = 0
					this.num = 0
					this.num = 0
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
				}

			},
			jindu() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time1++
					if (that.time1 > 223) {
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


			}

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
<style scoped>
	.dowebok {
		animate-duration: 3s;
		animate-delay: 1s;
		animate-iteration-count: 1;
	}

	.tow2 {
		background-color: #68C6FB;
	}

	div {
		margin: 0;
		padding: 0;
	}

	.cc {}

	.section2 {
		width: 58%;
		margin: 0 auto 0 auto;
		border: 6.35px solid #F2819C;
		border-radius: 45px;
		position: relative;
		top: 90px;
		height: 768px;
	}

	.one1 {
		height: 62.1PX;
		background-color: #F2819C;
		border-top-left-radius: 33px;
		border-top-right-radius: 33px;
	}

	.myP {
		color: #FCFCFB;
		text-align: left;
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 34.52px;
		padding: 28px 0 28px 70px;
	}

	.three3 {
		background-color: #C2E9FF;
		width: 95.3%;
		margin: 0px auto 18px auto;
		border-radius: 10px;
		height: 528px;
	}

	.center_conten {
		margin: 0px 145px 0 145px;
		padding-top: 54px;
	}

	.myinfor {
		text-align: left;
		height: 175px;

	}

	.myinfor span {
		font-size: 30px;
		color: #FFFEFE;
		margin-left: 70px;
	}

	.el-row {
		line-height: 44px;
		border-bottom: 1px solid #FFFFFF;
	}

	.selecte_btn>button {
		width: 296px;
		background-color: #FAB25B !important;
		color: #FFFEFE;
		margin-bottom: 20px;
		font-size: 22px;
	}

	.shouzhi {
		position: relative;
		bottom: 15px;
		left: 89px;
		animate-delay: 10s;
	}

	.myline {
		padding: 20px 0;
		margin-left: 257px;
	}

	.title {
		width: 177px;
		height: 50px;
		position: absolute;
		top: 455px;
		text-align: center;
		color: #6086D1;
		font-size: 30px;
	}

	.myline2 {
		position: relative;
		border-top: 4px solid #EBECEE;
		width: 554.7px;
		height: 4px;
		margin-left: 257px;
		margin-top: 26px;
		margin-bottom: 20px;
	}

	.son1 {
		position: relative;
		bottom: 10px;
		left: 20px;
		animate-duration: 10s;
		animate-delay: 4s;

	}

	.son1 div {
		position: absolute;
		width: 23px;
		float: left;
		margin-right: 10px;
		bottom: -5px;

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

	.son2 {
		animate-duration: 10s;
		position: relative;
		bottom: 10px;
		left: 197px;
		animate-delay: 6s;
	}

	.son2 div {
		position: absolute;
		width: 23px;
		height: 28px;
		float: left;
		bottom: -5px;
		margin-right: 10px;
	}

	.son3 {
		animate-duration: 10s;
		animate-delay: 8s;
		position: relative;
		bottom: 10px;
		left: 376px;
	}

	.son3 div {
		position: absolute;
		width: 23px;
		height: 28px;
		bottom: -5px;
		float: left;
		margin-right: 10px;
	}

	.buleline {
		animate-duration: 10s;
		display: block;
		width: 199px;
		margin-bottom: 15px;
		height: 9px;
		background-color: #6086D1;
	}

	.computerimg {
		background-image: url(../store/imges/computer.png);
		background-repeat: no-repeat;
		position: relative;
		width: 33%;
		height: 511px;
		top: 284px;
		left: 329px;
	}

	.leftdiv {
		width: 110px;
		margin-left: 85px;
		height: 110px;
		position: absolute;
		top: 53px;
		background-color: #999999;
	}

	.rightdiv {
		float: left;
		    margin-top: 58px;
		    margin-left: 244px;
	}

	.rightdiv p {
		text-align: left;
		font-size: 16px;
		color: #ffffff;
		margin: 0;
		line-height: 35px;
	}

	.activediv {
		position: absolute;
		top: 210px;
		left: 87px;
	}

	.activecontent {
		float: left;

	}

	.activecontent>p {
		margin: 0;
		font-size: 16px;
		color: #FDFDFD;
	}

	.activelinediv {
		float: right;
		margin-top: 9px;
		margin-left: 13px;
	}

	.activeline {
		display: block;
		width: 349px;
		height: 8px;
		border-radius: 5px;
		background-color: #B8FEFF;
		margin-bottom: 15px;

	}

	.activebtn {
		text-align: center;
		position: absolute;
		bottom: -38px;
		border-radius: 13px;
		width: 296px;
		left: 90px;
		line-height: 41px;
		color: #FFFEFE;
		background-color: #FAB25B;
	}

	.phone {
		width: 220px;
		height: 425px;
		background-image: url(../store/imges/phone.png);
		background-repeat: no-repeat;
		position: relative;
		bottom: 651px;
		left: 959px;
	}

	.phoneing {
		width: 79px;
		height: 79px;
		position: absolute;
		left: 67px;
		top: 94px;
		background-color: rgb(153, 153, 136);
	}
  .phoneing1{
	      width: 110px;
	      height: 110px;
	      position: absolute;
	      left: 126px;
	      top: 95px;
		  background-color: rgb(153, 153, 136);
  }
	.activeP {
		position: absolute;
		bottom: 110px;
		left: 62px;
	}
    .activeP1 {
    	position: absolute;
		bottom: 110px;
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
	.subiao img {
		position: absolute;
		width: 28px;
		height: 28px;
		top: 121px;
		left: 289px;
	}
	.wifiing{
		position: absolute;
		left: -49px;
		top: -62px;
	}
	.litelcomputer img{
		    right: 482px;
		    position: relative;
		    bottom: 220px
	}
	.wenjian{
		       position: relative;
		       bottom: 256px;
		       left: 271px;
		       width: 30%;
	}
	.computerwifi{
		position: relative;
		bottom: 142px;
		right: 231px;
		transform:rotate(95deg);
		-ms-transform:rotate(95deg); /* Internet Explorer */
		-moz-transform:rotate(95deg); /* Firefox */
		-webkit-transform:rotate(95deg); /* Safari 和 Chrome */
		-o-transform:rotate(95deg); /* Opera */
	}
	.bigphone{
		background-image: url(../store/imges/bigphone.png);
		background-repeat: no-repeat;
		position: relative;
		top: 80px;
		left: 461px;
	}
	.phonecontent{
		position: absolute;
		top: 287px;
		text-align: left;
		left: 39px;
		color: #fff;
	}
	.section3 {
		width: 58%;
		margin: 0 auto;
		border: 6.35px solid #F2819C;
		/* border-radius: 45px; */
		position: relative;
		top: 90px;
		height: 768px;
	}
	.bigphone3{
		background-image: url(../store/imges/phone.png);
		background-repeat: no-repeat;
		position: relative;
		top: 80px;
		left: 461px;
	}
	 .activeP3 {
		animate-duration: 10s;
		animate-delay: 8s;
    	position: absolute;
		bottom: 60px;
		left: 40px;
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
</style>
