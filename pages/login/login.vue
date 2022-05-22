<template>
	<view class="content">
		<!-- 眼睛 -->
		<view class="eyes padding justify-around">
			<view class="radius eye">
			</view>
			<view class="radius eye">
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
				<image @click="toQQLogin()" src="../../static/qq.png" mode=" center"
				 style="height: 80rpx;width: 80rpx;margin-top: 20rpx;">
				</image>
			</view>

		</view>
		<!-- 勾选框 -->
		<view class="box flex justify-center">
			<label style="color: white;">
				<!-- <view class="wx-checkbox-input">nihao</view> -->
				<checkbox :checked="isRead" color="white" @click="read()"/>登录代表已阅读并同意
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
				modalName: null,
				isRead:true
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
			read(){
				this.isRead =false
			},
			to(){
				uni.navigateTo({
					url:""
				})
				this.$store.dispatch("login/login",this)
			},
			toWxLogin(){
				if(this.isRead){
					uni.navigateTo({
						url:"wxlogin"
					})
				}
				else{
					uni.showToast({
						title:"请先阅读并同意《用户协议》和《用户信息协议》",icon:"none"
					})
				}
				
			},
			toPhoneLogin(){
				if(this.isRead){
					uni.navigateTo({
						url:"phonelogin"
					})
				}
				else{
					uni.showToast({
						title:"请先阅读并同意《用户协议》和《用户信息协议》",icon:"none"
					})
				}
				// this.$axios({
				// 	method:'GET',
				// 	url:'`/query?${city}`',
				// 	// city=%E9%98%B3%E6%B1%9F&key=c1f0213b1d5dbde7d83be8241040c346
				// 	params:{
				// 		'city':'%E9%98%B3%E6%B1%9F',
				// 		'key':'c1f0213b1d5dbde7d83be8241040c346'
				// 	}
				// }).then(res=>{
				// 	console.log(res.data)
				// },(error)=>{
				// 	console.log(error)
				// })
			},
			toQQLogin(){
				if(this.isRead){
					uni.navigateTo({
						url:"qqLogin"
					})
				}
				else{
					uni.showToast({
						title:"请先阅读并同意《用户协议》和《用户信息协议》",icon:"none"
					})
				}
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
		overflow: hidden;
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
		}
		.wx-checkbox-input{
			border-radius: 50rpx;
			transform: scale(0.6);
		}
		.box{
			margin-top: 20%;
		}
	}
	
</style>
