<template>
	<view class="content">
		<view class="header">
			<swiper class="swiper-index" :indicator-dots="false" :autoplay="true" :interval="3500" :duration="1000">
				<swiper-item class="swiper-item">
					<navigator url="/pages/ad/ad?url=https://github.com/Zyzdev"><img
							src="/static/imgs/swiper-img-1.jpeg" alt="img-ad-1"></navigator>
				</swiper-item>
				<swiper-item class="swiper-item">
					<navigator url="/pages/ad/ad?url=https://github.com/Zyzdev"><img
							src="/static/imgs/swiper-img-2.jpeg" alt="img-ad-2">
					</navigator>
				</swiper-item>
				<swiper-item class="swiper-item">
					<navigator url="/pages/ad/ad?url=https://github.com/Zyzdev"><img
							src="/static/imgs/swiper-img-3.jpeg" alt="img-ad-3">
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="main">
			<view class="btn-groups-index">
				<u-button>发现</u-button>
				<button>热点</button>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		async onLoad() {
			// this.$u.get('api/index').then(res=>{
			// })
			const res = await this.$u.api.getIndexData()
			console.log(res)
			console.log(this.vuex_user.name)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.swiper-index {
		height: 200px;
	}
	.btn-groups-index button{
		display: inline-block;
	}
</style>
