<template>
	<view class="content">
		<image class="off" src="../../static/image.png" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.to()
		},
		methods: {
			to(){
				setTimeout(()=>{
					uni.navigateTo({
						url:"/pages/login/login"
					})
				},500)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		.off{
			width: 100vh;
			height: 100vh;
		}
	}
	
</style>
