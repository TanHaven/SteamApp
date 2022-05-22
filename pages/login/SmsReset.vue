<template>
	<view class="emailReset">
		<!-- 顶部登陆字样 -->
		<view class="tips">
			<input class="tip1" type="text" value="短信重置"/>
			<input class="tip2" type="text" value="密码长度在5-18位,应包含数字/大小写字母/特殊符号(除空格)的两种以上"/>
		</view>
		
		<!-- 短信重置密码输入框 -->
		<view class="reset-input">
			<view class="flex justify-center">
				<view class="phone">
					<input class="phone-input" type="number" placeholder=" 请输入手机号" 
					:focus="phoneFocus" @blur="checkPhone()" v-model="phone"/>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="verify flex justify-around">
					<input class="verify-input" type="number" placeholder=" 请输入短信验证码"></input>
					<input class="get" disabled="true" v-bind:value="getVerifyValue" @click="$onlyOneClick(getVerify)"></input>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="password">
					<input class="password-input" type="number" placeholder=" 请输入新密码" 
					@blur="checkPassword()" :focus="passwordFocus" v-model="psaaword"/>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="confirm">
					<input class="confirm-input" type="number" placeholder=" 请重复输入新密码" 
					@blur="confirmPassword()" :focus="enterPasswordfocus" v-model="enterPassword"/>
				</view>
			</view>
		</view>
		<!-- 登录按钮 -->
		<view class="btn">
			<view>
				<button class="login-btn" @click="login()">登录</button>
			</view>
		</view>
		<view class="flex justify-end" style="margin-top: 20rpx;">
			<input style="text-align: center;" disabled="true" value="短信重置" @click="toEmailReset()"/>
		</view>
		
	</view>
</template>

<script>
	import util from '@/utils/common.js';
	export default{
		data(){
			return{
				getVerifyValue:'获取验证码',
				noClick:true,
				phone:'',
				phoneFocus:false,
				psaaword:'',
				passwordFocus:false,
				enterPassword:'',
				enterPasswordfocus:false
			}
		},
		methods:{
			checkPhone(){
				if(!util.checkMobile(this.phone)){
					this.phoneFocus=true,
					uni.showToast({
						title:"手机格式错误",icon:'error'
					})
				}
			},
			checkPassword(){
				if(!util.checkPassword(this.psaaword)){
					this.passwordFocus=true,
					uni.showToast({
						title:"密码格式错误",icon:'error'
					})
				}
			},
			confirmPassword(){
				if(this.password!=this.enterPassword){
					uni.showToast({
						title:"两次密码不一致",icon:'error'
					})
					this.enterPasswordfocus=true
					return false;
				}
				else{
					return true;
				}
			},
			getVerify(){
				var num = 60;
				var timer = setInterval(()=>{
					this.noClick=false
					this.getVerifyValue=num+"秒后重新获取";
					num--;
					// console.log(this.getVerifyValue)
					if(num==-1){
						this.getVerifyValue = '获取验证码'
						this.noClick=true
						clearInterval(timer)
					}
				},1000);	
			},
			login(){
				if(this.confirmPassword()){
					//登录
				}
				else{
					
				}
			},
			toEmailReset(){
				uni.navigateTo({
					url:"SmsReset"
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
	.emailReset{
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
		.reset-input{
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
		.verify{
			margin-top: 20rpx;
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.verify-input{
				margin-top: 20rpx;
				margin-left: 30rpx;
				width: 50%;
			}
			.get{
				margin-top: 20rpx;
				text-align: center;
				border-left-style: solid;
				color: $steam-color-1;
				border-width: 3rpx;
				border-color: $steam-background-color;
				width: 40%;
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
		.confirm{
			margin-top: 20rpx;
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.confirm-input{
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
	}
</style>