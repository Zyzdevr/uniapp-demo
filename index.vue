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
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			<view class="list-goods u-skeleton">
				<navigator url="#" class="good" v-for="item in (goods.length !== 0 ? goods : 6)" :key="item.id">
					<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url"></u-image>
					<view class="name-good">{{item.title}}</view>
					<view class="info-good">
						<text class="price-good u-skeleton-fillet">￥{{item.price}}</text>
						<text class="sales-good u-skeleton-fillet">销量：{{item.sales}}</text>
					</view>
				</navigator>
			</view>
		</view>
		<!--骨架屏-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#fff"></u-skeleton>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [{
					name: '今日推荐'
				}, {
					name: '销量优先'
				}, {
					name: '最近上新',
				}],
				current: 0,
				goods: [],
				loading: false,
			}
		},
		async onLoad() {
			// this.$u.get('api/index').then(res=>{
			// })
			this.loading = true
			const res = await this.$u.api.getIndexData()
			this.loading = false
			this.goods = res.goods.data
			console.log(this.goods)
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.swiper-index {
		height: 200px;
	}

	.btn-groups-index button {
		display: inline-block;
	}

	.main .list-goods {
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.main .list-goods .good {
		padding-bottom: 15rpx;
		margin: 20rpx;
		width: 300rpx;
		border-radius: 20rpx;
		display: block;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	}

	.name-good {
		padding: 10rpx;
		font-weight: 550;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.info-good {
		display: flex;
		justify-content: space-between;
	}

	.price-good {
		color: #ff0000;
		margin-left: 8rpx;
	}

	.sales-good {
		color: #959595;
		margin-right: 15rpx;
	}
</style>
