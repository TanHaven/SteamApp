<template>
	<view class="content">
		<image class="off" src="../../static/loading.png" />
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
						和
						<navigator style="color: red;display: inline;">《隐私声明》</navigator>
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
						<button class="cu-btn2" @tap="close()">
							不同意并退出APP
							<!-- <navigator open-type="exit" target="miniProgram">不同意并退出APP</navigator> -->
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName:''
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
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			close(){
				this.modalName = null
			}
		},
		beforeDestroy() {
		}
	}
</script>

<style lang="scss">
	@import '../../steam.scss';
	.content{
		display: flex;
		.off{
			width: 100vh;
			height: 100vh;
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
