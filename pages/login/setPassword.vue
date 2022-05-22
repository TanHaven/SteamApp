<template>
	<view class="setPassword">
		<!-- 图标部分 -->
		<view class="logo">
			<view class="flex justify-center">
				<image src="../../static/c.png" style="height: 100rpx;width: 100rpx;"></image>
			</view>
			<view class="flex justify-center">
				<input type="text" disabled="true" value="注册中" style="text-align: center;">
			</view>
			<view class="flex justify-center">
				<input type="text" disabled="true" value="密码应包含数字/大小写字母/特殊符号(除空格)的两种以上" 
				style="text-align: center;width: 100%;">
			</view>
		</view>
		
		<view class="password-input">
			<view class="flex justify-center">
				<view class="key">
					<input class="key-input" type="password" placeholder="请输入5-18位的新密码" 
					@blur="check()" :focus="passwordFocus" v-model="password"/>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="confirm">
					<input class="confirm-input" password="true" placeholder="再次确认密码"
					@blur="enter()" v-model="comfirmPassword" :focus="comfirmPasswordFocus"></input>
				</view>
			</view>
		</view>
		<view class="btn">
			<view>
				<button class="login-btn">确认</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import util from '@/utils/common.js';
	export default {
		data() {
			return {
				password:'',
				comfirmPassword:'',
				passwordFocus:false,
				comfirmPasswordFocus:false
			};
		},
		methods:{
			check(){
				if(!util.checkPassword(this.password)){
					this.passwordFocus=true,
					uni.showToast({
						title: '密码格式错误',icon: 'error'
					})
				}
			},
			enter(){
				if(this.comfirmPassword!=this.password){
					uni.showToast({
						title:"两次密码不一致",icon:'error'
					})
					this.comfirmPasswordFocus=true
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../steam.scss';
	page{
		height: 100%;
		width: 100%;
		background-color: $steam-background-color;
	}
	.setPassword{
		height: 100%;
		width: 100%;
		.logo{
			margin-top: 20%;
		}
		.password-input{
			margin-top: 20%;
		}
		.key{
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.key-input{
				margin-top: 20rpx;
				// margin-left: 30rpx;
				text-align: center;
			}
		}
		.confirm{
			margin-top: 20rpx;
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.confirm-input{
				margin-top: 20rpx;
				// margin-left: 30rpx;
				text-align: center;
			}
		}
		.login-btn{
			width: 80%;
			margin-top: 50rpx;
			background-color: $steam-color-1;
			border-radius: 50rpx;
			color: white;
		}
	}
</style>
