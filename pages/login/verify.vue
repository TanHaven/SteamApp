<template>
	<view class="phonelogin">
		<!-- 顶部登陆字样 -->
		<view class="tips">
			<input class="tip1" type="text" value="验证码登录"/>
			<input class="tip2" type="text" value="若该手机号未注册,将自动为您注册"/>
		</view>
		
		<!-- 登录输入框 -->
		<view class="login-input">
			<view class="flex justify-center">
				<view class="phone">
					<input class="phone-input" type="number" placeholder=" 请输入手机号码" />
				</view>
			</view>
			
			<view class="flex justify-center">
				<view class="verify flex justify-around">
					<input class="verify-input" password="true" placeholder=" 请输入验证码"></input>
					<input class="get" disabled="true" v-bind:value="getVerifyValue" @click="$onlyOneClick(getVerify)"></input>
				</view>
				<!-- <view class="get-verify">
					<input class="get" password="true" v-bind:value="gerVerifyValue"></input>
				</view> -->
			</view>
		</view>
		<!-- 登录按钮 -->
		<view class="btn">
			<view>
				<button class="login-btn">登录</button>
			</view>
		</view>
		<view class="flex justify-start" style="margin-top: 20rpx;">
			<input style="text-align: center;" disabled="true" value="密码登录" @click="toPhoneLogin()"/>
		</view>
		<!-- 底部协议书 -->
		<view class="box flex justify-center">
			<label style="color: black;">
				登录或注册即代表已同意并阅读
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
				getVerifyValue:'获取验证码',
				noClick:true,
			}
		},
		methods:{
			getVerify(){
				var num = 10;
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
			toPhoneLogin(){
				uni.navigateBack({
					
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