<template>
	<view class="content">
		<!-- 眼睛 -->
		<view class="eyes padding justify-around">
			<view class="radius eye">
			</view>
			<view class="radius eye">
			</view>
		</view>
		<!-- 用户协议和隐私声明弹窗 -->
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-center">
					<view class="title">用户协议和隐私声明</view>
				</view>
				<view class="padding-xl" style="display: inline;">
					<label>
						请您务必审慎阅读、成分理解“用户协议”和“隐私声明”各条款，
						包括但不限于：为了向您提供音视频、收藏订阅评论互动、分享
						内容等服务，我们需要收集您的观看历史、设备信息、操作日志
						等个人信息。
						您可阅读
						<navigator style="color: red; display: inline;">《用户协议》</navigator>
						<!-- <input type="button" value="《用户协议》" style="color: red;"> -->
						和<navigator style="color: red;display: inline;">《隐私声明》</navigator>
						<!-- <input type="button" value="《隐私声明》" style="color: red;">了解详情。 -->
						如果您同意，请点击“同意”开始接受我们的服务。
					</label>
				</view>
				<view class="cu-bar">
					<view class="action">
						<button class="cu-btn1" @tap="hideModal">同意</button>
					</view>
				</view>
				<view class="cu-bar">
					<view class="action">
						<button class="cu-btn2" @tap="hideModal">不同意并退出APP</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 登录按钮 -->
		<view class="login">
			<view class="btn justify-center">
				<button class="btn1" @click="toWxLogin()">
					<icon class="cuIcon-weixin lg" ></icon>
					微信登陆
				</button>
			</view>
			<view class="btn justify-center">
				<button class="btn2" @click="toPhoneLogin()">手机号登陆</button>
			</view>
			<view class="btn justify-center">
				<input type="button" @click="toQQLogin()" value="——  其他登陆方式  ——" class="other" disabled="true"/>
			</view>
			<view class="flex justify-center">
				<view class="flex justify-center other-icon">
					<image @click="toQQLogin()" src="../../static/qqlogo.png" mode=" center"
					 style="height: 50rpx;width: 50rpx;">
					</image>
				</view>
			</view>
		</view>
		<!-- 勾选框 -->
		<view class="box flex justify-center">
			<label style="color: white;">
				<!-- <view class="wx-checkbox-input">nihao</view> -->
				<checkbox checked="true" color="white" />登录代表已阅读并同意
					<navigator style="color: blue; display: inline;" @click="">《用户协议》</navigator>
					和
					<navigator style="color: blue; display: inline;" @click="">《隐私协议》</navigator>
			</label>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null
			}
		},
		onLoad() {
			this.showModal()
		},
		methods: {
			showModal() {
				this.modalName = "DialogModal1"
			},
			hideModal() {
				this.modalName = null
			},
			to(){
				uni.navigateTo({
					url:""
				})
				this.$store.dispatch("login/login",this)
			},
			toWxLogin(){
				uni.navigateTo({
					url:"wxlogin"
				})
			},
			toPhoneLogin(){
				uni.navigateTo({
					url:"phonelogin"
				})
			},
			toQQLogin(){
				uni.navigateTo({
					url:"qqLogin"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../steam.scss';
	
	.content{
		background-color: $steam-color-1;
		width: 100%;
		height: 100vh;
		.eyes{
			display: flex;
			.eye{
				margin-top: 20%;
				height: 18vh;
				width: 6vh;
				border-radius: 50rpx;
				background-color: white;
			}
		}
		.login{
			margin-top: 20%;
			width: 100%;
			.btn{
				display: flex;
			}
			.btn1{
				color: $steam-color-1;
				border-radius: 50rpx;
				width: 80%;
				font-size: 40rpx;
			}
			.btn2{
				color: $steam-color-1;
				margin-top: 40rpx;
				width: 80%;
				border-radius: 50rpx;
				font-size: 40rpx;
			}
			.other{
				margin-top: 60rpx;
				font-size: 30rpx;
				color: white;
				text-align: center;
			}
			.other-icon{
				background-color: white;
				border-radius: 50rpx; 
				width: 60rpx;
				height: 60rpx;
				margin-top: 15rpx;
			}
		}
		.wx-checkbox-input{
			border-radius: 50rpx;
			transform: scale(0.6);
		}
		.box{
			margin-top: 20%;
		}
		.action{
			width: 100%;
			.cu-btn1{
				background-color: $steam-color-1;
				border-radius: 50rpx;
				width: 80%;
				font-size: 28rpx;
			}
			.cu-btn2{
				width: 80%;
				border-radius: 50rpx;
				font-size: 28rpx;
			}
		}
	}
	
</style>
