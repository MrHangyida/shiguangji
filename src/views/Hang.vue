<template>
	<div class="wrap">
		<full-page :options="options" ref="page">
			<!--第一屏-->
			<div class="section">
				<div class="box1">
					<img src="../store/imges/bannner.png" alt="">
				</div>
			</div>
            <!--第er屏-->
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
							老师可以在微信小程序上快捷的发送课程提醒，照片、视频、通知、作业等内容给家长。
						</div>
					</div>
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
                        <div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag2">
                            <img src="../store/imges/shouzhi.png" alt="">
                        </div>
                        <div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag3">
                            <img src="../store/imges/shouzhi.png" alt="">
                        </div>
                        <div class="cursor1 animated slideInUp" style="animation-duration: 2s;animation-delay:1s" v-if="hand2flag4">
                            <img src="../store/imges/shouzhi.png" alt="">
                        </div>
                        <div class="computer wenzi2s animated" :class="box4===2 ? 'fadeInDownBig':''"  style="animation-duration: 3s" v-if="hand2flag1">
							随时拍下孩子的课堂表现，课堂成果展示，为孩子和家长留存一份课堂记忆，从点点滴滴积累中看见孩子成长。
						</div>
                        <div class="computer wenzi2s animated" :class="box4===2 ? 'fadeInDownBig':''"  style="animation-duration: 3s" v-if="hand2flag2">
							随时拍下孩子的课堂表现，课堂成果展示，为孩子和家长留存一份课堂记忆，从点点滴滴积累中看见孩子成长。
						</div>
                        <div class="computer wenzi2s animated" :class="box4===2 ? 'fadeInDownBig':''"  style="animation-duration: 3s" v-if="hand2flag3">
							家长可以在小程序上查看照片，视频，选课，做作业，分类管理，方便记录和查阅。
						</div>
                        <div class="computer wenzi2s animated" :class="box4===2 ? 'fadeInDownBig':''"  style="animation-duration: 3s" v-if="hand2flag4">
							家庭成员多也不怕，爸爸妈妈，爷爷奶奶，姥姥姥爷一起来关注孩子培育成长。
						</div>
					</div>
				</div>
			</div>
             <!--第san屏-->
            <div class="section">
				<div class="box3">
				 <div class="box3_1" v-if="showtwo">
					<div class="computerimg animated" :class="showlitilecomputer ? 'fadeOutUp':''"  style="animation-duration: 3s"  v-if="computerimgFlag">
						<div class="computeringWrap">
							<div class="computerTop">
                                <div class="leftdiv">
									<img src="../store/imges/hang.png" class=" " alt="">
								</div>
                                <div class="rightdiv" >
                                    <p class="grid-content bg-purple animated" :class="num==1 ? 'fadeInUp':''" v-show="a1">活动名称：小小演说家培养课</p>
                                    <p class="grid-content bg-purple animated" :class="num==2 ? 'fadeInUp':''" v-show="a2">活动时间：xx年xx月xx日14:00</p>
                                    <p class="grid-content bg-purple animated" :class="num==3 ? 'fadeInUp':''" v-show="a3">活动地点：漂亮广场d2 2501</p>
                                    <p class="grid-content bg-purple animated" :class="num==4 ? 'fadeInUp':''" v-show="a4">适合年龄段：7-10岁喜欢演讲的小朋友</p>
                                </div>
                            </div>
                            <div class="computerBottom">
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
                                </div>
                                <div class="activedivBottom">
                                    <div class="activebtn"  :class="num==8 ? 'fadeInUp':''" v-show="a8">一键发布</div> 
                                    <div class="subiao animated " :class="showdian==true ? 'rotateInUpRight':''"  v-show="showdian"><img src="../store/imges/鼠标.png" alt=""></div>
                                </div>
                            </div>
						</div>
						<div class="computerWenzi animated" :class="showlitilecomputer ? 'fadeInDownBig':''" v-if="!showbigphone">
							老师可以发送最新的活动、课程信息，让更多周边家长了解到活动和课程特色、优势；自动接收订单，生意不用愁。
						</div>
					</div>
					<div class="computerWenjian" :class="showlitilecomputer ? 'fadeInRight':(showbigphone ? 'bounceOut':'')" v-if="showlitilecomputer">
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
                            <div class="phoneing">
								<img src="../store/imges/hang.png" alt="">
							</div>
                            <p class="activeP">新的活动通知</p>
						</div> 
					</div>
					<div  class="bigphone animated fadeInDownBig" v-if="showbigphone">
						<img src="../store/imges/bigphone.png" alt="">
						<div class="phoneing1">
							<img src="../store/imges/hang.png" class=" " alt="">
						</div>
						<div class="phonecontent">
							<p class="grid-content">活动时间：xx年xx月xx日14:00</p>
							<p class="grid-conten">活动地点：漂亮广场d2 2501</p>
							<p class="grid-content">适合年龄段：7-10岁喜欢演讲的小朋友</p>
						</div>
						<p class="activeP1">立即报名</p>
					</div>
                    <div class="computerWenzi1 animated" :class="showlitilecomputer ? 'fadeInDownBig':''" v-if="showlitilecomputer">
                        	老师可以发送最新的活动、课程信息，让更多周边家长了解到活动和课程特色、优势；自动接收订单，生意不用愁。
					</div>
                    <div class="computerWenzi1 animated" :class="showlitilecomputer ? 'fadeInDownBig':''" v-if="showbigphone">
                            家长可以看到附近的免费试听课、节日活动，查询到适合孩子的培训课程，一键点击就可以预约参加活动和课程，让选择简单、高效。
					</div>
				 </div>
			  </div>
			</div>
			<!--第si屏-->
			<div class="section">
				<div class="box2">
					<div class="box2_2">
						<div class="one1"></div>
						<div class="tow2">
							<p class="myP">时光机</p>
						</div>
						<div class="three3">
							<div class="center_conten">
								<div class="center_contenTop" :class="twos==1 ? 'center_contenTops':''">
								
                                    <div class="title">
                                        <p>
                                            <img src="../store/imges/头像.png" align="left" width="174" hspace="" vspace="5" />
                                        </p>
                                        <div class="name" v-if="twos==1">
                                             <p>张大宝</p>
                                             <p>四年级</p>
                                        </div>
                                    </div>
									<div :class="assc==1 ? 'dowebok':''" class="myinforList animated lightSpeedIn" v-show="assc==1" v-if="twos!=1">
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
									<div v-if="twos==1" class="mylineList">
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
									</div>
								</div>
								<div class="center_contenBottom animated lightSpeedIn" :class="assc==1 ? 'dowebok':''" v-show="assc==1" v-if="twos!=1">
                                    <div class="elList"  v-if="twos!=1">
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
									
                                    <div v-if="twos!=1" class="selecte_btn">
                                        一键分析
                                    </div>
								</div>
								
								<div v-if="twos==1" class="center_contenContent">
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
								</div>
							</div>
						</div>
					</div>
					<div class="wenzi3 animated lightSpeedIn" v-if="twos!=1">
						以中考、高考为指导的孩子综合素质评价指标。
					</div>
					<div class="wenzi3 animated lightSpeedIn" v-if="twos==1">
						孩子的培育成果，明明白白看得清，为培育孩子提供客观数据支持。
					</div>
                    <div v-if="twos!=1" v-show="assc==1" class="dowebok shouzhi animated" id="dongshou" :class="assc==1 ? 'rotateInUpRight':''"><img
							src="../store/imges/header.png" alt="" width="155" hspace="5" vspace="5">
					</div>
				</div>
			</div>
           <!-- 第五屏 关于我们-->
			<div class="section fp-auto-height" style="overflow:hidden">
				<div class="box5">
					<h3 class="box5_tit">
						关于我们
					</h3>
					<div class="box5_wrap">
						<div class="box5_top">
							<div class="box5_topLeftImg">
								<img src="../store/imges/topleftimg.jpg" alt="">
							</div>
							<div class="box5_topWord">
								<h4>关于我们</h4>
								<p>
									北京成长时光机教育科技有限公司，作为金岭教育科技（北京）有限公司的子公司，专注于教育行业的培训机构细分领域。旗下产品时光机成长导航，作为专注于教育行业培训产业的核心信息化平台，致力于为培训机构提供专业的信息化科技手段课堂管理软件与服务，实现培训机构课程教育的全纪录，数据化、可视化、可追溯化。与国家新中高考的学生综合素养评价挂钩 ，使得学生学习成长的发展与学生核心素养发展可比较、可视、科学、可分析、可预测，全面提升对学生成长培育的科学化把控。平台内，为中国家庭提供更丰富、更科学、更专业，可以分享的培育孩子的培训课程、教育活动、教育辅材、教育场景等，立体化的为家长提供培训孩子的信息和服务支持，作为中国家长培育孩子的成长导航。
								</p>
							</div>
						</div>
						<div class="box5_bot">
							<div class="box5_botWord">
								<h4>联系我们</h4>
								<p>
									<span>地址：北京市朝阳区安立路68号飘亮广场d</span>
									<span>邮箱：2847637291@qq.com</span>
									<span>电话：13106569603</span>
								</p>
							</div>
							<div class="box5_botLeftImg">
								<img src="../store/imges/botleftimg.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="section">
				<div class="box5">
					section5
				</div>
			</div> -->
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
					// scrollingSpeed:0,
					keyboardScrolling: true, //是否可以使用键盘方向键导航，默认为true
					continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
					menu: '#menu',
					// navigation: true,
					// anchors: ['page0', 'page1', 'page2',"page3","page4"],
					sectionsColor: ['#FFFFFF', '#F1F1F1', '#FFFFFF', '#F1F1F1', '#FFFFFF', ]
				}
			}
        },
        mounted(){
            // this.$refs.page.api.moveSectionDown();
        },
		methods: {
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
                    this.hand1flag=false;
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
                    this.hand1flag=false;
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
                    this.hand1flag=false;
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
                    this.hand1flag=false;
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
					if (that.time1 > 150) {
						clearInterval(settime)
					}
				}, 10)


			},
			jindu1() { //条形统计图的增长
				var that = this
				var settime = setInterval(function() {
					that.time2++
					if (that.time1 > 120) {
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
	.wrap{
		width: 100%;
		height: 100%;
        display: flex;
        flex-direction: column;
		.section{
			width: 100%;
			height: 100%;
            display: flex;
            flex-direction: column;
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
				position: relative;
                .box2_2{
                    width: 603px;
                    height: 390px;
                    border: 3.2px solid #F2819C;
                    border-radius: 22.5px;
                    margin: 29px auto 0 auto;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    .one1{
                        width:100%;
                        height: 28px;
                        background: #F2819C;
						flex-shrink: 0;
                    }
                    .tow2{
                        width: 100%;
                        height: 40px;
                        background: #68C6FB;
                        margin: 5.5px 0 8.5px 0;
						flex-shrink: 0;
                        .myP {
                            color: #FCFCFB;
                            padding-left: 43.5px;
                            box-sizing: border-box;
                            margin: 15px 0 10.5px 0;
                            font-size: 15px;
                        }
                    }
                    .three3{
                        width: 575px;
                        height: 292.5px;
						// flex: 1;
                        background: #C2E9FF;
                        margin-left: 12.5px;
                        .center_conten{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            .center_contenTop{
                                width: 100%;
                                height: 93.5px;
                                display: flex;
                                padding-left: 72.5px;
                                box-sizing: border-box;
                                margin-top: 23px;
                                .title{
                                      >p:first-child{
                                        width: 87px;
                                        height: 93.5px;
                                        >img{
                                            width: 100%;
                                        }
                                    }
                                    >.name{
                                        margin-left: 20px;
                                        margin-top: 14px;
                                        color: #6086D1;
                                        font-size: 15px;
                                    }
                                }
                                .myinforList{
                                    flex: 1;
                                    height: 100%;
                                    margin-left: 50px;
                                    .myinfor{
                                        font-size: 12px;
                                        color:#FFFEFE;
                                        >p{
                                            height: 30px;
                                            line-height: 30px;
                                            >span:first-child{
                                                margin-right: 69.5px;
                                            }
                                        }
                                    }
                                }
                            }
                            .center_contenTops{
                                width: 100%;
                                height: 131.5px;
                                margin-top: 53px;
                                .mylineList{
                                    flex: 1;
                                    margin-left: 56.5px;
                                    .myline{
                                        line-height: 27.5px;
                                        width: 306.5px;
                                        >img{
                                            width: 100%;
                                        }
                                    }
                                    .myline2 {
											width: 85%;
											height: 4px;
											border-top: 4px solid #EBECEE;
											margin-top: 13px;
											.son1 {
												position: relative;
                                                left: 5px;
												animation-duration: 10s;
												animation-delay: 4s;
                                                >div {
                                                    position: absolute;
                                                    width: 11.5px;
                                                    bottom: 4px;
                                                }
											}
											.son2 {
												animation-duration: 10s;
												animation-delay: 6s;
												position: relative;
												left:101px;
                                                >div {
                                                    position: absolute;
                                                    width: 11.5px;
                                                    height: 28px;
                                                    bottom: 4px;
                                                }
											}
											.son3 {
												animation-duration: 10s;
												animation-delay: 8s;
												position: relative;
												left: 201px;
                                                div {
                                                    position: absolute;
                                                    width: 11.5px;
                                                    height: 28px;
                                                    bottom: 4px;
                                                }
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
                                width: 90%;
                                flex:1;
                                padding-left: 71px;
                                box-sizing: border-box;
                                margin-top: 26.5px;
                                .el-row{
                                    font-size: 9px;
                                    height: 25px;
									line-height: 25px;
									border-bottom: 1px solid #FFFFFF;
									font-size: 9px;
									color: #FFFEFE;
									overflow:hidden;
                                }
                                .el-row:first-child {
                                    font-size: 12px;
								}
                                .selecte_btn{
                                    width: 148px;
                                    height: 28px;
                                    text-align: center;
                                    line-height: 28px;
                                    background: #FAB25B;
                                    border-radius: 5px;
                                    color: #FFFEFE;
                                    font-size: 11px;
                                    margin: 19.5px auto 0 auto;
                                }
                            }
                            .center_contenContent{
                                flex: 1;
                                display: flex;
                                margin-left: 223.5px;
                                margin-top: 22px;
                                .content_content{
									margin: 0 28.5px;
									width: 6%;
								}
								.contetLeft{
									.buleline {
										animation-duration: 10s;
										display: block;
										width: 100px;
										height: 5px;
										background-color: #6086D1;
										margin-bottom: 6px;
									}
								}
                            }
                        }
                    }
                    .dowebok {
                        animation-duration: 3s;
                        animation-delay: 1s;
                        animation-iteration-count: 1;
                    }
                }
               .wenzi3{
					width: 100%;
					font-size: 14px;
					position: absolute;
					// left: 30%;
					bottom: 50px;
					left: 30%;
					color: #333333;
					line-height: 24px;
					letter-spacing: 1px;
					z-index: 1;
					display: block;
                }
                .shouzhi{
                    width: 100%;
                    height: 100%;
                    font-size: 12px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-40%);
                    margin-top: -40px;
                    animation-duration: 3s;
                    animation-delay: 1s;
                }
			}
            .box3{
				width: 100%;
				height: 100%;
				.box3_1{
					width: 100%;
					height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
					.computerimg {
						height:100%;
						.computeringWrap{
							width: 307px;
							height: 255.5px;
                            display: flex;
                            flex-direction: column;
							background: url(../store/imges/computer.png) no-repeat;
							background-size: 100%;
                            margin-left: 164.5px;
                            margin-top: 142px;
                            position: relative;
                            .computerTop{
                                width: 100%;
                                flex: 1;
                                position: absolute;
                                margin-left: 42.5px;
                                top: 26.5px;
                                display: flex;
                                .leftdiv {
                                    width: 55px;
                                    height: 55px;
                                    background-color: #999999;
									img{
										width: 100%;
									}
                                }
                                .rightdiv {
                                    flex: 1;
                                    margin-left: 19.5px;
                                    >p {
                                        font-size: 8px;
                                        color: #ffffff;
                                        margin-bottom: 10.5px;
                                    }
                                }
                            }
							.computerBottom{
                                width: 100%;
                                flex: 1;
                                position: absolute;
                                margin-left: 42.5px;
                                top:105px;
                                margin-top: 6px;
                                display: flex;
                                flex-direction: column;
                                .activediv {
                                    width: 100%;
                                    height: 43px;
                                    display: flex;
                                    .activecontent {
                                        >p {
                                            font-size: 8px;
                                            color: #FDFDFD;
                                        }
                                    }
                                    .activelinediv {
                                        width: 174.5px;
                                        height: 58px;
                                        display: flex;
                                        flex-direction: column;
                                        margin-left: 6.5px;
                                        .activeline {
                                            width: 174.5px;
                                            height: 4px;
                                            border-radius: 3px;
                                            background-color: #B8FEFF;
                                            margin-bottom: 6px;
                                        }
                                    }
                                    
                                    
                                }
                                .activedivBottom{
                                    width: 100%;
                                    flex: 1;
                                    display: flex;
                                    flex-direction: column;
                                    margin-left: 37px;
                                    position: relative;
                                    .activebtn {
                                        width: 148px;
                                        height: 20px;
                                        text-align: center;
                                        line-height: 20px;
                                        border-radius: 5px;
                                        color: #FFFEFE;
                                        background-color: #FAB25B;
                                    }
                                    .subiao img {
                                        position: absolute;
                                        width: 14px;
                                        height: 14px;
                                        left: 108px;
                                        top: -5px;
                                    }
                                }
                            }
							
						}
					.computerWenzi{
							position: absolute;
							width: 310px;
							left: 60%;
							top: 45%;
							animation-duration: 3s;
                            font-size: 14px;
                            letter-spacing: 1px;
                            color: #333333;
						}
					}
					.computerWenjian{
						width: 100%;
						height: 100%;
                        display: flex;
						position: relative;
						// animation-duration: 5s;
						.litelcomputer{
							width: 223px;
							height: 185.5px;
							position: absolute;
							top: 181px;
							left: 86.5px;
							>img{
								width: 100%;
							}
							.computerwifi{
								width: 27.5px;
								height: 23.5px;
								position: absolute;
								top: -25px;
								left: 230px;
								transform:rotate(95deg);
								-ms-transform:rotate(95deg); /* Internet Explorer */
								-moz-transform:rotate(95deg); /* Firefox */
								-webkit-transform:rotate(95deg); /* Safari 和 Chrome */
								-o-transform:rotate(95deg); /* Opera */
								>img{
									width: 100%;
								}
							}
							.wenjian{
								width: 150px;
								height: 50px;
								position: absolute;
								top:-20px;
								left:180px;
								animation-duration:3s;
								animation-delay: 1s;
                                img{
                                    width: 32.5px;
                                }
							}
						}
						.phone {
                            width: 110px;
							height: 212.5px;
							background-image: url(../store/imges/phone.png);
							background-repeat: no-repeat;
                            background-size: 100%;
							position: absolute;
							top: 170.5px;
							left:416px;
							.wifiing{
                                width: 27.5px;
								position: absolute;
								left: -22px;
								top: -27px;
							}
                            .phoneing {
                                width: 40.5px;
                                height: 40.5px;
                                position: absolute;
                                left:35px;
                                top: 75px;
                                background-color: rgb(153, 153, 136);
								img{
									width: 100%;
								}
                            }
                            .activeP {
                                position: absolute;
                                left: 30px;
                                top: 131px;
                                font-size: 9px;
                                color: #FFFEFE;
                            }
						}
					}
					.bigphone{
						width: 150px;
						// height: 702px;
						position: relative;
						top: 60px;
						left: 261px;
						>img{
							width: 100%;
						}
						.phoneing1{
							width: 50px;
							height: 50px;
							position: absolute;
							top: 40px;
							left: 50px;
							background-color: rgb(153, 153, 136);
							img{
								width: 100%;
							}
						}
						.phonecontent{
							position: absolute;
							top: 120px;
							left: 20px;
							color: #fff;
							font-size: 6px;
						}
						.activeP1 {
							width: 100px;
							height: 15px;
                            text-align: center;
							line-height: 15px;
							border-radius: 6px;
							position: absolute;
							top: 210px;
							left: 24px;
							color: #FFFFFF;
							background-color: #FAB25B;
							cursor: pointer;
						}
					}
                    .computerWenzi1{
                        width: 290px;
                        position: absolute;
                        left: 650px;
                        top: 200px;
                        font-size: 14px;
                        letter-spacing: 1px;
                        line-height: 24px;
                        color: #333333;
                    }
				}
			}
            .box4{
                width: 100%;
                height: 100%;
                .box4_4 {
                    width: 100%;
                    height: 100%;
					.handphone{
						width: 172.5px;
						height: 264.5px;
						background-image: url(../store/imges/handphone.png);
						background-repeat: no-repeat;
                        background-size: 100%;
						position: relative;
						top: 212px;
						left: 592px;
						.hand1{
							.tophand{
								width: 81.6px;
								height: 9.5px;
								background: #6EC4F4;
								position: absolute;
								top: 16px;
								left: 51px;
							}
							.handlist{
								width: 74.95px;
								height: 20.25px;
								background: #A7CEE3;
								box-sizing: border-box;
								padding-left: 13px;
								display: flex;
								align-items: center;
								position: absolute;
								left: 54px;
								top: 36px;
								border-radius: 3px;
								animation-duration: 2s;
									.handleft{
										width: 11.95px;
										height: 11.95px;
										border-radius: 50%;
										background: #CEEAFA;
                                        flex-shrink: 0;
									}
									.handright{
										width: 23.5px;
										height: 24px;
										margin-left: 10px;
										display: flex;
										flex-direction: column;
										flex-shrink: 0;
										justify-content: center;
										.handlong{
											width: 31px;
											height: 2px;
											background: #CEEAFA;
											border-radius: 1.5px;
										}
										.handshot{
											width: 23.5px;
											height: 2px;
											background: #CEEAFA;
											border-radius: 1.5px;
											margin-top: 8px;
										}
									}
							}
							.handlist.one{
								top:65px;
							}
							.handlist.two{
								top:94px;
							}
							.activeP3 {
								width: 70px;
								height: 15px;
                                text-align: center;
								line-height: 15px;
                                position: absolute;
								top: 124px;
								left:57px;
								border-radius: 7.5px;
								color: #FFFFFF;
								background-color: #FAB25B;
								font-size: 7.63px;
								cursor: pointer;
							}
							.handtype1{
								display: flex;
								justify-content: center;
								position: absolute;
								right: 160px;
								bottom: 139.5px;
								// animation-fill-mode: forwards;
							}
							.handtype1 p:nth-child(1){
                                width: 70px;
                                >img{
                                    width: 100%;
                                }
							}
                            .handtype1 p:nth-child(2){
                                width: 71px;
                                >img{
                                    width: 100%;
                                }
							}
							.handtype2{
								position: absolute;
								right: 160px;
								bottom: 219px;
							}
							.handtype2 p:nth-child(1){
								position: relative;
								left: -35px;
								top:2px;
                                 width: 70px;
                                >img{
                                    width: 100%;
                                }
							}
                             .handtype2 p:nth-child(2){
                                width: 71px;
                                >img{
                                    width: 100%;
                                }
							}
							.handtype3{
								position: absolute;
								top: -150px;
								left:87px;
							}
							.handtype3 p:nth-child(1){
								position: relative;
								top: 2px;
								left: -35px;
                                 width: 70px;
                                >img{
                                    width: 100%;
                                }
							}
							.handtype4{
								position: absolute;
								left: 230px;
								bottom: 221px;
							}
							.handtype4 p:nth-child(1){
								position: relative;
								left: -15px;
								top:9px;
                                width: 70px;
                                >img{
                                    width: 100%;
                                }
							}
							.handtype4 p:nth-child(2){
								position: relative;
								left: -58px;
								top:52px;
							}
							.handtype4 p:nth-child(3){
								position: relative;
								left: -50px;
                                width: 71px;
                                >img{
                                    width: 100%;
                                }
							}
							.handtype5{
								display: flex;
								justify-content: center;
								position: absolute;
								right: -145px;
								bottom: 110.5px;
							}
							.handtype5 p:nth-child(2){
								position: relative;
                                top: -35px;
                                width: 70px;
                                >img{
                                    width: 100%;
                                }
							}
							.cursor{
								position: absolute;
								right: -10px;
								bottom: 55px;
							}
							.cursor img{
								width: 66px;
								transform: scale(1.5)
							}
						}
					}
					.wenzi2{
						position: relative;
						left: 100px;
						top: -40px;
						width: 290px;
                        font-size: 14px;
                        line-height: 24px;
                        color: #333333;
                        letter-spacing: 1px;
					}
				}
                .handphone2{
					width: 153px;
					height: 702px;
					background-image: url(../store/imges/bigphone.png);
					background-repeat: no-repeat;
                    background-size: 100%;
					position: relative;
					left: 601px;
					top: 100px;
					.cursor1{
						position: absolute;
						left: 80px;
						top: 220px;
						>img{
                            width: 66px;
							transform: scale(1.5);
						}
					}
					.hand2{
						width: 128px;
						height: 224px;
						position: absolute;
						left: 12px;
						top: 26px;
						// overflow-y: auto;
						animation-direction: 3s;
						animation-delay: 2s;
						>img{
							width: 100%;
                            height: 100%;
						}
					}
                    .wenzi2s{
                        width: 290px;
                        position: absolute;
                        left: -500px;
                        top: 130px;
                        line-height: 24px;
                        color: #333333;
                        letter-spacing: 1px;
                        font-size: 14px;
                    }
				}
            }
			.box5{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				.box5_tit{
					font-size: 20px;
					width: 100%;
					height: 40px;
					line-height: 40px;
					text-align: center;
					letter-spacing: 1px;
				}
				.box5_wrap{
					flex: 1;
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					.box5_top{
						width: 70%;
						height: 40%;
						display: flex;
						margin-bottom: 30px;
						// margin: 0 auto;
						.box5_topLeftImg{
							width: 307.5px;
							height: 202.5px;
							>img{
								width: 100%;
							}
						}
						.box5_topWord{
							width: 345px;
							height: 197px;
							background: #ffffff;
							box-shadow: 0px 0px 5px rgb(46, 45, 45);
							margin-left: -20px;
							margin-top: 40px;
							z-index: 1;
							h4{
								width: 100%;
								height: 36px;
								line-height: 36px;
								padding-left: 16px;
								box-sizing: border-box;
								font-size: 14px;
							}
							h4:before{
								content: '';
								display: inline-block;
								height: 13px;
								width: 2px;
								background: #68C6FB;
								margin-top: 5px;
								margin-right: 3.5px;
								line-height: 13px;
								position: relative;
								top: 2px;
							}
							p{
								width: 100%;
								flex: 1;
								padding: 0 26.5px 0 23px;
								margin-top: 10px;
								font-size: 8px;
								box-sizing: border-box;
							}
						}
					}
					.box5_bot{
						width: 70%;
						height: 40%;
						display: flex;
						// margin: 0 auto;
						.box5_botLeftImg{
							width: 307.5px;
							height: 202.5px;
							margin-left: -20px;
							>img{
								width: 100%;
								height: 100%;
							}
						}
						.box5_botWord{
							width: 345px;
							height: 197px;
							background: #ffffff;
							box-shadow: 0px 0px 5px rgb(46, 45, 45);
							margin-top: 40px;
							z-index: 1;
							h4{
								width: 100%;
								height: 36px;
								line-height: 36px;
								padding-left: 16px;
								box-sizing: border-box;
								font-size: 14px;
							}
							h4:before{
								content: '';
								display: inline-block;
								height: 13px;
								width: 2px;
								background: #68C6FB;
								margin-top: 5px;
								margin-right: 3.5px;
								line-height: 13px;
								position: relative;
								top: 2px;
							}
							p{
								width: 100%;
								flex: 1;
								padding: 0 26.5px 0 23px;
								margin-top: 10px;
								font-size: 8px;
								box-sizing: border-box;
								display: flex;
								flex-direction: column;
								span{
									height: 25.5px;
									line-height: 25.5px
								}
								span:before{
									content: '';
									display: inline-block;
									width: 4px;
									height: 4px;
									border: 1px solid #688CF9;
									border-radius: 50%;
									margin-right: 3px;
									position: relative;
									top: 0.5px;
								}
							}
						}
					}
				}
			}
		}
		
	}
</style>