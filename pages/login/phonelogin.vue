<template>
	<view class="phonelogin">
		<view class="tips">
			<input class="tip1" type="text" value="密码登录"/>
			<input class="tip2" type="text" value="欢迎进入少年代码"/>
		</view>
		
		<view class="login-input">
			<view class="flex justify-center">
				<view class="phone">
					<input class="phone-input" type="number" placeholder=" 请输入手机号码" />
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="password">
					<input class="password-input" password="true" placeholder=" 请输入密码"></input>
				</view>
			</view>
		</view>
		<view class="btn">
			<view>
				<button class="login-btn">登录</button>
			</view>
		</view>
		<view class="flex justify-center" style="margin-top: 20rpx;">
			<input style="text-align: center;" disabled="true" value="验证码登录" @click="toVerifyLogin()"/>
			<input style="text-align: center;" disabled="true" value="忘记密码" @click="toSetPassword()"/>
		</view>
		
		<view class="box flex justify-center">
			<label style="color: black;">
				<!-- <checkbox checked="true" color="white" /> -->登录或注册即代表已同意并阅读
					<navigator style="color: blue; display: inline;" @click="">《用户协议》</navigator>
					和
					<navigator style="color: blue; display: inline;" @click="">《隐私协议》</navigator>
			</label>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toVerifyLogin(){
				uni.navigateTo({
					url:"verify"
				})
			},
			toSetPassword(){
				uni.navigateTo({
					url:"emailReset"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../steam.scss";
	page{
		height: 100%;
		background-color: $steam-background-color;
		overflow: hidden;
	}
	.phonelogin{
		height: 100%;
		width: 100%;
		.tips{
			margin-top: 20%;
			margin-left: 10%;
			.tip1{
				height: 60rpx;
				font-size: 50rpx;
				font-weight: bold;
			}
			.tip2{
				font-size: 20rpx;
			}
		}
		.login-input{
			margin-top: 20%;
		}
		.phone{
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.phone-input{
				margin-top: 20rpx;
				margin-left: 30rpx;
			}
		}
		.password{
			margin-top: 20rpx;
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.password-input{
				margin-top: 20rpx;
				margin-left: 30rpx;
			}
		}
		.login-btn{
			width: 80%;
			margin-top: 50rpx;
			background-color: $steam-color-1;
			border-radius: 50rpx;
			color: white;
		}
		.box{
			
			margin-top: 40%;
		}
	}
	
</style>