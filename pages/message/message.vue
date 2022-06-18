<template>
	<view class="message">
		<view class="top flex">
			<view class="left flex justify-start">
				<input class="text1" disabled="true" @click="" value="好友"/>
				<input class="text2" disabled="true" @click="" value="搜索"/>
			</view>
			<view class="right text-xl text-blue">
				<input class="more cuIcon-roundaddfill" @click=""/>
			</view>
		</view>
		
		<view class="content">
			<slot>
				
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "../../steam.scss";
	page{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: $steam-background-color;
	}
	.message{
		.top{
			margin-top: 10%;
			margin-left: 100rpx;
			.left{
				.text1{
					width: 50rpx;
					
				}
				.text2{
					margin-left: 50rpx;
					width: 50rpx;
				}
			}
			.right{
				margin-left: 60%;
				.more{
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
	
</style>
