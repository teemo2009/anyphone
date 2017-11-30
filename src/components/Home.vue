<template>
	<div class="wrap">
		<div class="content_wrap">
			<keep-alive>
			<router-view />
			</keep-alive>
		</div>
		<div class="tab_wrap">
		<mt-tabbar v-model="selected">
			<mt-tab-item v-for="item in tabs" :key="item.id" :id="item.id">
				<img slot="icon" :src="selected==item.id?item.s:item.n"> {{item.name}}
			</mt-tab-item>
		</mt-tabbar>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	export default {
		data() {
			return {
				selected: "menu",
				tabs:[{
					id:"menu",
					name:"菜单",
					n:require("@/assets/img/menu.png"),
					s:require("@/assets/img/menu_s.png")
				},{
					id:"group",
					name:"套餐",
					n:require("@/assets/img/group.png"),
					s:require("@/assets/img/group_s.png")
				},{
					id:"shopcat",
					name:"购物车",
					n:require("@/assets/img/shop.png"),
					s:require("@/assets/img/shop_s.png")
				},{
					id:"order",
					name:"订单",
					n:require("@/assets/img/order.png"),
					s:require("@/assets/img/order_s.png")
				}]
			}
		},
		methods:{
		},
		watch:{
			selected(cur,old){
				this.$router.push("/"+cur);
			}
		}
	}
</script>

<style scoped>
	.content_wrap{
		position: absolute;
		top:0;
		bottom:0;
		right: 0;
		left: 0;
	}
		
	.tab_wrap{
	right: 0px;
    bottom: 0px;
    left: 0px;
    position: fixed;
    z-index: 1;
	}
	
	.mint-tabbar {
		background-color: #000000;
		color: #FFFFFF;
		font-size: 20px;
	}
	
	.mint-tabbar>.mint-tab-item.is-selected {
		background-color: #000000;
		color: #FFFFFF;
	}
</style>