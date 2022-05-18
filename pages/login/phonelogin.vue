<template>
	<view class="phonelogin">
		<view class="tips">
			<input class="tip1" type="text" value="登录"/>
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
	</view>
</template>

<script>
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
			margin-top: 10%;
			margin-left: 10%;
			.tip1{
				height: 60rpx;
				font-size: 50rpx;
			}
			.tip2{
				font-size: 20rpx;
			}
		}
		.login-input{
			margin-top: 30%;
		}
		.phone{
			border-radius: 50rpx;
			width: 70%;
			height: 70rpx;
			background-color: white;
			.phone-input{
				margin-top: 10rpx;
				margin-left: 30rpx;
			}
		}
		.password{
			margin-top: 20rpx;
			border-radius: 50rpx;
			width: 70%;
			height: 70rpx;
			background-color: white;
			.password-input{
				margin-top: 10rpx;
				margin-left: 30rpx;
			}
		}
		.login-btn{
			width: 70%;
			height: 70rpx;
			margin-top: 50rpx;
			background-color: $steam-color-1;
			border-radius: 50rpx;
			text-align: center;
			color: white;
		}
	}
	
</style>