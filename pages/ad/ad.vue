<template>
	<view class="ad">
		<text class="tip">广告尚未投放</text>
		<br>
		作者github主页：{{url}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:""
			}
		},
		onLoad(options) {
			this.url = options.url
		}
	}
</script>

<style scoped>
	.ad {
		text-align: center;
		padding-top: 30px;
	}
	.tip{
		font-weight: bold;
	}
</style>
