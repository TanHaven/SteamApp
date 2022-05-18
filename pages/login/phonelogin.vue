<template>
	<view class="phonelogin">
		<view class="flex justify-center">
			<img class="logo justify-around" src="../../static/logo.png"/>
		</view>
		<view class="login-input">
			<view class="phone flex justify-center solid-bottom">
				<view>
					手机号码<icon class="cuIcon-right lg"></icon>
				</view>
				<view>
					<input type="number" placeholder="请输入手机号码" />
				</view>
				<!-- <input type="number" placeholder="请输入手机号码" /> -->
			</view>
			<view class="password flex justify-center solid-bottom">
				<view>
					密码<icon  class="cuIcon-right lg"></icon>
				</view>
				<input type="password" password="true" placeholder="请输入密码"></input>
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
	.phonelogin{
		height: 100%;
		width: 100%;
		.logo{
			height: 100rpx;
			width: 100rpx;
			margin-top: 30%;
		}
		.login-input{
			margin-top: 30%;
			.phone{
				// border-style: solid;
				// border-width: ;
				// border-bottom-style: solid;
				// border-bottom-color: #FFDFDFDF;
				// width: 80%;
				// background-color: $steam-background-color;
			}
			.password{
				margin-top: 20rpx;
				// border-bottom-style: solid;
				// border-bottom-color: #FFDFDFDF;
				// width: 80%;
			}
		}
		.login-btn{
			width: 80%;
			margin-top: 50rpx;
			background-color: $steam-color-1;
			border-radius: 50rpx;
		}
	}
	
</style>