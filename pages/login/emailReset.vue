<template>
	<view class="emailReset">
		<!-- 顶部登陆字样 -->
		<view class="tips">
			<input class="tip1" type="text" disabled="true" value="邮箱重置"/>
			<input class="tip2" type="text" disabled="true" value="密码长度在5-18位,应包含数字/大小写字母/特殊符号(除空格)的两种以上"/>
		</view>
		
		<!-- 邮箱重置密码输入框 -->
		<view class="reset-input">
			<view class="flex justify-center">
				<view class="email">
					<input class="email-input" type="number" 
					placeholder=" 请输入邮箱" v-model="email"
					@blur="checkEmail()" :focus="emailFocus"/>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="verify flex justify-around">
					<input class="verify-input" type="number" placeholder=" 请输入邮箱验证码"></input>
					<input class="get" disabled="true" v-model="getVerifyValue" @click="$onlyOneClick(getVerify)"></input>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="password">
					<input class="password-input" type="password" placeholder=" 请输入新密码" 
					:focus="passwordFocus" @blur="checkPassword()" v-model="password"/>
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="confirm">
					<input class="confirm-input" type="password" placeholder=" 请重复输入新密码" 
					:focus="comfirmPasswordFocus"  @blur="enterPassword()" v-model="comfirmPassword"/>
				</view>
			</view>
		</view>
		<!-- 登录按钮 -->
		<view class="btn">
			<view>
				<button class="login-btn">登录</button>
			</view>
		</view>
		<view class="flex justify-end" style="margin-top: 20rpx;">
			<input style="text-align: center;" disabled="true" value="短信重置" @click="toSmsReset()"/>
		</view>
		
	</view>
</template>

<script>
	import util from '@/utils/common.js';
	export default{
		data(){
			return{
				email:'',
				emailFocus:false,
				password:'',
				psaawordFocus:false,
				comfirmPassword:'',
				comfirmPasswordFocus:false,
				getVerifyValue:'获取验证码',
				noClick:true,
			}
		},
		methods:{
			checkEmail(){
				if(!util.checkEmail(this.email)){
					uni.showToast({title: '邮箱格式错误',icon: 'none'});
					this.emailFocus=true;
				}
			},
			checkPassword(){
				if(!util.checkPassword(this.password)){
					this.passwordFocus = true,
					uni.showToast({
						title:"密码格式不正确",icon:'error'
					})
				}
			},
			enterPassword(){
				if(this.password!=this.comfirmPassword){
					this.comfirmPasswordFocus = true,
					uni.showToast({
						title:"两次密码不一致",icon:'error'
					})
				}
			},
			getVerify(){
				//邮箱校验再获取
				if(util.checkEmail(this.email)){
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
				}
				else{
					uni.showToast({title: '邮箱格式错误',icon: 'none'});
					this.emailFocus=true;
				}
					
			},
			toSmsReset(){
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
		.email{
			border-radius: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: white;
			.email-input{
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